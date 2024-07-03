# 数字逻辑设计 notes

SOP：sum of minterms

对函数求complement

## Implicant: squares in the map

product term obtained by combining adjacent squares in the map into a rectangle with the number of squares a power of 2.

A Prime Implicant is a product term obtained by combining the maximum possible number of adjacent squares in the map into a rectangle with the number of squares a power of 2.

A prime implicant is called an Essential Prime Implicant if it is the only prime implicant that covers (includes) one or more minterms.

### 简单来说就是如果没有这个圈有的格子就包裹不进去，就是 essential prime implicant

1.3 implicant
蕴含项其实就是我们文章最开始提到的“圈”，每一种可能的圈就是一个蕴含项

![在这里插入图片描述](D:\notes\assets\20191011191319505.png)

上图中就有7个一次蕴含项，6个二次蕴含项和1个四次蕴含项，共计14个蕴含项

1.4 prime implicant
质蕴含项就是不能与其它蕴含项合并的蕴含项，在1.3中，我们发现四次蕴含项中有4个二次蕴含项，那么它们就不是质蕴含项

![在这里插入图片描述](D:\notes\assets\20191011191821622.png)

可以看到上图中的每一个圈都不能和其它圈合并，所以上图有共计4个质蕴含项

1.5 essential prime implicant
实质本源蕴含项中必须含有至少一个没被包含在其它蕴含项中的项，而且不能被更大的圈包裹



![在这里插入图片描述](D:\notes\assets\20191011192107335.png)

上图中有三个实质本源蕴含项，而我们找到最简SOP的方式就是找到所有的实质本源蕴含项





# cost criteria

## Literal cost L



## gate input cost G

## gate input cost with NOTs GN





## propagation delay $t_{pd} = max{(t_{PLH},t_{PHL})}$ 

### $t_{PHL}$是

propagation : 传输

## 分为transport delay 和 inertia delay（有rejection time属性）



![image-20231015200001435](D:\notes\assets\image-20231015200001435.png)

![image-20231015200046111](D:\notes\assets\image-20231015200046111.png)

三个串联？四个可以吗

74LS00与非门传输延迟测量：3个74LS00门串联，4个可以吗？





$(\overline{A B})$

![image-20231017153245413](D:\notes\assets\image-20231017153245413.png)

2-12怎么化简

4位全加器的延时较长

因此采用carry look ahead adder

16位加法器使用4个CLA串联

64位 组超前进位

将G0~3, P0~3传给下一层？

C4 = G3 +P3G2 + P3P2G1+P3P2P1G0+P3P2P1P0C0

​     = G0~3 + P0~3*C0

C8 = G4~7 + P4~7*C4

同理，C12 = G8~11+ P8~11*C8

C16 = G12~15+ P12~15*C12

依赖关系和4位的CLA相似

![Carry Lookahead Adder in VHDL and Verilog with Full-Adders](D:\notes\assets\carry-lookahead-adder-4-bit.png)

# 小测1 复习

## 1、逻辑表达式化简：

### $A+\overline{A}B=(A+B)(A+\overline{A})=A+B$

### $逻辑表达式可重复使用$

## 2、门代价计算：

## 3、卡诺图化简

4变量的卡诺图，16个格子，圈的大小为8->1个变量

![image-20231113230459090](D:\notes\assets\image-20231113230459090.png)









