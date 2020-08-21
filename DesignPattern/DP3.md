# 创建型模式

创建型模式抽象了实例化过程。帮助一个系统独立于如何创建，组合和表示它的那些对象。

一个类创建型模式使用继承改变被实例化的类。

固定行为硬编码，转移为定义一个较小的基本行为集

主旋律：

- 都将关于该系统使用哪些具体的类的信息封装起来。
- 它们隐藏了这些类的实例是如何被创建和放在一起的。

创建型模式在什么被创建，谁创建，怎样北川间的，以及何时创建这些方面可以有很大的灵活性。配置是可以静态的，也可以是动态的。

创建型模式：所有5个模式一起研究，突出相似点和不同点

Prototype，Abstract Factory，Singleton

创建型模式提供了多种不同方法从实例化它们的代码中出去对一些具体类的先是引用。

如果CreateMaze调用的是虚函数而不是构造器来创建需要的房间，这个就是Factory Method模式
如果传递一个对象给CraeteMaze做参数来创建房间，墙壁等，这个就是Abstract Factory
如果是创建一个对象给CreateMaze，这个对象可以在他所建造的迷宫使用增加房间，墙壁等操作，来全面的创建一个新的迷宫，那么你可以使用改变迷宫的一些部分或改变迷宫被建造的方式，这个就是Builder模式
如果CreateMaze是由多种原型的房间墙壁和们对项参数化，，他拷贝并将这些对象增加到迷宫中，可以用不同的对象替换这些原型对象以改变迷宫的构成。这是Prototype模式的一个例子。
如果CreateMaze可以保证一个游戏可以访问所有迷宫中的对象，而不需要借助全局变量或函数。这个就是Singleton模式。

## 抽象工厂 Abstract Factory 对象创建型模式

1 提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类

一个支持多种视感标准的用户界面工具包，例如 Motif和Presentation Manager。不同的实感风格定义不同的外观和行为。

每一个视感标准都对应一个具体的子类。每一个子类实现哪些用于创建窗口组件的操作。

客户仅通过WidgetFactory接口创建窗口组件，并不知道哪些类实现了特定既视感风格的窗口组件。

客户机与抽象定义的接口交互，而不是用特定的具体类的接口

适用性：

- 一个系统要独立与他的产品的创建，组合和表示时
- 一个系统要由多个产品系列中的一个来配置时
- 当需要强调一些里相关产品对象的设计以便进行联合使用时
- 当你想提供一个产品类库，指向显示它们的接口而不是实现时

优点：分离了具体的类 Abstract Factory模式，控制一个应用创建对象的类。

一个工厂封装创建产品对象的责任和过程，将客户与类的实现分离。

- 更容易交换产品的系列。
- 有利于保持产品的一致性
- 难以支持新种类的产品

实现：

1）将工厂作为单件，一个应用中每个产品只需要一个ConcreteFactory的实例。因此工厂通常最好实现一个Singleton。
2）创建产品 由ConcreteProduct 子类实现。

AbstractFactory 类通常用工厂方法实现，也可以用Prototype实现。

一个具体工厂一般是是一个单件（Singleton）

### Builder 生成器模式 对象创建型模式

target: 将一个复杂的对象的构建过程与它的构建分离，是的同样的过程可以创建不同的表示
Builder：为创建一个Product对象的各个部件指定抽象接口

每种转换器类将创建和装配一个复杂对象的机智隐含在抽象接口的后面。

builder模式描述了所有这些关系。每一个转换器类在该模式中被称为生成器，而阅读器则成为导向器。

适应性：

- 在创建复杂对象的算法应该独立于该对象的组成部分以及他们的装配方式时。

优缺点

1）可以改变一个产品的内部表示，通过抽象接口来构造产品
2）它将构造代码和表示代码分开。 Builder模式通过封装一个复杂对象的创建和表示方式提高了对象的模块性
3）它可以提供对构造过程更精细的控制，builder接口相比其他创建型模式能更好的反映产品的构造过程。

class Builder {
    constructor(a, b) {
        this.a = this.createA(a)
        this.b = this.createB(b)
        return this.getRoom(this.a, this.b)
    }
    createA () {},
    createB () {},
    getRoom () {

    }
}

let room = new Builder('red', 'car')

封装对象是如何被创建的

Abstract Factory与Builder相似，因为他也可以创建复杂对象。主要区别碍于Builder模式着重于一步一步构建一个复杂对象，而Abf着重于多个系列产品对象。

Builder在最后一步返回产品，而对于Abstract Factory来说，产品是立即返回的

### FACTORY METHOD (工厂方法) --- 对象创建型模式

意图：定义一个用于创建对象的接口，让子类确定实例化拿一个类。Factory Method 使一个类的实例化延迟到其子类

别名：Virtual Constructor

动机：框架使用抽象类定义和维护对象之间的关系。这些对象的创建通常也由框架负责

适用性：

- 当一个类不知道他所必须创建的对象的类的时候
- 当一个类希望由它的子类来指定他所创建的对象的时候。
- 当类将创建对象的职责委托给多个帮助子类中的某一个，并且希望将拿一个帮助子类是代理者这一信息局部化的时候

1.为子类提供挂钩 用工厂方法在一个类的内部创建对象通常比直接创建对象更灵活。
2.连接平行的类层次

Abstract Factory 中经常会用工厂方法实现。

Prototype 不需要创建createor的子类，但是，它们通常要求一个针对Product类的Initialize操作。Creator使用Initialize来初始化对象。而Factory Methods 不需要这样的操作

#### Prototype（原型）—— 对象创建型模式

意图：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象

动机：使用Prototype模式来减少类的数目

适用性：

- 当一个系统应该独立于它的产品创建，构成和表示时，要使用Prototype模式；
- 当要实例化累的时候是在运行时刻指定时，例如：动态装载
- 为了避免创建一个与产品类层次平行的工厂类层次时
- 当一个类的实例只有几个不同状态组合中的一种时。建立相应数目的原型并克隆它们

效果：

- 对客户隐藏了具体的产品类，因此减少了客户知道的名字和数目
- 运行时刻增加和删除产品 Prototype允许只通过客户注册原型实例就可以将一个新的产品并入系统，比较灵活。
- 改变值以指定新对象
- 减少子类的构造 Factory Method 经常产生一个与产品类层次平行的creator类层次。Prototype模式使得你克隆一个原型，而不是请求一个工厂方法去产生一个新的对象。
- 用类动态配置应用 运行时刻允许动态将类装在到应用中。

主要缺陷是每一个Prototype的子类都必须实现clone操作。
