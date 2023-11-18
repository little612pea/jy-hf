# FDS-notes-2023

注意复习：填空题，以下内容均可能作为填空

![zigzag.jpg](D:\notes\assets\337cbfb0-a7b2-4500-9664-318e9ffc870e.jpg)

## 树

四种遍历顺序

层序 1 11 5 12 17 8 20 15

中序 12 11 20 17 1 15 8 5

前序 1 11 12 17 20 5 8 15

后序 12 20 17 11 15 8 5 1

```c
level-order(Tree T){
    //注意level-order使用了while，是enqueue
    enqueue(T)
	while(queue is not empty){
        print(T = dequeue())
		enqueue(T->left)
        enaueue(T->right)
    }
}

//以下为错误的层序遍历做法！
void zigzag_levelorder(tree_ptr tree, int rev, queue_ptr queue)
{
    enqueue(tree, queue);
    while (is_empty(queue) == 0)
    {
        tree_ptr T = dequeue(queue);
        visit(T); // 打印出这层的节点
        // 在此处调整顺序
        if (rev == 0)
        {
            rev = 1;
            zigzag_levelorder(T->left, rev, queue);//应该改为enqueue~~
            zigzag_levelorder(T->right, rev, queue);
        }
        else
        {
            rev = 0;
            zigzag_levelorder(T->right, rev, queue);
            zigzag_levelorder(T->left, rev, queue);
        }
    }
}
//zigzag-levelorder hw4真是多金
int zigzag_levelorder(tree_ptr tree, queue_ptr queue)
{
    // zigzag的层序遍历
    int level = 0;
    enqueue(tree, queue);
    while (is_empty(queue) == 0)
    {
        int len = queue->rear - queue->front;
        if (level % 2)
        {
            for (int i = queue->front; i < queue->front + len; i++)
            {
                printf(" %d", queue->list[i]->data);
            }
        }
        else
        {
            for (int i = queue->front + len - 1; i >= queue->front; i--)
            {
                if (level == 0)
                    printf("%d", queue->list[i]->data);
                else
                    printf(" %d", queue->list[i]->data);
            }
        }
        //到此为止，往上：打印，也就是visit
        //往下，enqueue
        for (int i = queue->front; i < queue->front + len; i++)
        {
            if (queue->list[i]->left != NULL)
                enqueue(queue->list[i]->left, queue);
            if (queue->list[i]->right != NULL)
                enqueue(queue->list[i]->right, queue);
        }
        queue->front = queue->front + len;
        level++;
    }
}



in-order(Tree T){
	if(T){
        pre-order(T->left)
        print(T);
        pre-order(T->right)
    }
}

in-order-iterative(Tree_ptr Tree){
	//写成iterative的形式,使用栈模拟
    //先将最左边一条全部进栈，弹出栈顶节点（离叶子层较近的节点）后右节点进栈
    stack S = init_stack();
    while(1){
        while(Tree->left!=NULL)S.push(Tree = Tree->left);
        Tree = S.pop();
        if(Tree == NULL)break; //直到stack弹空，退出while循环
        print(Tree->data);
        Tree = Tree->right;
    }
    
}

pre-order(Tree T){
	if(T){
		print(T);
        pre-order(T->left)
        pre-order(T->right)
    }
}

post-order(Tree T){
	if(T){
        post-order(T->left)
        post-order(T->right)
        print(T);
    }
}



```



前序的第一个元素和后序的最后一个元素为根节点

中序从左到右，实际上的根节点将数组分成了完整的两个部分，因此只要确定当前的根节点，就能找出左、右子树的区间

## 中序遍历+后序遍历建树：week-4-hw

