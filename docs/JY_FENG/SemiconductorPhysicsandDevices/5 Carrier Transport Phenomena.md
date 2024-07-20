# 5 Carrier Transport Phenomena

## 5.1 Carrier Drift

$$
J_{drf}=\rho v_d
$$

$$
J_{p|drf}=(ep)v_{dp}
$$

* $v_{dp}$平均漂移速度
* $J_{p|drf}$空穴形成的漂移电流密度

$$
F=m^*_pa=eE
$$

* $m_p^*$空穴有效质量



弱电场情况下，平均速度与电场强度成正比  
$$
v_{dp}=\mu_pE
$$

* $\mu_p$ 空穴迁移率 *hole mobility*

联立得：

$$
J_{p|drf}=(ep)v_{dp}=ep\mu_pE
$$

同理：

$$
\begin{gather*}
J_{n|drf}=-(en)v_{dn}=en\mu_nE\\
\small{\text{where } v_{dn}=-\mu_nE}
\end{gather*}
$$

电子漂移电流的方向与外加电场方向相同。

##### the total drift current density 总漂流电流密度

$$
J_{drf}=e(\mu_nn+\mu_pp)E
$$

### 5.1.2 Mobility Effect

$$
\begin{gather*}
F=m_p^*\frac{dv}{dt}=eE\\
\Rightarrow v=\frac{eEt}{m_p^*}
\end{gather*}
$$

<img src="../assets/image-20240717163650440.png" alt="image-20240717163650440" style="zoom:50%;" />

5.1(a) 无外加电场，(b)加上一个小电场以后，在E方向上有净漂移

碰撞或散射前粒子平均最大速度为：

$$
v_{d|peak}=\left(\frac{e\tau_{cp}}{m^*_p}\right)E
$$

* $\tau_{cp}$为碰撞之间的平均时间

则平均漂移速度

$$
v_d=\frac1{2}\left(\frac{e\tau_{cp}}{m^*_p} \right)E
$$

$$
\begin{gather*}
\text{空穴迁移率: }\mu_p=\frac{e\tau_{cp}}{m^*_p}\\
\text{电子迁移率: }\mu_n=\frac{e\tau_{cn}}{m^*_n}\\
\end{gather*}
$$

