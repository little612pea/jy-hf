# 4 Semiconductor in Equilibrium

## 4.1 Charge Carriers in Semiconductors

**The distribution (with respect to energy) of electrons** in the conduction band is given by the density of allowed quantum states times the probability that a state is occupied by an electron. This statement is written in equation form as

$$
n(E)=g_c(E)f_F(E)
$$

* $f_F(E)$ the Fermi-Diract probability function
* $g_c(E)$ the density of quantum states in the conduction band.

Similarly, the distribution (with respect to energy) of holes,

$$
p(E)=g_v(E)[1-f_F(E)]
$$

下图建立在以下假设之上：

* $E_F$近似位于$E_C$与$E_V$之间的1/2处
* 电子与空穴的有效质量相等，则$g_C$与$g_V$对称

<img src="../assets/image-20240716153723484.png" alt="image-20240716153723484" style="zoom:50%;" />

$n_0$与$p_0$方程

$$
n_0=\int g_c(E)f_F(E)dE
$$

假设：

* $E_F$处于禁带中，导带中的电子能量$E>E_c$
* 若$(E-E_F)>>kT$，使用Boltzmann近似

$$
f_F(E)=\frac1{1+\exp(\frac{E-E_F}{kT})}\approx \exp(-\frac{E-E_F}{kT})
$$
则得：

$$
n_0=\int_{E_C}^\infin \frac{4\pi(2m^*_n)^{3/2}}{h^3}\sqrt{E-E_C}\exp[-\frac{(E-E_F)}{kT}]dE
$$
设

$$
\eta=\frac{E-E_C}{kT}
$$
(5)等于

$$
\begin{aligned}
n_0&=\frac{4\pi(2m^*_n)^{3/2}}{h^3}\exp[-\frac{(E_C-E_F)}{kT}]\int_{0}^\infin \eta^{1/2}\exp(-\eta)d\eta\\
&=2(\frac{2\pi m^*_nkT}{h^2})^{3/2}\exp[-\frac{E_C-E_F}{kT}]
\end{aligned}
$$

令

$$
N_C=2(\frac{2\pi m^*_nkT}{h^2})^{3/2}
$$

* $N_C$ denotes *the effective density of states in the conduction band*

##### the thermal-equilibrium concentration of electrons

在Boltzmann近似成立的情况下

$$
n_0=N_C\exp\left[-\frac{E_C-E_F}{kT}\right]
$$
同理，

$$
\begin{alignat}{2}
p_0&=2(\frac{2\pi m^*_pkT}{h^2})^{3/2}\exp[-\frac{E_F-E_V}{kT}]\\
&=N_v\exp\left[-\frac{E_F-E_V}{kT}\right]
\end{alignat}
$$

### 4.1.3 The Intrinsic Carrier Concentration

Intrinsic 本征

Intrinsic Semiconductor的性质

$$
\begin{gather*}
n_0=n_i\\p_0=p_i=n_i\\E_F=E_{Fi}
\end{gather*}
$$

##### The intrinsic carrier concentration 本征载流子浓度

$$
\begin{gather*}
n_i^2=N_CN_V\exp[-\frac{E_g}{kT}]\\
\small{\text{where }E_g\text{ denotes }E_C-E_V}
\end{gather*}
$$

当温度恒定，$n_i$为定值，随温度变化明显

<img src="../assets/image-20240716161933096.png" alt="image-20240716161933096" style="zoom:50%;" />

### 4.1.4 The Intrinsic Fermi-Level Position

之前是定性说明在1/2处，现在给出明确的具体位置

$$
E_{Fi}-E_{midgap}=\frac3{4}kT\ln(\frac{m_p^*}{m_n^*})
$$

## 4.2 Dopant atoms and Energy Levels

<img src="../assets/image-20240716163053864.png" alt="image-20240716163053864" style="zoom:50%;" />

P- phosphorus 磷

5 valence electrons, the 5th loosely bound to the phosphorus atom - donor electron.

<img src="../assets/image-20240716163325220.png" alt="image-20240716163325220" style="zoom:50%;" />

$E_d$为donor Electron的能量

提供donor Electron的杂质原子称为donor impurity atom

由于增加了导电原子，但不产生价带空穴，因此称之为*n型半导体 n-type semiconductor*；

<img src="../assets/image-20240716163948815.png" alt="image-20240716163948815" style="zoom:50%;" />

<img src="../assets/image-20240716164004852.png" alt="image-20240716164004852" style="zoom:50%;" />

若参杂III族，此时有一个空穴产生，如果有一个电子具有$E_a$的能量，则填补了这个空穴，相当于空穴发生了移动。此时，这个III族原子被称为*acceptor impurity atom*，则该半导体被称为*p型半导体 p-type semiconductor*

*n型*与*p型*合称为*extrinsic semiconductor*



### 4.2.2 Ionization Energy

规定：

电子和离子间的库伦引力等于轨道电子的向心力

