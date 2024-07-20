# 2 预备知识

### 2.1 数据操作

```python
import torch
x = torch.arange(12)	# 创建行向量
x.shape					# 访问张量的形状
```

### 2.5 自动微分

系统自动构建计算图（computational graph）
$$
y = x*x=\begin{bmatrix}x_1^2\\x_2^2\\x_3^2\\x_4^2\end{bmatrix}
$$

$$
y.sum()=x_1^2+...+x_4^2\\
[y.sum()]'=2x_1+2x_2+2x_3+2x_4
$$

`y.sum().backward()`与`y.backward(torch.ones)`的区别理解。

> 对非标量调用backward需要传入一个gradient参数，该参数指定微分函数关于self的梯度。

