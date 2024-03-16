# JavaScript 代码规范

## 基础规则
> JavaScript 有关代码格式的基础规则基本遵循 eslint-standard 规则，将按照此规则进行代码检查
>
> 但命名方面为后续补充规则，在代码审查时将会对此细节进行要求
>
> 所有规则均为强制性，开发者需遵守

## 源文件
JavaScript 源文件必须以无 BOM 的 UTF-8 编码

## 不使用分号
每行代码的结尾不使用分号
```javascript{2}
// coding like this
const arr = []
// DONOT coding like this
var arr2 = [];
```

## 代码缩进
所有涉及到 JavaScript 的代码，统一使用 `2空格` 的缩进

不允许使用 Tab 制表符或者 4 空格代替

`switch` 中的 `case` 和 `default` 应保持缩进

```javascript
switch (score) {
  case 5:
    console.log('excellent')
    break
  case 4:
    console.log('great')
    break
  case 3:
    console.log('good')
    break
  default:
    console.log('do better next time')
    break
}
```

## 空格
二元运算符操作数之间必须使用空格，但一元运算符不能使用空格
```js
let len = arr.length
len ++
const ret = len + 1
return ret + 1
```

方法、条件语句、循环语句等，圆括号 `()` 和花括号 `{}` 与名称之间均保留 1 个空格，但圆括号内左右两边不使用空格
包括但不限于 if / else / for / while / function / switch / do / try / catch / finally
```javascript
// coding like this
function foo (a, b) {
  // ... some codes ...
}
for (let i = 0; i < 10; i += 1) {
  console.log(i)
}

// DONOT coding like this
function fe( a, b ){
  // ... some codes ...
}
if('1'*1===1){
  console.log('log')
}
```
函数执行时不使用空格
```javascript
foo()
```

变量/常量的声明、赋值时，等号前后保留 1 个空格
```javascript
const a = 10
```

对象的创建或属性赋值时，属性的冒号 `:` 后有 1 个空格，但冒号前没有
```javascript
const obj = {
  a: 1,
  b: 2
}
```

## 换行
应在每行赋值、执行后换行
```javascript
// coding like this
let obj = {
  a: 1,
  b: '2',
  c: 'abc'
}

// DONOT coding like this
let obj = {
  a: 1
  ,b: '2'
  ,c: 'abc'
}
```

逻辑操作符（与/或/非）等如需换行，应在新行的最前面
```javascript
if (
  1 === 1
  && true
  && (1 + 1 === 2 || 5 % 2 === 0)
) {
  // ... some codes ...
}
```
多行代码块、多行条件应换行，但相关连续的代码块（例如 `else`、`else if`）不换行，在花括号前后保留 1 空格
```javascript
if (condition) {
  // ... some codes ...
} else {
  // ... some codes ...
}
```