```c
//由中序遍历和后序遍历建立上面的树：
//中序遍历：12 11 20 17 1 15 8 5 
//后序遍历：12 20 17 11 15 8 5 1
//index =             4   
//11为新树的根节点

tree_ptr build_tree(int *in_order, int *post_order, int n)
{
    if (n <= 0 || in_order == NULL || post_order == NULL || n > MAX_NODE_NUM)
        return NULL;
    tree_ptr root = (tree_ptr)malloc(sizeof(tree_node));
    root->data = post_order[n - 1];
    int index = 0;
    for (int i = 0; i < n; i++)
    {
        if (in_order[i] == post_order[n - 1]) //中+后：取后序区间的最后一个元素，在中序中找到
            index = i;                        //该元素的index，传入下面的递归
    }
    // 把中序序列分成两部分，左边的是左子树，右边的是右子树
    // 此处 in_order + index + 1 忘记+1，导致只有左枝的左子树建成了右子树
    root->left = build_tree(in_order, post_order, index);
    // in_order/post_order的[0~index-1],共index个数
    root->right = build_tree(in_order + index + 1, post_order + index, n - index - 1);
    // in_order/post_order的[index+1~n-1]，共n-1-(index+1)+1 = n-1-index个数
    //左右加起来为n-1个数，刚好少了根节点
    return root;
}
```

形象一点：一遍过后：

中序 （左子树：12 11 20 17 ）【1】 （右子树：15 8 5）

后序 （12 20 17 11）（ 15 8 5）【1】

两遍后：

中序 （（12） 11 （20 17） ）【1】 （（15 8 ）{5}（））

后序 （（12） （20 17） {11}）（ （15 8） {5}）【1】

## 前序遍历+中序遍历建树：lab2

```c
tree_ptr build_tree(int *pre_order, int pre_left, int pre_right, int *in_order, int in_left, int in_right)
{
    // 先序遍历建树,先处理根节点，再处理左子树，再处理右子树
    if (pre_left > pre_right || in_left > in_right)
    {
        return NULL;
    }
    int k;
    for (k = in_left; k <= in_right; k++)
    {
        // 找到根节点在中序遍历中的位置
        if (in_order[k] == abs(pre_order[pre_left]))
        {
            break;
        }
    }
    int num_left = k - in_left; // 左子树的节点数
    tree_ptr root = (tree_ptr)malloc(sizeof(tree_node));
    root->data = abs(pre_order[pre_left]);
    root->color = red_or_black(pre_order[pre_left]);
    root->left = build_tree(pre_order, pre_left + 1, pre_left + num_left, in_order, in_left, k - 1); //除开pre_order[0](根节点),左树的区间[pre_left+1,pre_left+num_left-1]
    root->right = build_tree(pre_order, pre_left + num_left + 1, pre_right, in_order, k + 1, in_right);
    return root;
}
```

中序 （12 11 20 17） 【1】 （15 8 5）

前序【1】 （11 12 17 20）（ 5 8 15）

```c
//自己写写 BST ADT，看看有什么问题
- SearchTree  MakeEmpty( SearchTree T ){
	T->left = NULL;
    T->right = NULL;
    T->
  }
- Position  Find( ElementType X, SearchTree T ){
	//查找元素，从T开始找，返回指向该节点的position，一个node*
    if(T==NULL)return NULL;//没有找到
    if(T->data == X)return T;
    if(T->->data< X){
        Find(T->right);
    }
    else if(T->data > X){
        Find(T->left);
    }
    
}

- Position  FindMin( SearchTree T ){
    //找最小元素
    if(T==NULL)return NULL;//当前树不存在
    else{
        if(T->left!=NULL){
			FindMin(T->left)
        }
    }
    return T;
    /*别用while:while(T->left!=NULL){
		T = T->left;
        FindMin(T);
    }
    return T;*/
}
- Position  FindMax( SearchTree T ){
    //同上
    while(T->right!=NULL){
		T = T->right;
        FindMax(T);
    }
    return T;
}
- SearchTree  Insert( ElementType X, SearchTree T ){
    //二叉树的正确插入顺序
    if(T==NULL){
		node* new_node = (node*)malloc(sizeof(node));
        T->data = X;
        T->left = NULL;
        T->right = NULL;
        return T;
    }
    if(T->data>X){
		Insert(X,T->left);
    }
    else if(T->data<X){
		Insert(X,T->right);
    }
    return T;
}
- SearchTree  Delete( ElementType X, SearchTree T ){
    //删除某元素，是在查找的基础上
    SearchTree pos = FindMax(X,T);
    //分类讨论，若pos的度为0/1/2
    if(pos==NULL)return;
    else if(pos->left = NULL && pos->right){
		pos = pos->right
    }
    else if(pos->right = NULL && pos->left){
		pos = pos->left
    }
    else{
        //度为2,用左子树的最大节点替换当前pos指向的根节点
        SearchTree pos_right_max = FindMax(pos->right)
        pos->data = pos_right_max->data;
        Delete(pos->data,pos->right);
        return pos;
    }
}
- ElementType  Retrieve( Position P ){
    return P->data;
}

```

