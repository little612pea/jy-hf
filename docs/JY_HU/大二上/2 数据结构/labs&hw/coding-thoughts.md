## coding-thoughts

少用全局变量

全局初始化时

qsort用法

`qsort` 是C语言标准库中的一个函数，用于对数组进行快速排序。它的声明如下：

```
void qsort
(void *base, size_t nmemb, size_t size, int (*compar)(const void *, const void *));
```

- `base`：指向要排序的数组的指针。
- `nmemb`：数组中元素的数量。
- `size`：每个元素的大小（以字节为单位）。
- `compar`：比较函数的指针，用于定义排序顺序。

比较函数 `compar` 应该接受两个参数，每个参数是数组中的一个元素，函数返回一个整数表示它们的相对顺序。返回值的含义如下：

- 如果返回值小于0，则表示第一个参数小于第二个参数。
- 如果返回值等于0，则表示两个参数相等。
- 如果返回值大于0，则表示第一个参数大于第二个参数。

下面是一个简单的例子，演示如何使用 `qsort` 对整数数组进行升序排序：

```c
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int main() {
    int array[] = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    int size = sizeof(array) / sizeof(array[0]);

    qsort(array, size, sizeof(int), compare);

    printf("Sorted array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", array[i]);
    }

    return 0;
}
```

在这个例子中，`compare` 函数用于升序排序整数数组。你可以根据需要修改比较函数来改变排序的顺序或者适应不同类型的数据。

先写出`int compare(const void *a,const void *b)`.

`a`和`b`进行类型强转，如果是整形就改为`(int*)a`，最后访问时要加*，`*(int*)a`，否则访问的是指针的地址

如果是结构体如`edge`,则改为`(edge*)a->weight`,这整个是访问的元素