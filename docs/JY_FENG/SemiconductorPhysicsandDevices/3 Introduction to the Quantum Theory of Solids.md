## 3.1 Allowed and Forbidden Energy Bands

<img src="../assets/image-20240704140255482.png" alt="image-20240704140255482" style="zoom:63%;" /><img src="../assets/image-20240704140432020.png" alt="image-20240704140432020" style="zoom:43%;" />



<img src="../assets/image-20240704140502040.png" alt="image-20240704140502040" style="zoom:50%;" /><img src="../assets/image-20240704144925972.png" alt="image-20240704144925972" style="zoom:53%;" />

### 3.1.3 The $k$-Space Diagram

the k comes from that all one-electron wave functions, for problems involving periodically varying potential energy functions, must be of the form $\psi(x)=u(x)e^{jkx}$

$$
\begin{gather*}
P'\frac{\sin\alpha a}{\alpha a}+\cos \alpha a=\cos ka\\
P'=\frac{mV_0ba}{\hbar^2}
\end{gather*}
$$

Equation gives the relation between the parameter $k$ total energy
$E$ (through the parameter $\alpha$), and the potential barrier $bV_0$. 

We assume that $V_0=0$, then we acquire

$$
\begin{gather*}
\cos \alpha a=\cos ka\\
or\quad
\alpha =k
\end{gather*}
$$

$\alpha$ is given by$\sqrt{\frac{2mE}{\hbar^2}}=\frac{p}{\hbar}=k$, so we obtain the relationship between $k$ and $E$

$$
E=\frac{k^2\hbar^2}{2m}
$$

<img src="../assets/image-20240704144228103.png" alt="image-20240704144228103" style="zoom:55%;" />

Now, we consider the relation between $E$ and $k$ form Equation for the particle in the single-crystal lattice.

define the left side of the Equation as

$$
f(\alpha a)=P'\frac{\sin\alpha a}{\alpha a}+\cos\alpha a
$$
to the right side, we also have,

$$
f(\alpha a)=\cos ka
$$
<img src="../assets/image-20240704145326035.png" alt="image-20240704145326035" style="zoom:50%;" />

<img src="../assets/image-20240704145501812.png" alt="image-20240704145501812" style="zoom: 60%;" />

the right side can also be written as $\cos ka=\cos(ka+2n\pi)=\cos(ka-2n\pi)$ 

then we gain

<img src="../assets/image-20240704150237183.png" alt="image-20240704150237183" style="zoom: 60%;" />

## 3.2 Electrical Conduction In Solids

### 3.2.1 The Energy Band and the Bond Model

<img src="../assets/image-20240704140810574.png" alt="image-20240704140810574" style="zoom:60%;" />

<img src="../assets/image-20240704141325933.png" alt="image-20240704141325933" style="zoom:60%;" />

### 3.2.2 Drift Current

the drift current density

$$
\begin{gather*}
J=qNv_d\qquad A/cm^2\\
or\quad J=q\sum^N_{i=1}v_i
\end{gather*}
$$

if a force is applied to a particle and the particle moves.

$$
dE=Fdx=Fv\cdot dt
$$

<img src="../assets/image-20240719142357190.png" alt="image-20240719142357190" style="zoom:50%;" />

### 3.2.3 Electron Effective Mass

$$
F_{\text{total}}=F_{\text{ext}}+F_{\text{int}}=ma
$$

and we add $m^*$ as effective mass

$$
F_{ext}=m^*a
$$

then back to the Equation, we obtain,

$$
\begin{gather*}
\frac{dE}{dk}=\frac{\hbar^2k}{m}=\frac{\hbar p}{m}\\
\frac1{\hbar}\frac{dE}{dk}=\frac{p}m=v
\end{gather*}
$$

and, if we take the second derivative of $E$ with respect to $k$

$$
\frac1{\hbar^2}\frac{d^2E}{dk^2}=\frac1{m}
$$