## 双端队列 double-ended queue，简称Deque

链表实现

```c
#include <stdio.h>
#include <stdlib.h>

// 定义双端队列节点结构
struct Node {
    int data;
    struct Node* next;
};

// 定义双端队列结构
struct Deque {
    struct Node* front;  // 队头指针
    struct Node* rear;   // 队尾指针
};

// 创建一个新的双端队列
struct Deque* createDeque() {
    struct Deque* deque = (struct Deque*)malloc(sizeof(struct Deque));
    deque->front = NULL;
    deque->rear = NULL;
    return deque;
}
//**************************
// 在队头插入元素，脑袋要有那个三角形，先将新节点指向front指向的node，然后再将front移到新节点上
//front想象成一个数据域为黑，只有指针的dummy node
//且总是先将新节点各参数赋值完毕后再进行串联
//**************************
void insertFront(struct Deque* deque, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = deque->front;
    deque->front = newNode;
    if (deque->rear == NULL) {
        deque->rear = newNode;
    }
}

// 在队尾插入元素，若rear==NULL 则说明deque为空，此时与front有关，否则只需处理rear指针
void insertRear(struct Deque* deque, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    if (deque->rear == NULL) {
        deque->front = newNode;
        deque->rear = newNode;
    } else {
        deque->rear->next = newNode;
        deque->rear = newNode;
    }
}

// 从队头删除元素,注意无论是从队头/队尾删除时，先要保证头/尾指针不是NULL，在删除完后还要判断是否删掉了
//deque中的最后一个元素，如果是则要将front和rear都赋值为NULL
void deleteFront(struct Deque* deque) {
    if (deque->front != NULL) {
        struct Node* temp = deque->front;
        deque->front = deque->front->next;
        free(temp);
        if (deque->front == NULL) {
            deque->rear = NULL;
        }
    }
}

// 从队尾删除元素
void deleteRear(struct Deque* deque) {
    if (deque->rear != NULL) {
        if (deque->front == deque->rear) {
            free(deque->front);
            deque->front = NULL;
            deque->rear = NULL;
        } else {
            struct Node* temp = deque->front;
            while (temp->next != deque->rear) {
                temp = temp->next;
            }
            free(deque->rear);
            deque->rear = temp;//temp向后遍历的过程，易出填空题
            deque->rear->next = NULL;
        }
    }
}

// 检查双端队列是否为空
int isEmpty(struct Deque* deque) {
    return (deque->front == NULL);
}

// 打印双端队列中的元素
void printDeque(struct Deque* deque) {
    struct Node* current = deque->front;
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

// 主函数
int main() {
    struct Deque* deque = createDeque();

    insertFront(deque, 1);
    insertRear(deque, 2);
    insertFront(deque, 3);

    printDeque(deque);

    deleteFront(deque);
    printDeque(deque);

    insertRear(deque, 4);
    printDeque(deque);

    deleteRear(deque);
    printDeque(deque);

    return 0;
}

```



数组实现

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

// 定义双端队列结构
struct Deque {
    int arr[MAX_SIZE];
    int front;
    int rear;
};

// 创建一个新的双端队列
struct Deque* createDeque() {
    struct Deque* deque = (struct Deque*)malloc(sizeof(struct Deque));
    deque->front = -1;
    deque->rear = -1;
    return deque;
}

// 在队头插入元素
void insertFront(struct Deque* deque, int data) {
    if (deque->front == -1) {
        deque->front = 0;
        deque->rear = 0;
        deque->arr[deque->front] = data;
    } else if (deque->front > 0) {
        deque->arr[--deque->front] = data;
    } else {
        printf("Deque is full (front).\n");
    }
}

