# 6 Nonequilibrium Excess Carriers in Semiconductors

## 6.1 Carrier Generation and Recombination

* *generation* is the process whereby electrons and holes are created
* *recombination* is the process whereby electrons and holes are annihilated.

<img src="../assets/image-20240718151028031.png" alt="image-20240718151028031" style="zoom:50%;" />

### 6.1.1 The Semiconductor in Equilibrium

* $G_{n0},G_{p0}$ *thermal-generation rates of electrons and holes*

$$
G_{n0}=G_{p0}
$$
  
* $R_{n0},R_{p0}$ *recombination rates of electrons and holes*

$$
R_{n0}=R_{p0}
$$

对于热平衡状态而言

$$
G_{n0}=G_{p0}=R_{n0}=R_{p0}
$$

<img src="../assets/image-20240718155427236.png" alt="image-20240718155427236" style="zoom:33%;" />

* $g_n',g_p'$ 过剩电子/空穴产生率，一定有$g_n'=g_p'$

电子跃迁到导带以后，空穴浓度会高于热平衡时的值

* $\delta n,\delta p$ 过剩电子空穴浓度

$$
\begin{align}
n&=n_0+\delta n\\
p&=p_0+\delta p
\end{align}
$$

<img src="../assets/image-20240718160725888.png" alt="image-20240718160725888" style="zoom:50%;" />

电子落回价带

$$
R_n'=R_p'
$$

直接的带间复合是自发的行为。因此相对于时间是一个常数，且与电子和空穴的浓度成比例

$$
\frac{dn(t)}{dt}=\alpha_r\left[n_i^2-n(t)p(t)\right]
$$

* $n(t)=n_0+\delta n(t)$
* $p(t)=p_0+\delta p(t)$
* $\alpha_rn_i^2$热平衡状态的生成率，$n_i^2=n_0p_0$

$$
\frac{d(\delta n(t))}{dt}=-\alpha_r\delta n(t)[(n_0+p_0)+\delta n(t)]
$$

**low-level injection 小注入条件**

> Low-level injection puts limits on the magnitude of the excess carrier concentration compared with the thermal-equilibrium carrier concentrations. In an extrinsic n-type material, we generally have $n_0>>p_0 $and, in an extrinsic p-type material, we generally have $p_0>>n_0$. Low-level injection means that **the excess carrier concentration is much less than the thermal-equilibrium majority carrier concentration**. Conversely, high-level injection occurs when the excess carrier concentration becomes comparable to or greater than the thermal-equilibrium majority carrier concentrations.

考虑 p type semi ($\delta n(t)<<p_0$，$p_0>>n_0$)

$$
\frac{d(\delta n(t))}{dt}=-\alpha_r\delta n(t)p_0
$$

$$
\delta n(t)=\delta n(0)e^{-\alpha_rp_0t}=\delta n(0)e^{-t/\tau_{n0}}
$$

过剩少数载流子衰减的情况

* $\tau_{n0}$过剩少数载流子寿命 $\tau_{n0}=(\alpha_rp_0)^{-1}$

$$
R_n'=\frac{-d(\delta n(t))}{dt}=+\alpha_r p_0\delta n(t)=\frac{\delta n(t)}{\tau_{n0}}=R_p'
$$

同理 对于n type

$$
R_n'=\frac{\delta n(t)}{\tau_{p0}}=R_p'
$$

* $\tau_{p0}=(\alpha_rn_0)^{-1}$

## 6.2 Characteristics of excess carriers

*ambipolar transport* 

> the excess electrons and holes do not move independently of each other, but they diffuse and drift with the same effective diffusion coeffi cient and with the same effective mobility.

### 6.2.1 Continuity Equations

$$
F_{px}^+(x+dx)=F_{px}^+(x)+\frac{\partial F_{px}^+}{\partial x}\cdot x
$$

以下仅讨论一维下的情况

$$
\frac{\partial p}{\partial t}dxdydz=[F^+_{px}(x)-F^+_{px}(x+dx)]dydz=-\frac{\partial F_{px}^+}{\partial x}dx dydz
$$