**晶格散射**/**声子散射**时的迁移率，热振动对固体理想周期性势场的破坏；感性理解：温度下降，晶格振动减弱，受到散射的概率降低，迁移率增加。
$$
\mu_L\propto T^{-3/2}
$$

<img src="../assets/image-20240717164635108.png" alt="image-20240717164635108" style="zoom:70%;" />

**电离杂质散射**；温度升高，载流子随机热运动速度增加；若杂质增加，电离杂质散射中心数量增加，载流子散射概率增大。

掺入的半导体杂质原子对半导体性质的改变

$$
\begin{gather*}
u_I\propto \frac{T^{3/2}}{N_I}\\
\small{N_I=N_d^++N_a^-}
\end{gather*}
$$

<img src="../assets/image-20240717165836349.png" alt="image-20240717165836349" style="zoom:40%;" />

在微分时间$dt$中受到散射的总概率为 

$$
\frac{dt}{\tau}=\frac{dt}{\tau_I}+\frac{dt}{\tau_L}
$$

$$
\frac1{\mu}=\frac1{\mu_I}+\frac1{\mu_L}
$$

### 5.1.3 Conductivity

$$
J_{drf}=e(\mu_nn+\mu_pp)E=\sigma E
$$

$$
\rho = \frac1{\sigma}=\frac1{e(\mu_nn+\mu_pp)}
$$

如一个p型半导体，$N_a>>n_i$，$N_d=0$

$$
\sigma=e(\mu_nn+\mu_pp)\approx e\mu_pp
$$

<img src="../assets/image-20240718130852870.png" alt="image-20240718130852870" style="zoom:50%;" />

* Extrinsic 杂质全部电离，电子浓度保持稳定
* 迁移率是温度的函数，迁移率发生变化
* Intrinsic区域，$n_i$主导 迁移率变化
* Freeze-out，束缚态出现，电子浓度和电导率随温度下降而下降

### 5.1.4 Velocity Saturation

热运动平均能量计算

$$
\frac1{2}mv_{th}^2=\frac3{2}kT
$$

<img src="../assets/image-20240718134538233.png" alt="image-20240718134538233" style="zoom:33%;" />

* 300K时，Si中热运动平均能量为$\frac3{2}\cdot 0.0259eV=0.03885eV$，运动速度约为$10^7cm/s$
  * 电子漂移速度为$10^5cm/s$
  * *外加电场不会显著改变电子能量*
* 电场较弱时，漂移速度随电场强度线性变化，斜率即为迁移率
* 电场较强时，会达到饱和

## 5.2 Carrier Diffusion

高浓度->低浓度的扩散运动

### 5.2.1 Diffusion Current Density

$$
\begin{align*}
F_n&=\frac1{2}v_{th}[n(-l)-n(+l)] \\
&=\frac1{2}v_{th}\left[ \left(n(0)-l\frac{dn}{dx}\right)- \left(n(0)+l\frac{dn}{dx}\right) \right]  \\
&=-v_{th}l\frac{dn}{dx}
\end{align*}
$$

##### the electron diffusion current density

$$
J=-eF_n=+ev_{th}l\frac{dn}{dx}
$$

$$
J_{nx|dif}=eD_n\frac{dn}{dx}
$$

* $D_n$ the *electron diffusion coefficient*

<img src="../assets/image-20240718141522192.png" alt="image-20240718141522192" style="zoom:33%;" />

$$
J_{px|dif}=-eD_p\frac{dp}{dx}
$$

### 5.2.2 Total Current Density

* electron drift
* electron diffusion currents
* hole drift
* hole diffusion currents

##### Total Currents

$$
\begin{gather*}
1D:\quad J=en\mu_nE_x+ep\mu_pE_x+eD_n\frac{dn}{dx}-eD_p\frac{dp}{dx} \\
3D:\quad J=en\mu_nE_x+ep\mu_pE_x+eD_n\nabla n-eD_p\nabla x \\
\end{gather*}
$$

## 5.3 Graded Impurity Distribution

### 5.3.1 Induced Electric Field

<img src="../assets/image-20240718143330352.png" alt="image-20240718143330352" style="zoom:33%;" />

* n type semi
* 掺杂浓度随着x增加而减小，因此$E_F-E_{Fi}$越来越小
* x小处，电子浓度高；x大处电子浓度低；电子向x正方向移动；电流方向为x负方向；电势x小处高；电子受到x负方向的力，最后达到平衡状态。
* 最后平衡状态有一个x正方向的电场

$$
\begin{gather*}
\phi=+\frac1{e}(E_F-E_{Fi}) \\
E_x=-\frac{d\phi}{dx}=\frac1{e}\frac{dE_{Fi}}{dx}
\end{gather*}
$$

假设满足电中性条件：

$$
\begin{gather*}
n_0=n_i\exp\left[\frac{E_F-E_{Fi}}{kT} \right]\approx N_d(x) \\
\Rightarrow E_F-E_{Fi}=kT\ln(\frac{N_d(x)}{n_i})
\end{gather*}
$$

热平衡时，$E_F$恒定，对x求导：

$$
\begin{gather*}
-\frac{dE_{Fi}}{dx}=\frac{kT}{N_d(x)}\frac{dN_d(x)}{dx}\\
E_x=-\frac{kT}{e}\frac1{N_d(x)}\frac{dN_d(x)}{dx}
\end{gather*}
$$

### 5.3.2 The Einstein Relation

假设：

* 没有外加电场
* 半导体处于热平衡状态，则电子电流和空穴电流分别为0

$$
J_n=0 \text{且}J_p=0
$$

$$
\begin{gather*}
J_n=0=en\mu_nE_x+eD_n\frac{dn}{dx}\\
\Leftrightarrow J_n=0=e\mu_nN_d(x)E_x+eD_n\frac{dN_d(x)}{dx}\\
\because E_x=-\frac{kT}{e}\frac1{N_d(x)}\frac{dN_d(x)}{dx}\\
\Rightarrow 0=-e\mu_nN_d(x)\frac{kT}{e}\frac1{N_d(x)}\frac{dN_d(x)}{dx}+eD_n\frac{dN_d(x)}{dx}
\end{gather*}
$$

则： 

$$
\frac{D_n}{\mu_n}=\frac{kT}{e}
$$

同理

$$
\frac{D_p}{\mu_p}=\frac{kT}{e}
$$

##### The Einstein Relation

$$
\frac{D_n}{\mu_n}=\frac{D_p}{\mu_p}=\frac{kT}{e}
$$