// 在队尾插入元素
void insertRear(struct Deque* deque, int data) {
    if (deque->rear == -1) {
        deque->front = 0;
        deque->rear = 0;
        deque->arr[deque->rear] = data;
    } else if (deque->rear < MAX_SIZE - 1) {
        deque->arr[++deque->rear] = data;
    } else {
        printf("Deque is full (rear).\n");
    }
}

// 从队头删除元素
void deleteFront(struct Deque* deque) {
    if (deque->front != -1) {
        if (deque->front == deque->rear) {
            deque->front = -1;
            deque->rear = -1;
        } else {
            deque->front++;
        }
    } else {
        printf("Deque is empty (front).\n");
    }
}

// 从队尾删除元素
void deleteRear(struct Deque* deque) {
    if (deque->rear != -1) {
        if (deque->front == deque->rear) {
            deque->front = -1;
            deque->rear = -1;
        } else {
            deque->rear--;
        }
    } else {
        printf("Deque is empty (rear).\n");
    }
}

// 检查双端队列是否为空
int isEmpty(struct Deque* deque) {
    return (deque->front == -1);
}

// 打印双端队列中的元素
void printDeque(struct Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty.\n");
        return;
    }

    printf("Front: %d, Rear: %d\n", deque->front, deque->rear);
    printf("Elements: ");
    for (int i = deque->front; i <= deque->rear; i++) {
        printf("%d ", deque->arr[i]);
    }
    printf("\n");
}

// 主函数
int main() {
    struct Deque* deque = createDeque();

    insertFront(deque, 1);
    insertRear(deque, 2);
    insertFront(deque, 3);

    printDeque(deque);

    deleteFront(deque);
    printDeque(deque);

    insertRear(deque, 4);
    printDeque(deque);

    deleteRear(deque);
    printDeque(deque);


```



## 循环队列

链表实现

```c
#include <stdio.h>
#include <stdlib.h>

// 定义循环队列节点结构
struct Node {
    int data;
    struct Node* next;
};

// 定义循环队列结构
struct CircularQueue {
    struct Node* front;
    struct Node* rear;
};

// 创建一个新的循环队列
struct CircularQueue* createCircularQueue() {
    struct CircularQueue* queue = (struct CircularQueue*)malloc(sizeof(struct CircularQueue));
    queue->front = NULL;
    queue->rear = NULL;
    return queue;
}

// 入队操作
void enqueue(struct CircularQueue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    if (queue->rear == NULL) {
        queue->front = newNode;
        queue->rear = newNode;
        newNode->next = newNode; // 链接到自身以构成循环
    } else {
        newNode->next = queue->front;
        queue->rear->next = newNode;
        queue->rear = newNode;
    }
}

// 出队操作
int dequeue(struct CircularQueue* queue) {
    if (queue->front == NULL) {
        printf("Queue is empty.\n");
        return -1; // 队列为空时返回-1
    }
    int data = queue->front->data;
    struct Node* temp = queue->front;
    if (queue->front == queue->rear) {
        queue->front = NULL;
        queue->rear = NULL;
    } else {
        queue->front = queue->front->next;
        queue->rear->next = queue->front;
    }
    free(temp);
    return data;
}

// 检查循环队列是否为空
int isEmpty(struct CircularQueue* queue) {
    return (queue->front == NULL);
}

// 打印循环队列中的元素
void printCircularQueue(struct CircularQueue* queue) {
    struct Node* current = queue->front;
    if (current == NULL) {
        printf("Circular Queue is empty.\n");
        return;
    }
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != queue->front);
    printf("\n");
}

// 主函数
int main() {
    struct CircularQueue* queue = createCircularQueue();

    enqueue(queue, 1);
    enqueue(queue, 2);
    enqueue(queue, 3);
    enqueue(queue, 4);

    printCircularQueue(queue);

    dequeue(queue);
    dequeue(queue);

    printCircularQueue(queue);

    enqueue(queue, 5);
    printCircularQueue(queue);

    dequeue(queue);
    dequeue(queue);
    dequeue(queue);
    dequeue(queue);

    printCircularQueue(queue);

    return 0;
}

