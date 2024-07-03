默写内容

树：delete（BST），insert（BST)

堆：deletemin，minheapify，percolate（up/down), 

栈：infix->prefix/postfix, evaluate postfix



```c
char* in_to_pre(){
	char *s1 = (char*)malloc(sizeof(char)*MAX_N);
    char *s2 = (char*)malloc(sizeof(char)*MAX_N);
    int top1 = -1; int top2 = -1;
    s1[top1++] = in_fix[0];
    for(int i=1;i<num;i++){
		if()
    }
}


```

```c
void PercolateDown(int p, PriorityQueue H){
    //p应该是什么
}
void PercolateUp(int p, PriorityQueue H){
    for(int i=p;H->elements[i]<H->elements[i/2];i=i/2)
}
```

```c
minHeapify
```











```c
void Unweighted( Table T )
{   
    /* T is initialized with the source vertex S given */
    Queue Q;
    Vertex V, W;
    Q = CreateQueue( NumVertex );
    MakeEmpty( Q );
    Enqueue( S, Q ); /* Enqueue the source vertex */
    while ( !IsEmpty( Q ) ) 
    {
        V = Dequeue( Q );
        T[ V ].Known = true; /* not really necessary */
        for ( each W adjacent to V )
			if ( T[ W ].Dist == Infinity ) 
            {
	    		T[ W ].Dist = T[ V ].Dist + 1;
	    		T[ W ].Path = V;
	    		Enqueue( W, Q );
			} /* end-if Dist == Infinity */
    } /* end-while */
    DisposeQueue( Q ); /* free memory */
}
```

