# Leetcode刷题笔记

int **graph，int graphsize表示graph二维数组有多少行

int* graphcolsize表示每行有多少列



```c
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool isValidBST(struct TreeNode* root) {
    if(root==NULL)return true;
    if(root->left&&root->left->val>=root->val)return false;
    if(root->right&&root->right->val<=root->val)return false;
    if(isValidBST(root->left)&&isValidBST(root->right))return true;
    else{
        return false;
    }
}
```

验证二叉搜索树：用中序遍历

```c
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool isBSTUtil(struct TreeNode* root, long min, long max) {
    if (root == NULL) {
        return true;
    }

    if (root->val <= min || root->val >= max) {
        return false;
    }

    return isBSTUtil(root->left, min, root->val) && isBSTUtil(root->right, root->val, max);
}

bool isValidBST(struct TreeNode* root) {
    return isBSTUtil(root, LONG_MIN, LONG_MAX);
}
```

```c
int count=0;
int a[20000];
bool isValidBST(struct TreeNode* root) {
    in_order(root);
    if(count==1)return true;
    for(int i=0;i<count-1;i++){
        if(a[i]>a[i+1])return false;
    }
    return true;
}

void in_order(struct TreeNode* root){
    if(root==NULL)return;
    in_order(root->left);
    a[count++]=root->val;
    in_order(root->right);
}
```

230

```c
int count;
int kthSmallestUtil(struct TreeNode* root, int k) {
    if (root == NULL) {
        return -1; 
    }
    int leftResult = kthSmallestUtil(root->left, k);
    if (leftResult != -1) {
        return leftResult;
    }
    count++;
    if (count == k) {
        return root->val; // Found the kth smallest element
    }

    return kthSmallestUtil(root->right, k);
}

int kthSmallest(struct TreeNode* root, int k) {
    count = 0;
    return kthSmallestUtil(root, k);
}

```

[797. 所有可能的路径](https://leetcode.cn/problems/all-paths-from-source-to-target/)

给你一个有 `n` 个节点的 **有向无环图（DAG）**，请你找出所有从节点 `0` 到节点 `n-1` 的路径并输出（**不要求按特定顺序**）

 `graph[i]` 是一个从节点 `i` 可以访问的所有节点的列表（即从节点 `i` 到节点 `graph[i][j]`存在一条有向边）。



分治思想：

回溯注重边的选择，撤销在for循环内

和DFS一样，先看是否走通了一条路径/走到头了一条路径

如果没有，就将当前位置相邻的下一层所有的可能性都遍历一遍

###  二叉树的重要性

举个例子，比如两个经典排序算法 [快速排序](https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-66994/kuai-su-pa-39aa2/) 和 [归并排序](https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-66994/gui-bing-p-1387f/)，对于它俩，你有什么理解？

**如果你告诉我，快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历，那么我就知道你是个算法高手了**。

为什么快速排序和归并排序能和二叉树扯上关系？我们来简单分析一下他们的算法思想和代码框架：

快速排序的逻辑是，若要对 `nums[lo..hi]` 进行排序，我们先找一个分界点 `p`，通过交换元素使得 `nums[lo..p-1]` 都小于等于 `nums[p]`，且 `nums[p+1..hi]` 都大于 `nums[p]`，然后递归地去 `nums[lo..p-1]` 和 `nums[p+1..hi]` 中寻找新的分界点，最后整个数组就被排序了。

快速排序的代码框架如下：

```java
void sort(int[] nums, int lo, int hi) {
    /****** 前序遍历位置 ******/
    // 通过交换元素构建分界点 p
    int p = partition(nums, lo, hi);
    /************************/

    sort(nums, lo, p - 1);
    sort(nums, p + 1, hi);
}
```

先构造分界点，然后去左右子数组构造分界点，你看这不就是一个二叉树的前序遍历吗？

再说说归并排序的逻辑，若要对 `nums[lo..hi]` 进行排序，我们先对 `nums[lo..mid]` 排序，再对 `nums[mid+1..hi]` 排序，最后把这两个有序的子数组合并，整个数组就排好序了。

归并排序的代码框架如下：

```java
// 定义：排序 nums[lo..hi]
void sort(int[] nums, int lo, int hi) {
    int mid = (lo + hi) / 2;
    // 排序 nums[lo..mid]
    sort(nums, lo, mid);
    // 排序 nums[mid+1..hi]
    sort(nums, mid + 1, hi);

    /****** 后序位置 ******/
    // 合并 nums[lo..mid] 和 nums[mid+1..hi]
    merge(nums, lo, mid, hi);
    /*********************/
}
```

先对左右子数组排序，然后合并（类似合并有序链表的逻辑），你看这是不是二叉树的后序遍历框架？另外，这不就是传说中的分治算法嘛，不过如此呀。

如果你一眼就识破这些排序算法的底细，还需要背这些经典算法吗？不需要。你可以手到擒来，从二叉树遍历框架就能扩展出算法了。

说了这么多，旨在说明，二叉树的算法思想的运用广泛，甚至可以说，只要涉及递归，都可以抽象成二叉树的问题。

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

```c
/*a generalization of preorder traversal*/
void DFS(Vertex V)
{   
    visited[ V ] = true;  /*mark this vertex to avoid cycles*/
    for ( each W adjacent to V )
        if ( !visited[ W ] ) DFS( W );
} /*T = O(|E|+|V|) as long as adjacency lists are used*/
```

