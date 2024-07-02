# ML-for-zju

![image-20231022102907303](C:\Users\23828\AppData\Roaming\Typora\typora-user-images\image-20231022102907303.png)

generative model 生成式模型和非生成式模型

linear model/none linear model

![image-20231022103347613](C:\Users\23828\AppData\Roaming\Typora\typora-user-images\image-20231022103347613.png)

生成模型（Generative Model）和判别模型（Discriminative Model）是机器学习中两种不同类型的模型，它们的主要区别在于它们对数据的建模方式和应用领域。

1. **生成模型（Generative Model）**：
   - 生成模型试图对整个数据分布进行建模，它学习如何生成数据。生成模型能够生成与训练数据集相似的新数据点。
   - 生成模型通常用于生成新数据、样本合成、缺失数据填补以及密度估计等任务。
   - 代表性的生成模型包括变分自编码器（Variational Autoencoders，VAE）、生成对抗网络（Generative Adversarial Networks，GAN）、隐马尔可夫模型（Hidden Markov Models，HMM）等。
   - 生成模型通常需要更多的数据和计算资源来训练，因为它们要学习整个数据分布。
2. **判别模型（Discriminative Model）**：
   - 判别模型关注的是对不同类别之间的边界进行建模，它学习如何对输入数据进行分类或标记。
   - 判别模型通常用于分类、回归和标记任务，其中目标是预测输入数据的标签或属性。
   - 代表性的判别模型包括逻辑回归、支持向量机、决策树、神经网络中的前馈神经网络等。
   - 判别模型通常在小规模数据上效果较好，因为它们只需要建模与任务相关的部分信息，而不需要学习整个数据分布。

总结来说，生成模型和判别模型的关键区别在于其建模目标。生成模型试图理解整个数据分布并生成新数据，而判别模型关注的是对数据的分类或标记。在实际应用中，选择生成模型还是判别模型通常取决于具体问题和任务的性质。有时，这两种类型的模型可以结合使用，以实现更复杂的机器学习任务。



![image-20231022110143358](D:\notes\assets\image-20231022110143358.png)

linear feature+nonlinear model/ nonlinear feature+linear model是什么意思



ChatGPT



"线性特征 + 非线性模型" 和 "非线性特征 + 线性模型" 是机器学习中的两种不同方法，用于处理数据和建立预测模型。它们可以在特征工程和模型选择方面用于处理非线性关系。

1. **线性特征 + 非线性模型**：
   - 在这种方法中，特征是原始数据或线性组合的结果，而模型是非线性的。这意味着模型可以学习非线性关系，但特征本身是线性的。
   - 举例：特征可以是原始数据，如长度、宽度和高度，但模型可以是多项式回归模型，能够拟合非线性关系，例如长度和宽度的乘积对输出的影响。
2. **非线性特征 + 线性模型**：
   - 在这种方法中，特征本身是经过非线性变换的，例如，通过应用某种非线性函数（例如对数、指数、多项式等）对原始数据进行处理。然后，线性模型被用于学习特征之间的线性关系。
   - 举例：特征可以是原始数据的对数，模型可以是线性回归模型，通过对数变换能够捕捉数据中的非线性关系，如指数增长。

这两种方法通常用于处理不同类型的数据和问题。选择哪种方法通常取决于问题的性质以及数据的分布。在某些情况下，可以尝试两种方法，然后根据模型性能来选择最佳方法。

需要注意的是，"非线性特征 + 线性模型" 也可以被看作是一种"线性特征 + 非线性模型"的特殊情况，因为线性模型本身可以学习非线性关系，只要特征经过适当的非线性变换。这种灵活性使得线性模型成为许多机器学习问题的有力工具。



| Truth/Prediction | Positive |      |
| :--------------- | -------- | ---- |
| Positive         | TP       |      |
| Negative         | FP       |      |
|                  |          |      |

![image-20231022110708240](D:\notes\assets\image-20231022110708240.png)

mean-squared error

![image-20231022112204191](D:\notes\assets\image-20231022112204191.png)

![image-20231022113633010](D:\notes\assets\image-20231022113633010.png)

# 10-25

### symbolism

logic theorist

expert system

automated theoroem proving



### connectionism

transformers

recurrent neural networks

convolution neural netorks