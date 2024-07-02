# 参考代码

以下代码有些许语法错误

```vhdl
library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all; 
use IEEE.numeric_std.all;
use IEEE.std_logic_arith.all;

entity DIVX is
    port(
        Freq_in,Clr_n: in std_logic;
        Div_num: in natural range 0 to 49999999;
        Freq_out: out std_logic;
    );  
end DIVX;

architecture BEHAV of DIVX is
begin
p1:process (Freq_in,Clr_n)
variable cnt_val: natural range 0 to 49999999;
begin
    if(Clr_n='0')then
        cnt_val:=0;
	elsif(Freq_in'event and Freq_in='1')then
        if(cnt_val=Div_num)then 
            cnt_val:=0;
		elsif(cnt_val<Div_num/2)then
            cnt_val:=cnt_val+1;
			Freq_out<='0';
		else
            cnt_val:=cnt_val+1;
			Freq_out<='1';
		end if;
    end if;
end process;
end BEHAV;
	
```

```vhdl
library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all; 
use IEEE.numeric_std.all;
use IEEE.std_logic_arith.all;

entity CNT16 is
    port(
        Clk,Clr_n:in std_logic;
        Q:out std_logic_vector(3 downto 0);
    );
end CNT16;

architecture BEHAV of CNT16 is
signal Q_tmp: std_logic_vector(3 downto 0);
begin
    P1:process(Clk,Clr_n)
    begin
        if(Clr_n='0')then
            Q_tmp<="0000";
        elsif(Clk'event and Clk='1')then
            Q_tmp<=Q_tmp+1;
        end if;
    end process;
		Q<=Q_tmp;
end BEHAV;
```

```vhdl
library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all; 
use IEEE.numeric_std.all;
use IEEE.std_logic_arith.all;

entity COMP4BIT is
    port(
        A,B: in std_logic_vector(3 downto 0);
        AGB:out std_logic;
    );
end COMP4BIT;
architecture BEHAV of COM4BIT is
begin
    process(A,B)
    begin
        if(A>B)then
            AGB<='1';
        else
            AGB<='0';
        end if;
    end proscess;
end BEHAV;
```

```vhdl
library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.std_logic_unsigned.all; 
use IEEE.numeric_std.all;
use IEEE.std_logic_arith.all;

entity TOP is
Port ( 
    swtch:in std_logic_vector(3 downto 0);
    Freq_in:in std logic;
    PWM:out std_logic;);
end TOP;
architecture Behavioral of TOP is
component DIVX is
	Port(Freq_in, Clr_n:in std_logic;
         Div_num:in natural range 0 to 49999999;
         Freq_out:out std_logic);
end component;

component CNT16 is
	port(
        Clk,Clr_n:in std_logic;
        Q:out std_logic_vector(3 downto 0);
    );
end component;
component COMP4BIT is
	port(
        A,B: in std_logic_vector(3 downto 0);
        AGB:out std_logic;
    );
end component;
signal Freq_out:std_logic;
signal cnt_out:std_logic_vector (3 downto 0);
begin
	ul:DIVX port map (Freq_in=>Freq_in, Clr_n=>'1', Div_num=>26315, Freq_out=>Freq_out);
	u2:CNT16 port map (Clk=>Freq_out, Clr_n=>'1', Q=>cnt_out);
	u3:CMP4BIT port map (A=>cnt_out, B=>swtch, AGB=>PWM)
end Behavioral;
```

