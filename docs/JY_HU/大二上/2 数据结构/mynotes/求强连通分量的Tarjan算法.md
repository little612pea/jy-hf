求强连通分量的Tarjan算法

```c
tarjan(u)
{
    dfn[u]=low[u]=++Index                      
    stack.push(u)                              
    for each (u, v) in E                       
        if (v is not visted)              
            tarjan(v)                  
            low[u] = min(low[u], low[v])
        else if (v in S)                   
            low[u] = min(low[u], dfn[v])
    if (dfn[u] == low[u])                     
        repeat
            v = stack.pop                
            print v
        until (u== v)
}

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190310223423534.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0MzgzNQ==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190310224302177.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0MzgzNQ==,size_16,color_FFFFFF,t_70)

```c
1 tarjan(u)
2 {
3    dfn[u]=low[u]=++Index                      
4    stack.push(u)                              
5    for each (u, v) in E                       
6        if (v is not visted)              
7            tarjan(v)     //节点7执行tarjan时， 执行了第10行，将low更新为4        
8            low[u] = min(low[u], low[v]) //然后返回节点6，还是执行第10行（此时7已经visited）
9        else if (v in S)                   
10            low[u] = min(low[u], dfn[v]) //因此6的low也变成了4
11    if (dfn[u] == low[u])             //6的递归父亲是5，直到执行到5才将栈中所有这个强联通分量   
12        repeat						//的所有元素弹出
13            v = stack.pop                
14            print v
15        until (u== v) 
16}
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/20190310224850577.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg0MzgzNQ==,size_16,color_FFFFFF,t_70)





```c
int instack[MaxVertices];
int stack[MaxVertices];
int dfn[MaxVertices],low[MaxVertices];
int stackLen;
int index;

int min(int a,int b)
{
    return a<b?a:b;
}

void tarjan(Graph G,Vertex vert, void (*visit)(Vertex V))
{
    dfn[vert] = low[vert] = ++index;
    stack[stackLen++] = vert;
    instack[vert] = 1;
    for(PtrToVNode vnode = G->Array[vert];vnode;vnode=vnode->Next)
    {
        Vertex other = vnode->Vert;
        if(dfn[other] == 0)
        {
            tarjan(G,other,visit);
            low[vert] = min(low[vert],low[other]);
        }
        else if(instack[other])
        {
            low[vert] = min(low[vert],dfn[other]);
        }
    }

    if(dfn[vert] == low[vert])
    {
        while(stack[stackLen-1]!=vert)//why while(dfn[Vert]!=low[vert]) does not work?
        {
            Vertex top = stack[stackLen-1];
            stackLen--;
            instack[top]=0;
            visit(top);
        }
        stackLen--;
        instack[vert]=0;
        visit(vert);
        printf("\n");
    }
}

void StronglyConnectedComponents( Graph G, void (*visit)(Vertex V) )
{
    for(int i=0;i<G->NumOfVertices;i++)
    {
        if(dfn[i] == 0)
            tarjan(G,i,visit);
    }
}
```

