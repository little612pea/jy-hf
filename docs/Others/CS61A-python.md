# CS61a PYTHON

answer = get_string()

print("hello,",answer)  两个参数中间自动加括号

print(f"hello,{answer}")

f为formatted string 格式化字符串

数据类型

删去了c中的  long double

只有bool float int str

加了range list tuple dict set



```py
words = set() #直接将一个hash table 赋给word
#dict的实现？
def check(word):
    if word.lower() in words:
        return True
    else:
        return False
def load(dictionary):
    file = open(dictionary, "r")
    for line in file:
        word = line.rstrip() #
        words.add(line)
    close(file)
    return True

def size():
    return len(word)
    
def unload():
    #free memory
    return True
```

![image-20231022201934658](D:\notes\assets\image-20231022201934658.png)

所谓oop就是有内置的函数

s.lower() 要非常注意python中的浅拷贝和深拷贝

![image-20231022204754522](D:\notes\assets\image-20231022204754522.png)

```py
#py不需要prototype，但是需要call main

main函数写在最后，不用缩进
```

```py
#try-except语句
#抛出错误，然后
try:
    
except:

else:
```

```py
for i in range(4):
    print("?",end="\n")->print("?",end="")
=print("?"*4)
#没有分配内存，没有指针
```





### global frame(全局帧)

全局帧是程序的顶层帧，包含了全局范围内定义的变量。这些变量被称为全局变量，因为它们可以在整个程序的任何地方访问。全局帧中的变量对整个程序都是可见的。

### local frame（局部帧）

每当你调用一个函数，Python会为该函数创建一个局部帧。这个局部帧包含了函数中定义的局部变量和参数。这些变量只能在函数内部访问，而在函数执行完毕后，局部帧也会被销毁。这有助于保持变量的隔离性，防止不同函数之间的变量名冲突。

举例来说，如果你在Python中定义一个函数，函数内的变量会存在于该函数的局部帧中。同时，如果你在函数外定义一个变量，它会存在于全局帧中。这种分层的帧结构有助于组织和管理变量，使其具有适当的作用域。局部帧和全局帧的交互是Python中变量作用域的核心概念，它确保了变量在程序中的合理可见性和隔离性。

### $python3 -i example.py 

以交互式命令行运行python，可以通过键入变量值查看执行完成后的各个变量，无需print

### $python3 -m doctest example.py 

运行docstring所指定的示例，如果没有输出则直接返回

### $python3 -m doctest -v example.py

打印输出所有的docstring测试结果，相当于自测情况





def嵌套定义

![image-20231025192930643](D:\notes\assets\image-20231025192930643.png)

![image-20231025193350857](D:\notes\assets\image-20231025193350857.png)

![image-20231025193538460](D:\notes\assets\image-20231025193538460.png)

![image-20231025193656724](D:\notes\assets\image-20231025193656724.png)

![image-20231025201005992](D:\notes\assets\image-20231025201005992.png)

lambda x  :  f(x)==y 返回一个x

![image-20231025201319301](D:\notes\assets\image-20231025201319301.png)

control statements

![image-20231025213614688](D:\notes\assets\image-20231025213614688.png)

### 验证递归的正确性/如何写递归->分解问题，就好像n-1的答案已经写好了，只需要从n-1得到n

用数归！

1.base case

2.假设n-1的情况正确执行，正确返回，如何利用n-1的情况得出n

![image-20231025203103916](D:\notes\assets\image-20231025203103916.png)

![image-20231025204447557](D:\notes\assets\image-20231025204447557.png)

上面是循环，迭代

下面是递归！

迭代每次while循环内的赋值变成了递归调用时的参数

```py
def factorial_recursive(n):
    if n == 0:
        return 1
    else:
        return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
```

分清楚base case和else

![image-20231025210814628](D:\notes\assets\image-20231025210814628.png)

![image-20231025211259401](D:\notes\assets\image-20231025211259401.png)

