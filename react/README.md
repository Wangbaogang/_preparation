## babel

* 问：babel-standalone是怎样使react/jsx代码在浏览器环境可执行的？
  答：没有魔法。babel-standalone打包了babel的整个编译模块，用来编译jsx形式的代码，再执行。
  具体解释入下：
  1. `type`值为自定义值的`script`脚本， 浏览器不予执行。babel-standalone正是利用了浏览器这一策略。读取每一个`type="babel"`或`type="jsx"`的script。
  2. 将其中的内容编译成es5即浏览器可执行的代码，并为其创建新的javascript脚本，添加到DOM中，这样浏览器就会自动执行编译好的代码。
  3. 若有`src`属性，会先加载资源，再进行上一步操作。

## React

* 问：如何解释 `this.someFunction=this.someFunction.bind(this)`的必要性？
  答：没有魔法。这与Javascript语法特性有关。
  如`LoginClass`是一个React Class。我们构造一个该类的实例`login`, this.someFunction是login的原型方法（即：`this.__proto__.someFunction`），只有bind到实例上，该函数内部使用`this`才能正确指向login实例。

