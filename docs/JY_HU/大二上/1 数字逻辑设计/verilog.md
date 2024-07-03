# Verilog中 reg和wire 用法和区别以及always和assign的区别

1、从仿真角度来说，HDL语言面对的是编译器，相当于使用软件思路，此时：

    wire对应于连续赋值，如assign；
    
    reg对应于过程赋值，如always，initial；

2、从综合角度，HDL语言面对的是综合器，相当于从电路角度来思考，此时：

     wire型变量综合出来一般情况下是一根导线。
    
     reg变量在always中有两种情况：
    
         （1）always @（a or b or c）形式的，即不带时钟边沿的，综合出来还是组合逻辑；
    
         （2）always @（posedge clk）形式的，即带有边沿的，综合出来一般是时序逻辑，会包含触发器（Flip-Flop）

3、设计中，输入信号一般来说不能判断出上一级是寄存器输出还是组合逻辑输出，对于本级来说，就当成一根导线，即wire型。而输出信号则由自己来决定是reg还是组合逻辑输出，wire和reg型都可以。但一般的，整个设计的外部输出（即最顶层模块的输出），要求是reg输出，这比较稳定、扇出能力好。


4、Verilog中何时要定义成wire型？

    情况一：assign语句
    
       例如：
    
               reg   a,b;
    
               wire  out;
    
               ......
    
              assign   out = a & b;
    
      如果把out定义成reg型，对不起，编译器报错！

   情况二：元件实例化时必须用wire型

         例如：
    
          wire   dout;
    
         ram   u_ram
    
       (
    
        ....
    
       .out(dout);
    
       )
    
      wire为无逻辑连线，wire本身不带逻辑性，所以输入什么就的输出什么。所以如果用always语句对wire变量赋值，对不起，编译器报错。
    
      那么你可能会问，  assign    c = a & b;   不是对wire的赋值吗？
    
      并非如此，综合时是将  a & b综合成 a、b经过一个与门，而c是连接到与门输出线，真正综合出来的是与门&，不是c。


5、何时用reg、何时用wire？

     大体来说，reg和wire类似于C、C++的变量，但若此变量要放在begin...end之内，则该变量只能是reg型；在begin...end之外，则用wire型；
    
     使用wire型时，必须搭配assign；reg型可以不用。
    
     input、output、inout预设值都是wire型。
    
     在Verilog中使用reg型，并不表示综合出来就是暂存器register：在组合电路中使用reg，组合后只是net；在时序电路中使用reg，合成后才是以Flip-Flop形式表示的register触发器。


6、reg和wire的区别：

     reg型数据保持最后一次的赋值，而wire型数据需要持续的驱动。wire用在连续赋值语句assign中；reg用于always过程赋值语句中。
    
    在连续赋值语句assign中，表达式右侧的计算结果可以立即更新到表达式的左侧，可以理解为逻辑之后直接连接了一条线，这个逻辑对应于表达式的右侧，这条线对应于wire；
    
     在过程赋值语句中，表达式右侧的计算结果在某种条件的触发下放到一个变量当中，这个变量可以声明成reg型，根据触发条件的不同，过程语句可以建模不同的硬件结构：
    
    （1）如果这个条件是时钟上升沿或下降沿，那硬件模型就是一个触发器，只有是指定了always@（posedge or negedge）才是触发器。
    
    （2）如果这个条件是某一信号的高低电平，那这个硬件模型就是一个锁存器。
    
    （3）如果这个条件是赋值语句右侧任意操作数的变化，那这个硬件模型就是一个组合逻辑。

7、过程赋值语句always@和连续赋值语句assign的区别：

    （1）wire型用于assign的赋值，always@块下的信号用reg型。这里的reg并不是真正的触发器，只有敏感列表内的为上升沿或下降沿触发时才综合为触发器。
    
    （2）另一个区别，举例：
    
          wire     a;
          reg      b;
         assign     a = 1'b0;
         always@(*)
                 b = 1'b0;
    
         上面例子仿真时a将会是0，但是b的状态是不确定的。因为Verilog规定，always@（*）中的*指的是该always块内的所有输入信号的变化为敏感列表，就是说只有当always@（*）块内输入信号发生变化，该块内描述的信号才会发生变化。
    
        像always@（*）  b= 1'b0; 中由于1‘b0是个常数，一直没有变化，由于b的足组合逻辑输出，所有复位时没有明确的值--即不确定状态，又因为always@（*）块内没有敏感信号变化，此时b信号一直保持不变，即不确定是啥，取决于b的初始状态。



以下为个人书写规范，方便个人统一格式，与行业规范有所不符

```verilog
module name (   //input 
	        clk,
		rst,
		datain1,
		datain2,
		//output 
	        dataout1,
		dataout2
);

input clk,rst;
input [7:0] datain1, datain2;

output reg [7:0] dataout1;//若不是wire型可以在output后直接声明为reg类型；
output [7:0] dataout2;//可以不用声明为wire；output [7:0] wire dataout2与此相同

always@ (posedge clk or negedge rst)
begin
    if(~rst)//~为按位取反，!为逻辑取反
        begin
        dataout1 <= 8'd0;
        end
    else
        begin
	dataout1 <= datain1 + datain2;  
        end
end

assign dataout2 = dataout1 + 8'd1;

endmodule 
```





- Verilog中input和output**默认类型为wire类型**，若不声明为reg统一为wire类型，**输入信号只能为wire型**，而输出信号可以为wire，也可以为reg；输出类型可以为reg但是并**不是所有的reg型都被编译为寄存器**，因为只要在**always@**里进行赋值必须使用reg类型，例如：

```verilog
reg a ;
reg b;
always@ （*） begin
  if (<condition>) begin
    a = tmp ;
    b = a ;
  end
end
```

在这段代码中a是不会综合出寄存器的，而b却会，原因在于a是中间变量，就是一条线，所以综合出来的不是寄存器，而是一条线。而在condtion不满足的情况下b要保值，所以b会综合成寄存器。(引用BruceX的回答)

6t 

- 使用always赋值时一般使用**非阻塞赋值（<=）为时序逻辑**，一般不使用**阻塞赋值**（=）但语法正确，为**组合逻辑**。无论使用哪种赋值方式，赋值号左边必须为reg类型。