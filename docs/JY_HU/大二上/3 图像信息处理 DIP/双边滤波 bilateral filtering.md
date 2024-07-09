# 双边滤波原理

## **Bilateral filtering**

能够保边，但不能保方向

存在梯度逆转问题



<img src="../assets/image-20240110145317828.png" alt="image-20240110145317828" style="zoom:50%;" />

<img src="../assets/image-20240110145422395.png" alt="image-20240110145422395" style="zoom:50%;" />

sigma s 一般设为图像对角线的2%这么大
sigma r 一般设为gradient的均值或中位值？

the halo nightmare

HDR压缩到标准动态范围

通过感受野压缩图像 从低到高

residual 感受野的大小带来的残差

高频，低频

## 使用信号处理方式快速近似双边滤波

[双边滤波加速算法 Fast Bilateral Filter - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/272236618)