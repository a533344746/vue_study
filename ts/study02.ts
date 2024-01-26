//元组类型,确切地知道包含多少个元素，以及特定索引对应的类型,是一种另类的数组
//使用number[] 会导致不严谨，因为该类型中的数组中可以出现任意个数字
let position: [number,number,string] = [39.5427,116.2317,'地图坐标']

//类型推论（偷懒）
let age = [1,2,3,4]
//如果声明变量但没有添加初始值时，需要手动添加类型

//类型断言
//当程序员比ts更加明确该元素的类型时使用类型断言
//const aLink: HTMLAnchorElement
//const aLink = document.getElementById('link') as HTMLAnchorElement
//const aLink = <HTMLAnchorElement>document.getElementById('link')
//aLink.href
//通过console.dir()打印dom元素，在属性列表的最后面，可以看到该元素的类型

//字面量类型
let str1 = "hello TS" //变量
const str2 = "helloTS" //常量 类型为“helloTS” ,字面量类型
//字面量类型通常和联合类型一起使用，用来表示一组明确的可选值列表
function changeDirection(direction: 'up'|'down'|'left'|'right'){
    console.log(direction)
}
//相较于string类型，使用字面量类型更加精确、严谨
changeDirection('up')

//枚举类型
enum Direction {
    up='up',
    down='down',
    left='left',
    right='right'
}//定义一组命名常量,从零开始的自增数值（数字枚举）,也可以时字符串类型的
function changDirection1(direction: Direction){
    console.log(direction)
}
changDirection1(Direction.left)

//any类型 不推荐使用，临时使用用来避免类型过长
let obj: any = {
    x:0,
    y:'a'
}
// obj.bar = 100
// obj()

//typeof操作符用来获取js中获取数据类型
let num1: number | string = 2
console.log(typeof num1)
//ts可以在类型上下文中引用变量或属性的类型
function to(point: typeof num1){
    console.log(point)
}
to('abc')