$$
\frac{\partial p}{\partial t}dxdydz=-\frac{\partial F_p^+}{\partial x}dxdydz+g_pdxdydz-\frac{p}{\tau_{pt}}dxdydz
$$

##### 空穴的连续性方程

$$
\frac{\partial p}{\partial t}=-\frac{\partial F_p^+}{\partial x}+g_p-\frac{p}{\tau_{pt}}
$$

同理：

$$
\frac{\partial n}{\partial t}=-\frac{\partial F_n^-}{\partial x}+g_n-\frac{n}{\tau_{nt}}
$$

### 6.2.2 Time-Dependent Diffusion Equations

$$
J_p=e\mu_ppE-eD_p\frac{\partial P}{\partial x}
$$

$$
J_n=e\mu_nnE+eD_n\frac{\partial n}{\partial x}
$$

同除e得到$F_p^+$和$F_n^-$

$$
\frac{\partial p}{\partial t}=-\mu_p\frac{\partial(pE)}{\partial x}+D_p\frac{\partial^2p}{\partial x^2}+g_p-\frac{p}{\tau_{pt}}
$$

$$
\frac{\partial n}{\partial t}=\mu_n\frac{\partial(nE)}{\partial x}+D_n\frac{\partial^2p}{\partial x^2}+g_n-\frac{n}{\tau_{nt}}
$$

总之一通操作后得到：

$$
\frac{\partial (\delta p)}{\partial t}=-\mu_p(E\frac{\partial(\delta p)}{\partial x}+p\frac{\partial E}{\partial x})+D_p\frac{\partial^2p}{\partial x^2}+g_p-\frac{p}{\tau_{pt}}
$$

$$
\frac{\partial (\delta n)}{\partial t}=\mu_n(E\frac{\partial(\delta n)}{\partial x}+n\frac{\partial E}{\partial x})+D_n\frac{\partial^2n}{\partial x^2}+g_n-\frac{n}{\tau_{nt}}
$$

## 6.3 Ambipolar Transport

$$
E=E_{app}+E_{int}
$$

*ambipolar transport equation*

$$
D'\frac{\partial^2(\delta n)}{\partial x^2}+\mu'E\frac{\partial(\delta n)}{\delta x}+g-R=\frac{\partial (\delta n)}{\partial t}
$$

* $D'=\frac{\mu_nnD_p+\mu_ppD_n}{\mu_nn+\mu_pp}$，根据爱因斯坦关系式，$D'=\frac{D_nD_p(n+p)}{D_nn+D_pp}$
* $\mu'=\frac{\mu_n\mu_p(p-n)}{\mu_nn+\mu_pp}$

小注入模型

* n type: $D'=D_p$, $\mu'=-\mu_p$, $\tau_{pt}=\tau_p$
* p type: $D'=D_n$, $\mu'=\mu_n$, $\tau_{nt}=\tau_n$

原式中：

$$
g-R=g_n-R_n=(G_{n0}+g_n')-(R_{n0}+R_n')
$$

$$
\begin{gather*}
\because G_{n0}=R_{n0}\\
\therefore g-R=g'_n-R'_n=g_n'-\frac{\delta n}{\tau_n}
\end{gather*}
$$

as to holes

$$
g-R=g_p'-R_p'=g_p'-\frac{\delta p}{\tau_p}
$$

过剩电子的产生率必须等于过剩空穴的产生率

$$
g_n'=g_p'=g'
$$

##### 小注入p型半导体双极运输方程

$$
D_n\frac{\partial^2(\delta n)}{\partial x^2}+\mu_nE\frac{\partial (\delta n)}{\partial x}+g'-\frac{\partial n}{\tau_{n0}}=\frac{\partial(\delta n)}{\partial t}
$$

同理，小注入n型半导体双极运输方程

$$
D_p\frac{\partial^2(\delta p)}{\partial x^2}-\mu_pE\frac{\partial (\delta p)}{\partial x}+g'-\frac{\partial p}{\tau_{p0}}=\frac{\partial(\delta p)}{\partial t}
$$
