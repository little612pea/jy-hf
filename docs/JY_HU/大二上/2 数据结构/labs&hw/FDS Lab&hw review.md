# FDS Lab&hw review

来看看什么是逆天奇才

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define MAX_N 500
#define INF 100000000
int visited[MAX_N] = {0};
int parent[MAX_N] = {-1};

char* names[MAX_N];      // 存储所有的节点名
int graph[MAX_N][MAX_N]; // 邻接矩阵,graph[start[3]][end[3]]表示从start到end的边

void print_matrix(int count);
int bfs(int start, int end, int count);
int solve(int source, int sink, int count);

int find(char *name, int num)
{
    for (int i = 0; i < num; i++)
    {
        if (names[i] != NULL && strcmp(names[i], name) == 0)
        {
            return 0;
        }
    }
    return 1;
}

int main()
{
    char* source=malloc(sizeof(char) * 3);
    char* destination=malloc(sizeof(char) * 3);
    int num;
    scanf("%s %s %d", source, destination, &num);
    for(int i=0;i<MAX_N;i++)
    names[i]=(char*)malloc(sizeof(char) * 3);
    
    names[0] = source;
    names[1] = destination;
    int count = 1;
    for (int i = 0; i < num; i++)
    {
        char* start=malloc(sizeof(char) * 3);
        char* end=malloc(sizeof(char) * 3);
        int capacity;
        scanf("%s %s %d", start, end, &capacity);
        if (find(start, num))
        {
            count++;
            names[count]= start;
        }
        if (find(end, num))
        {
            count++;
            names[count] = end;
        }
        // 找到start和end在names中的下标
        int start_index = 0, end_index = 0;
        for (int j = 0; j < num; j++)
        {
            if (names[j]!= NULL && strcmp(names[j], start) == 0)
            {
                start_index = j;
            }
            if (names[j] != NULL && strcmp(names[j], end) == 0)
            {
                end_index = j;
            }
        }
        graph[start_index][end_index] = capacity;
    }
    //print_matrix(count);
    // 用队列实现广度优先搜索，找到一条路径后，将这条路径上的所有边的容量减去这条路径上所有边容量的最小值
    // 用一个数组记录每个节点的前驱节点，找到一条路径后，从终点开始，沿着前驱节点回溯，找到一条路径
    // 同时添加一条反向边，容量和所有边容量的最小值相同，这样就可以找到下一条路径
    int res =  solve(0, 1, count);
    printf("%d\n", res);

}

void print_matrix(int count)
{
    // graph[i][j]表示从i到j的边,
    for (int i = 0; i <= count; i++)
    {
        printf("%4s ", names[i]);
    }
    printf("\n");
    for (int i = 0; i <= count; i++)
    {
        for (int j = 0; j <= count; j++)
        {
            printf("%4d ", graph[i][j]);
        }
        printf("\n");
    }
    printf("count:%d\n", count);
}

typedef struct
{
    int front;
    int rear;
    int list[MAX_N];
} queue;
typedef queue *queue_ptr;

void enqueue(int data, queue_ptr queue)
{
    queue->list[queue->rear++] = data;
}

int dequeue(queue_ptr queue)
{
    if (queue->front == queue->rear)
        return -1;
    int data = queue->list[queue->front++];
    return data;
}

int is_empty(queue_ptr queue)
{
    if (queue->front == queue->rear)
        return 1;
    else
        return 0;
}

int bfs(int start, int end, int count)
{
    queue_ptr bfs_queue = (queue_ptr)malloc(sizeof(queue));
    bfs_queue->front = 0;
    bfs_queue->rear = 0;
    // 使用visited数组记录已经访问过的节点,visited[i] = 1表示节点i已经访问过,初始化为0
    for (int i = 0; i <= count; i++)
    {
        visited[i] = 0;
        parent[i] = -1; // parent[i]表示节点i的前驱节点
    }
    enqueue(start, bfs_queue);
    while (!is_empty(bfs_queue))
    {
        int current = dequeue(bfs_queue);
        for (int i = 0; i <= count; i++)
        {
            if (!visited[i] && graph[current][i] > 0)
            {
                parent[i] = current;
                visited[i] = 1;
                enqueue(i, bfs_queue);
                // 如果有边
                if (i == end)
                    return 1; // 找到了
            }
        }
    }
    return 0;
}

int solve(int source, int sink, int count)
{
    int maxFlow = 0;

    while (bfs(source, sink, count))
    {
        int pathFlow = INF;

        // 寻找增广路径上的最小流量
        for (int v = sink; v != source; v = parent[v])
        {
            int u = parent[v];
            pathFlow = (pathFlow < graph[u][v]) ? pathFlow : graph[u][v];
        }

        // 更新增广路径上的流量
        for (int v = sink; v != source; v = parent[v])
        {
            int u = parent[v];
            graph[u][v] -= pathFlow;
            graph[v][u] += pathFlow;
        }

        maxFlow += pathFlow;
    }

    return maxFlow;
}
```