$$
\frac{e^2}{4\pi\epsilon r^2_n}=\frac{m^*v^2}{r_n}
$$

由角动量量子化，可得

$$
m^*r_nv=n\hbar
$$

玻尔半径：

$$
a_0=0.53\AA
$$

轨道半径有：

$$
\frac{r_n}{a_0}=n^2\epsilon_r(\frac{m_0}{m^*})
$$

轨道电子的总能量为：

$$
\begin{align*}
E&=T+V\\
T&=\frac1{2}m^*v^2\\
V&=-\frac{e^2}{4\pi\epsilon r_n}
\end{align*}
$$

$$
\therefore E=T+V=\frac{-m^*e^4}{2(n\hbar)^2(4\pi\epsilon)^2}
$$

<img src="../assets/image-20240716170251713.png" alt="image-20240716170251713" style="zoom:53%;" />

> If we consider silicon, the ionization energy is $E=25.8 \text{meV}$, much less than the bandgap energy of silicon. This energy is the approximate ionization energy of the donor atom, or the energy required to elevate the donor electron into the conduction band.

### 4.2.3 Group III-V Semiconductors

<img src="../assets/image-20240716170315136.png" alt="image-20240716170315136" style="zoom:50%;" />

## 4.3 The Extrinsic semiconductor

<img src="../assets/image-20240716234053209.png" alt="image-20240716234053209" style="zoom:33%;" /><img src="../assets/image-20240716234107803.png" alt="image-20240716234107803" style="zoom:33%;" />

* $n_0>p_0$, n-type semiconductor
* $n_0<p_0$, p type semiconductor

$$
\begin{aligned}
n_0&=N_c\exp\left[ \frac{-(E_c-E_{Fi})+(E_F-E_{Fi})}{kT} \right]\\
&=N_c\exp\left[ \frac{-(E_c-E_{Fi})}{KT}\right] \exp\left[\frac{+(E_F-E_{Fi})}{kT} \right]\\
&=n_i\exp\left[\frac{+(E_F-E_{Fi})}{kT} \right]
\end{aligned}
$$



有以下重要等式，(Boltzmann Approximation)，$n_i$本征浓度

$$
n_0p_0=n_i^2
$$

### 4.3.3 The Fermi-Dirac Integral

如果Boltzmann Approximation失效，则

$$
\begin{gather*}
n_0=4\pi(\frac{2m^*_nkT}{h^2})^{3/2}\int^\infin_0\frac{\eta^{1/2}d\eta}{1+\exp(\eta-\eta_F)}\\
\small{\text{where }\eta=\frac{E-E_C}{kT},\quad \eta_F=\frac{E_F-E_C}{kT}}
\end{gather*}
$$

令

$$
F_{1/2}(\eta_F)=\int^\infin_0\frac{\eta^{1/2}d\eta}{1+\exp(\eta-\eta_F)}
$$

