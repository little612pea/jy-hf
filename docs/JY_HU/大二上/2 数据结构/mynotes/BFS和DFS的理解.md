# BFS：

1. 拓扑排序及其改进

   ```c
   /*Test an AOV for feasibility, and generate a topological order if possible*/
   void Topsort( Graph G )
   {   
   	int Counter;
       Vertex V, W;
       for ( Counter = 0; Counter < NumVertex; Counter++ ) 
       {
   		V = FindNewVertexOfDegreeZero( );
   		if ( V == NotAVertex ) //确认图中无环？
           {
   	    	Error ( “Graph has a cycle” );   
               break;  
           }
   		TopNum[ V ] = Counter; /* or output V */
   		for ( each W adjacent to V )
   	    	Indegree[ W ]––; //对所有前置选课要求有V的课程，在修之前必须修完的课少了一门
       }
   }
   ```
   
   $$
   T=O(|V|^2+|E|) = O(|V|^2)
   $$
   
   ```c
   //改进策略是先将所有入度为0的节点都入队，每次从这个0入度队列中弹出一个节点，图中与之相邻的节点入度--，
   //如果减到0就入队
   void Topsort( Graph G )
   {   
   	Queue Q;
       int Counter = 0;
       Vertex V, W;
       Q = CreateQueue( NumVertex );  
       MakeEmpty( Q );
       for ( each vertex V )
   		if ( Indegree[ V ] == 0 ) Enqueue( V, Q );
       while ( !IsEmpty( Q ) ) 
       {
   		V = Dequeue( Q );
   		TopNum[ V ] = ++Counter; /* assign next */
   		for ( each W adjacent to V )
   	    	if (––Indegree[ W ] == 0 ) Enqueue( W, Q );
       }  /* end-while */
       if ( Counter != NumVertex )
   	Error( “Graph has a cycle” );
       DisposeQueue( Q ); /* free memory */
   }
   ```
   
   $$
   T=O(|V|+|E|)
   $$
   
   ---

   $注意E的范围 最小 V 最大 |V|^2$


# DFS


回溯算法（Backtracking）和深度优先搜索算法（DFS）之间存在关系，但它们有一些主要的不同之处。

1. **定义**：
   - **DFS算法**是一种图遍历算法，通常用于搜索图或树的所有节点。在DFS中，我们从一个节点开始，然后尽可能深入，直到不能再深入为止，然后回溯到上一个节点，继续深入其他未探索的分支。
   - **回溯算法**是一种更一般的算法范式，通常用于解决组合优化问题，例如八皇后问题、0-1背包问题等。回溯算法试图在搜索过程中通过尝试不同的选择来找到问题的解，如果当前的选择不能导致解，就回溯到之前的状态，然后尝试其他的选择。
2. **应用领域**：
   - **DFS算法**主要应用于图和树的遍历，查找路径或寻找特定节点。
   - **回溯算法**更通用，可以用于解决一些组合优化问题，其中需要在可能的解空间中搜索并找到问题的解。
3. **目标**：
   - **DFS算法**的主要目标是尽可能深入地搜索，查找目标节点或路径。
   - **回溯算法**的主要目标是通过尝试不同的选择，找到问题的解。在搜索过程中，可能需要多次回溯到之前的状态。
4. **状态维护**：
   - **DFS算法**通常通过栈（递归调用栈或显式栈）来维护状态，记录当前路径和访问状态。
   - **回溯算法**通过递归调用来维护状态，尝试不同的选择，并在需要时回溯到之前的状态。

尽管有这些不同，DFS算法实际上可以看作是回溯算法的一种特例，因为回溯算法也可以使用深度优先搜索的方式进行实现。在许多情况下，这两个术语可以交替使用，具体取决于上下文和问题的特性

```c
/*a generalization of preorder traversal*/
void DFS(Vertex V)
{   
    visited[ V ] = true;  /*mark this vertex to avoid cycles*/
    for ( each W adjacent to V )
        if ( !visited[ W ] ) DFS( W );
} /*T = O(|E|+|V|) as long as adjacency lists are used*/
```





```java
class Solution {
    List<List<Integer>> res = new LinkedList<>();
/* 主函数，输入一组不重复的数字，返回它们的全排列 */
List<List<Integer>> permute(int[] nums) {
    // 记录「路径」
    LinkedList<Integer> track = new LinkedList<>();
    // 「路径」中的元素会被标记为 true，避免重复使用
    boolean[] used = new boolean[nums.length];
    

    backtrack(nums, track, used);
    return res;

}

// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素（used[i] 为 false）
// 结束条件：nums 中的元素全都在 track 中出现
void backtrack(int[] nums, LinkedList<Integer> track, boolean[] used) {
    // 触发结束条件
    if (track.size() == nums.length) {
        res.add(new LinkedList(track));
        return;
    }
    

    for (int i = 0; i < nums.length; i++) {
        // 排除不合法的选择
        if (used[i]) {
            // nums[i] 已经在 track 中，跳过
            continue;
        }
        // 做选择
        track.add(nums[i]);
        used[i] = true;
        // 进入下一层决策树
        backtrack(nums, track, used);
        // 取消选择
        track.removeLast();
        used[i] = false;
    }

}
    }
```

