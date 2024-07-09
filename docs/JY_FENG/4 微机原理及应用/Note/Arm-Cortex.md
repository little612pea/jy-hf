# Arm-Cortex

既有16位，也有32位

32位寻址

Byte 8bit

HalfWord 16bit

Word 32bit

DoubleWord 64bit

### 数据存储顺序

LittleEndian

BigEndian

### 指令流水线

取指（一次可读取两条指令），译码，执行

### 复位

复位-> 取MSP初始值（0x20008000）->取复位向量->取第一条指令

<img src="../assets/image-20240626181331135.png" alt="image-20240626181331135" style="zoom:25%;" />

## 处理器架构

### 寄存器

R0-7 低寄存器 16位

R8-12 高寄存器32/16位

R13 SP ： 每次先减4，再PUSH

R14 LR

R15 PC

R0~R15 16个寄存器

<img src="../assets/image-20240430102716542.png" alt="image-20240430102716542" style="zoom:25%;" />

## 指令集

### 后缀

<img src="../assets/image-20240626153248602.png" alt="image-20240626153248602" style="zoom:50%;" />

<img src="../assets/image-20240626153327074.png" alt="image-20240626153327074" style="zoom:33%;" />

<img src="../assets/image-20240626154053861.png" alt="image-20240626154053861" style="zoom:33%;" />

`MOVS R4,#0x12`	更新ASPR标志

`MOVW R4,#0x1234`	低16位，高16位清空

`MOVT R4,#0x5678`	高16位，低16位不影响

`LDRB Rd, [Rn,#offset]`从`Rn + #offset`处读取一个字节

`LDR Rd,[Rn,#offset]!` 读取`Rn + #offset`之后更新`Rn = Rn + #offset`

`LDRD Rd1,Rd2,[Rn,#offset]`	从`Rn+offset`处读取一个双字到`Rd1`(低位)，`Rd2`(高位)

`STRB Rd,[Rn,#offset]`

`STRD Rd1,Rd2,[Rn,#offset]`

`LDRB Rd,[Rn,Rm{,LSL,#n}]` `Rn + (Rm<<n)`

`STR Rd[Rn,Rm{,LSL,#n}]`

`LDR Rd,[Rn],#offset` 读[Rn]处的字节，然后更新为`Rn+offset`



32位立即数赋值：

`LDR R0, = #immed32`

`B label` 跳转到label

`BX R1` 跳转到R1

`BL label` 跳转到label，并将返回地址保存到LR

`BLX R1` 跳转到R1，并将返回地址保存到LR

条件跳转

`B<cond> <label>` 根据NZCV标志

`<cond>`为14个可能标志之一`EQ,NE,CS,CC,LT`

* EQ Z==1 相等
* NE Z==0 不相等
* CS C==1 进位
* CC C==0 未进位
* MI N==1 负数
* PL N==0 非负数
* HI C=\=1 && Z==0 无符号数 `>`不为0，且
* LS C\==0 || Z==1 无符号数`<=`
* LT N!=V 带符号数`<`
* GE N==V 带符号数`>=`
* GT Z==0&&N=\=V 带符号数`>`
* AL 总是

`IT <cond>`

`ITE <cond>`

```c
if (R0==R1)
{
    R3=R4+R5;
    R3=R3/2;
}
else
{
    R3=R6+R7;
    R3=R3/2;
}
```

```assembly
	CMP R0,R1
	ITTEE EQ
	ADDEQ R3,R4,R5
	ASREQ R3,R3,#1
	ADDNE R3,R6,R7
	ASRNE R3,R3,#1
```

## 位段操作

<img src="../assets/image-20240626185745453.png" alt="image-20240626185745453" style="zoom:40%;" />

## IO口

MODER 输入，通用输出模式，复用功能模式，模拟模式

OTYPER

OSPEEDR

PUPDR

IDR

GPIOA->BSRRH = GPIO_Pin_9; 对GPIOA.9清零

GPIOA->BSRRL = GPIO_Pin_9; 置一

## 中断

* 把8个寄存器地值压入栈
* 去向量，找到服务程序入口地址
* 选择堆栈指针MSP/PSP，更新堆栈指针SP，更新LR

抢占优先级，响应优先级

抢占优先级确认能否被打断

响应优先级确定如果同时触发，谁先响应

## Timer

14个定时器

TIM1，8 高级 16位

TIM2/5，32位

**预分频**：TIM1->PSC = P-1;

**周期和计数方式**：TIM1->ARR=N-1;

**PWM占空比**：TIM1->CCR1 = PWM; 占空比，一共9位

## DMA

具体不懂可以问GPT