```

数组实现

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

// 定义循环队列结构
struct CircularQueue {
    int arr[MAX_SIZE];
    int front;
    int rear;
};

// 创建一个新的循环队列
struct CircularQueue* createCircularQueue() {
    struct CircularQueue* queue = (struct CircularQueue*)malloc(sizeof(struct CircularQueue));
    queue->front = -1;
    queue->rear = -1;
    return queue;
}

// 入队操作
void enqueue(struct CircularQueue* queue, int data) {
    if ((queue->rear + 1) % MAX_SIZE == queue->front) {
        printf("Queue is full.\n");
        return;
    }
    if (queue->front == -1) {
        queue->front = 0;
        queue->rear = 0;
        queue->arr[queue->rear] = data;
    } else {
        queue->rear = (queue->rear + 1) % MAX_SIZE;
        queue->arr[queue->rear] = data;
    }
}

// 出队操作
int dequeue(struct CircularQueue* queue) {
    if (queue->front == -1) {
        printf("Queue is empty.\n");
        return -1;
    }
    int data = queue->arr[queue->front];
    if (queue->front == queue->rear) {
        queue->front = -1;
        queue->rear = -1;
    } else {
        queue->front = (queue->front + 1) % MAX_SIZE;
    }
    return data;
}

// 检查循环队列是否为空
int isEmpty(struct CircularQueue* queue) {
    return (queue->front == -1);
}

// 打印循循环队列中的元素
void printCircularQueue(struct CircularQueue* queue) {
    if (isEmpty(queue)) {
        printf("Circular Queue is empty.\n");
        return;
    }

    int i = queue->front;
    do {
        printf("%d ", queue->arr[i]);
        i = (i + 1) % MAX_SIZE;
    } while (i != (queue->rear + 1) % MAX_SIZE);
    printf("\n");
}

// 主函数
int main() {
    struct CircularQueue* queue = createCircularQueue();

    enqueue(queue, 1);
    enqueue(queue, 2);
    enqueue(queue, 3);
    enqueue(queue, 4);

    printCircularQueue(queue);

    dequeue(queue);
    dequeue(queue);

    printCircularQueue(queue);

    enqueue(queue, 5);
    printCircularQueue(queue);

    dequeue(queue);
    dequeue(queue);
    dequeue(queue);
    dequeue(queue);

    printCircularQueue(queue);

    return 0;
}
```



## 双向循环链表

```c
#include <stdio.h>
#include <stdlib.h>

// 定义双向循环链表节点结构
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// 创建一个新的双向循环链表
struct Node* createDoublyCircularLinkedList(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = newNode;
    newNode->prev = newNode;
    return newNode;
}

// 在双向循环链表的末尾插入节点
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = (*head);
    newNode->prev = (*head)->prev;
    (*head)->prev->next = newNode;
    (*head)->prev = newNode;
}

// 打印双向循环链表的元素
void printDoublyCircularLinkedList(struct Node* head) {
    if (head == NULL) {
        printf("Empty Doubly Circular Linked List\n");
        return;
    }

    struct Node* current = head;
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);
    printf("\n");
}

// 主函数
int main() {
    struct Node* head = createDoublyCircularLinkedList(1);

    insertAtEnd(&head, 2);
    insertAtEnd(&head, 3);

    printf("Doubly Circular Linked List: ");c 
    printDoublyCircularLinkedList(head);

    return 0;
}

```

[二分法的细节加细节 你真的应该搞懂！！！_二分算法-CSDN博客](https://blog.csdn.net/xiao_jj_jj/article/details/106018702)

[折半查找判定树——（快速判断某棵树是否为折半查找判定树）_折半查找树_叫我蘑菇先生的博客-CSDN博客](https://blog.csdn.net/weixin_43305485/article/details/120619942)



对任意无序序列可建立完全二叉查找树

先对序列排序，排序后得到升序序列为中序遍历顺序

已知父节点i，可求出子节点下标2i和 2i+1



```c
void make_tree(int* tree, int* a,int n,int p,int* i){
    if(p>n||p<1||(*i)>n){
        return;
    }
    make_tree(tree,a,n,p*2,i);
    tree[p] = a[(*i)++];
    make_tree(tree,a,n,p*2+1,i);
}
```

直接找到越界为止