![image-20231025214141514](D:\notes\assets\image-20231025214141514.png)

怎么分解问题比较关键

counting partitions

![image-20231025214423305](D:\notes\assets\image-20231025214423305.png)

![image-20231025214609959](D:\notes\assets\image-20231025214609959.png)

![image-20231025215321140](D:\notes\assets\image-20231025215321140.png)

[python列表(list)和元组(tuple)详解_木子林_的博客-CSDN博客](https://blog.csdn.net/lin_keys/article/details/114694491)

一篇讲list和tuple区别的blog，非常细致，可以细看

[Python的enumerate函数-CSDN博客](https://blog.csdn.net/sinat_38682860/article/details/109029773)





method ：和instance绑定的函数

method的第一个隐形的参数是self，调用的方式是dot（.）

instance有属性，但是class也可以有自己的属性

类名.函数名

Account.deposit（account_john，10）属于直接访问类的method

```python
class Account:
    interest = 0.02
    def __init__(self,account_holder):
        self.balance = 0
        self.holder = account_holder
    def withdraw(self,amount):
        if self.balance-amount<0:
            return 'Insufficient funds'
        else
        self.balance = self.balance-amount
        return self.balance
    def deposit(slef,amount):
        self.balance = self.balance+amount
        return self.balance
    #additional methods would be defined here
class CheckingAccount(Account):
    #递归查看是否有对应的attribute，如果找到的attribute是一个bound method就返回函数计算后的值，如果是一个值，就返回该值
    #初始化的时候
    withdraw_fee = 1
    interest = 0.01
    def withdraw(self,amount):
        return Account.withdraw(self,amount+self.withdraw_fee)#这里体现了继承的另一种用法
    #递归查看，withdraw在子类中有同名的重构实现，所以按照子类的来，但是因为方便，可以调用父类的withdraw函数，所以使用Account.withdraw来访问父类中的withdraw，但需要提供self参数，因为并未初始化account属性下的withdraw，所以需要提供self参数
    #即使已被overridden的属性也可以通过直接访问类对象访问
tom_account = Account("Tom")
>>>tom_account.interest
a = Account("John")
b = CheckingAccount('Jack')
>>>a.deposit(100)
100
>>>b.deposit(100)
100
>>>a.withdraw(100)
90
>>>b.withdraw(100)
89
    0.02
    #初始化的实例没有interest这个属性，但是类有，也可以访问到
```

面向对象编程中，所有东西是object：对象

在oop python中，所有东西（object）都有属性（attributes），以键值对（name-value pairs)表示

类（classes）也是object：对象，因此类有自己的属性

实例的属性：初始化的实例具有的属性

类的属性：初始化的实例所属的类所具有的属性

类的def方法定义的method/函数返回不返回（return有没有内容视情况需要，如果在实际实例化调用类时需要将初始化过的东西接收，例如a = open_account("john",5),则需要返回，否则不一定需要写return什么



has-a和is-a关系

```python
class Bank:
    #a bank has accounts:has-a关系
    def __init__(self):
        self.accounts = []
    def open_account(self,holder,amount,kind = Account):
        account = kind(holder)
        account.deposit(amount)
        self.accounts.append(account)
        return account
    def pay_interest(self):
		for a in self.accounts:
            a.deposit(a.balance*a.interest)
    def too_big_to_fail(self):
        return len(self.account)>1
```



```python
class A:
    z = -1
    def f(self,x):
        return B(x-1)
class B(A):
    n = 4
    def __init__(self,y):
        if y:
            self.z = self.f(y)
        else:
            self.z = C(y+1)
class C(B):
    def f(self,x):
        return x
a = A()
b = B(1)
b.n = 5
print(C(2).n)
print(a.z==C.z)
print(a.z==b.z)
print(b.z)
print(b.z.z)
print(b.z.z.z)
print(b.z.z.z.z)
```