<img src="../assets/image-20240717125459843.png" alt="image-20240717125459843" style="zoom:50%;" />
$$
\begin{gather*}
p_0=4\pi(\frac{2m^*_pkT}{h^2})^{3/2}\int^\infin_0\frac{\eta'^{1/2}d\eta'}{1+\exp(\eta'-\eta'_F)}\\
\small{\text{where }\eta'=\frac{E_V-E}{kT},\quad \eta_F=\frac{E_V-E_F}{kT}}
\end{gather*}
$$

### 4.3.4 Degenerate and Nondegenerate Semiconductors

以n type为例->杂质浓度较低->施主电子之间不存在相互作用；

> We have assumed that the impurities introduce discrete, noninteracting donor energy states in the n-type semiconductor and discrete, noninteracting acceptor states in the p-type semiconductor.

上述为 *nondegenerate semiconductos*的定义。

若浓度增加到施主电子开始相互作用的临界点

> When this occurs, the single discrete donor energy will split into a band of energies. As the donor concentration further increases, the band of donor states widens and may overlap the bottom of the conduction band. This overlap occurs when the donor concentration becomes comparable with the effective density of states.

上述定义为 *degenerate n-type semiconductor*，特征：导带中电子浓度非常大

<img src="../assets/image-20240717130956148.png" alt="image-20240717130956148" style="zoom:50%;" />

同理，也有 *nondegenrate p-type semiconductor*，特征：价带中空穴浓度非常大



## 4.4 Statistics of Donors And Acceptors

### 4.4.1 Probability Function

电子占据施主能级的概率为（电子占据施主能级的密度）

$$
n_d=\frac{N_d}{1+\frac1{2}\exp(\frac{E_d-E_F}{kT})}=N_d-N_d^+
$$

对于施主电子来说，每隔施主能级都有两种可能的自旋方向，因此每隔施主能级有两个量子态，因此有一个$\frac1{2}$因子，有时也写为$1/g$（$g$为简并因子）。

$N_d^+$为电离施主杂质浓度 (the concentration of ionized donors)

同理：

$$
p_a=\frac{N_a}{1+\frac1{g}\exp(\frac{E_F-E_a}{kT})}=N_a-N_a^-
$$

### 4.4.2 Compelete Ionization and Freeze-Out

假设$E_d-E_D>>kT$，则

$$
n_d\approx\frac{N_d}{\frac1{2}\exp(\frac{E_d-E_F}{kT})}=2N_d\exp[\frac{-(E_d-E_F)}{kT}]\\
$$

因

$$
n_0=N_C\exp[\frac{-(E_C-E_F)}{kT}]
$$

因此得，

$$
\frac{n_d}{n_d+n_0}=\frac1{1+\frac{N_C}{2N_d}\exp[\frac{-(E_C-E_d)}{kT}]}
$$

$E_C-E_d$为施主电子的电离能

<img src="../assets/image-20240717140204801.png" alt="image-20240717140204801" style="zoom:50%;" />

同理：

$$
\frac{p_a}{p_0+p_a}=\frac1{1+\frac{N_V}{gN_a}\exp\left[-\frac{E_a-E_v}{kT}\right]}
$$

束缚态

<img src="../assets/image-20240717140222006.png" alt="image-20240717140222006" style="zoom:50%;" />

## 4.5 Charge Neutrality

A *compensated semiconductor* is one that contains both donor and acceptor impurity atoms in the same region.

* $N_d>N_a$: n-type compensated semiconductor
* $N_d=N_a$: completely compensated semiconductor
* $N_d<N_a$: p-type compensated semiconductor

<img src="../assets/image-20240717141250115.png" alt="image-20240717141250115" style="zoom:50%;" />

电中性条件:

$$
\begin{gather*}
n_0+N_a^-=p_0+N_d^+\\
or\\
n_0+(N_a-p_a)=p_0+(N_d-n_d)
\end{gather*}
$$

若完全电离，则

$$
n_0+N_a=p_0+N_d
$$

由于

$$
n_0p_0=n_i^2
$$

$$
\begin{gather*}
\therefore n_0+N_a=\frac{n_i^2}{n_0}+N_d\\
\Rightarrow n_0=\frac{N_d-N_a}2+\sqrt{\left(\frac{N_d-N_a}2\right)^2+n_i^2}\qquad(N_d>N_a)
\\p_0=\frac{n_i^2}{n_0}
\end{gather*}
$$

<img src="../assets/image-20240717143356910.png" alt="image-20240717143356910" style="zoom:50%;" />

##### 重新分布

* 施主电子落入价带中的空状态，抵消部分本征空穴
* 一部分则进入导带进行导电

<img src="../assets/image-20240717144242844.png" alt="image-20240717144242844" style="zoom:50%;" />

<img src="../assets/image-20240717144526682.png" alt="image-20240717144526682" style="zoom:50%;" />

上图为电子浓度与温度的关系（参杂浓度为$5\times10^{14}cm^{-3}$）：

* Partial Ionization, 部分电离，Freeze-out
* Extrinsic, 非本征状态，由杂质浓度进行主导（即$N_d>>n_i$）
* Intrinsic, 本征状态，由$n_i$主导

同理：

$$
\begin{gather*}
p_0=\frac{N_a-N_d}2+\sqrt{\left(\frac{N_a-N_d}2\right)^2+n_i^2}\qquad(N_a>N_d)\\
n_0=\frac{n_i^2}{p_0}
\end{gather*}
$$

## 4.6 Position of Fermi Energy Level

$$
k=8.62\times 10^{-5} \quad eV/K
$$

##### Way 1

$$
\begin{gather*}
n_0=N_c\exp\left[-\frac{E_C-E_F}{kT}\right]\\\Rightarrow E_C-E_F=kT\ln(\frac{N_C}{n_0})
\end{gather*}
$$

现考虑一块n type semiconductor, $N_d>>n_i$，则$n_0\approx N_d$

$$
E_C-E_F=kT\ln(\frac{N_C}{N_d})
$$

##### Way 2

$$
E_F-E_{Fi}=kT\ln(\frac{n_0}{n_i})
$$

上式适用n type

对于p type

$$
\begin{gather*}
\text{Way 1: }E_F-E_V=kT\ln(\frac{N_V}{p_0})\\
\text{Way 2: }E_{Fi}-E_F=kT\ln(\frac{p_0}{n_i})\\
N_a>>n_i,p_0\approx N_a\Rightarrow p_0\text{替换为}N_a
\end{gather*}
$$

<img src="../assets/image-20240717151808912.png" alt="image-20240717151808912" style="zoom:30%;" />

T=300K, 随着参杂浓度提高$E_F$的变化

<img src="../assets/image-20240717151840883.png" alt="image-20240717151840883" style="zoom:40%;" />

<img src="../assets/image-20240717153635587.png" alt="image-20240717153635587" style="zoom:33%;" />

趋近本征费米能级

* 温度升高
* 浓度降低

温度较低的情况下，出现束缚态，假设不再有效。