apply the Newton's classical equation of motion:

$$
\begin{align*}
F&=ma=-eE\\
a&=\frac{-eE}{m}
\end{align*}
$$

对$k$和$E$的关系进行近似，即

$$
E-E_c=C_1(k)^2
$$

<img src="../assets/image-20240704181304775.png" alt="image-20240704181304775" style="zoom:60%;" />

since that,

$$
\begin{gather*}
\frac{d^2E}{dk^2}=2C_1\\
\frac1{\hbar^2}\frac{d^2E}{dk^2}=\frac{2C_1}{\hbar^2}=\frac1{m^*}
\end{gather*}
$$

then the acceleration,

$$
a=\frac{-eE}{m^*_n}
$$

$m^*_N$ denotes the effective mass of the electron

### 3.2.4 Concept of the Hole

$$
\begin{gather*}
J=-e\sum_{i(filled)}v_i\\
J=-e\sum_{i(total)}v_i+e\sum_{i(empty)}v_i\\
\text{(take into account a very large number of states)}
\end{gather*}
$$

<img src="../assets/image-20240704183844465.png" alt="image-20240704183844465" style="zoom:60%;" />

$$
-e\sum _{i(roral)}v_i = 0
$$

$$
\therefore j=+e\sum_{i(empty)}v_i
$$

### 3.2.5 Metals, Insulators, and Semiconductors

<img src="../assets/image-20240704193244779.png" alt="image-20240704193244779" style="zoom:50%;" />

<img src="../assets/image-20240704193421590.png" alt="image-20240704193421590" style="zoom:50%;" />

## 3.3 Extension to Three Dimensions

<img src="../assets/image-20240704193628800.png" alt="image-20240704193628800" style="zoom:50%;" />

## 3.4 Density of States Functions

<img src="../assets/image-20240704194824205.png" alt="image-20240704194824205" style="zoom:50%;" />

量子态密度。

$g_V(E)$代表空穴每单位体积每单位能量的量子态数

$$
g_V(E)=\frac{4\pi(2m^*_p)^{3/2}}{h^3}\sqrt {E_V-E}
$$

-E$g_C(E)$代表导带中每单位体积每单位能量的量子态数

$$
g_C(E)=\frac{4\pi(2m_n^*)^{3/2}}{h^3}\sqrt{ E-E_C}
$$

## 3.5 Statistical Mechanics

概率密度函数：

$$
\frac{N(E)}{g{(E)}}=f_F(E)=\frac1{1+\exp(\frac{E-E_F}{kT})}
$$

$N(E)$为单位体积单位能量的粒子数，$g(E)$为单位体积单位单位能量的量子状态。

$E_F$为费米能级

$f_F(E)$为Fermi-Dirac distribution/ probability function，代表能量为E的量子态被电子占据的可能性

* 开始时考虑$T=0k, E<E_F$，则$f_F=1$；若$E>E_F$，则$f_F=0$。如下图$E_4<E_F\le E_5$。

  <img src="../assets/image-20240716151208445.png" alt="image-20240716151208445" style="zoom:50%;" />

  <img src="../assets/image-20240716151341272.png" alt="image-20240716151341272" style="zoom:50%;" />

* 温度升高，一定的电子跃入更高的能级，电子分布发生改变

  <img src="../assets/image-20240716151504767.png" alt="image-20240716151504767" style="zoom:50%;" />

$E_F$以上$dE$距离处被电子占据的概率，与$E_F$以下$dE$距离处为空穴的概率相等，因此

<img src="../assets/image-20240716151944517.png" alt="image-20240716151944517" style="zoom:50%;" />

**Maxwell-Boltzmann approximation**  $f_F(E)\approx exp\left[\frac{-(E-E_F)}{kT}\right]$

<img src="../assets/image-20240716152202470.png" alt="image-20240716152202470" style="zoom:50%;" />
