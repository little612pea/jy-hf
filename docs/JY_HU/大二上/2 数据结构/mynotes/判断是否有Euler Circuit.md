# 判断是否有Euler Circuit，打印一条路径

注意circuit是回路，要回去到起点的，euler tour可以不用回到起点，但经过每条边

判断是否存在欧拉回路主要就是看有没有度为奇数的边

**A.判断欧拉通路是否存在的方法**

有向图：图连通，有一个顶点出度大入度1，有一个顶点入度大出度1，其余都是出度=入度。

无向图：图连通，只有两个顶点是奇数度，其余都是偶数度的。

**B.判断欧拉回路是否存在的方法**

有向图：图连通，所有的顶点出度=入度。

无向图：图连通，所有顶点都是偶数度。

```c
int isEulerCircuit(Graph *graph) {
    visited[i]=0;//设置visited数组为全0

    int oddDegreeCount = 0;

    for (int i = 0; i < graph->vertices; i++) {
        if ((i == 0 && isValidEdge(graph, i, i + 1)) || (i > 0 && isValidEdge(graph, i, i - 1)))
            eulerDFS(graph, i, visited);

        for (int j = 0; j < graph->vertices; j++) {
            if (!visited[j] && isValidEdge(graph, i, j)) {
                oddDegreeCount++;
                eulerDFS(graph, j, visited);
            }
        }
    }

    free(visited);

    return oddDegreeCount == 0;
}
void eulerDFS(Graph *graph, int vertex, int *visited) {
    visited[vertex] = 1;

    for (int i = 0; i < graph->vertices; i++) {
        if (graph->adjacencyMatrix[vertex][i] && !visited[i]) {
            printf("%d -> %d\n", vertex, i);
            eulerDFS(graph, i, visited);
        }
    }
}
int isValidEdge(Graph *graph, int u, int v) {
    int countU = 0, countV = 0;

    for (int i = 0; i < graph->vertices; i++) {
        if (graph->adjacencyMatrix[u][i])
            countU++;
        if (graph->adjacencyMatrix[v][i])
            countV++;
    }

    if (countU == 1)
        return 1;
    if (countV == 1)
        return 1;

    return 0;
}
```



```c
#include<cstdio>
#include<stdio.h>
#include<cstring>
#include<algorithm>
#define MAX 2010
using namespace std;
int maps[MAX][MAX];
int in[MAX];
int t[MAX];
int flag;
int k;
int Max,Min;
int DFS(int x)
{
    int i;
    for(i=Min;i<=Max;i++)
    {
        if(maps[x][i])///从任意一个与它相连的点出发
        {
            maps[x][i]--;///删去遍历完的边
            maps[i][x]--;
            DFS(i);
        }
    }
    t[++k]=x;///记录路径，因为是递归所有倒着记
}
int main()
{
    int n,i,x,y;
    Max=-9999;
    Min=9999;
    flag=0;
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        scanf("%d%d",&x,&y);
        maps[x][y]++;
        maps[y][x]++;
        Max=max(x,max(y,Max));
        Min=min(x,min(y,Min));
        in[x]++;
        in[y]++;
    }
    for(i=Min;i<=Max;i++)
    {
        if(in[i]%2)///存在奇度点，说明是欧拉通路
        {
            flag=1;
            DFS(i);
            break;
        }
    }
    if(!flag)///全为偶度点，从标号最小的开始找
    {
        DFS(Min);
    }
    for(i=k;i>=1;i--)
    {
        printf("%d\n",t[i]);
    }
    return 0;
}
```

