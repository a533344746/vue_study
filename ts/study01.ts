//原始类型 number/string/boolean/null/undefined/symbol
let age:number = 18
let high:number = 180
let url:string ='www.baidu.com'
let method: string = 'get'
let isLoading:boolean = false
//数组类型string和number
let a1: number[] = [1,2,3]
let a2:Array<number> = [2,3,4]
let b1: string[] = ['a','b','c']
//联合类型
let c1: (number | string)[] = ['a',1,'3']
//类型别名（自定义类型）,简化复杂类型多次使用的问题
type CustomArray = (number|string)[]
let arr1:CustomArray = [11,'b',21]
//函数类型
function add1(age: number,high: number): number{
    return age + high
}
const add2:(num1: number,num2: number) => number = (num1, num2)=>{
    return num1+num2
}
console.log(add1(age,high),add2(11,12))
//函数可选参数
function mySlice(start?:boolean,stop?:boolean){
    console.log('起始索引： ',start,'结束索引： ',stop)
}
mySlice()
mySlice(true)
mySlice(true,false)

//对象类型,对象中的属性或方法也是可选的，通过？设置可选属性或方法
let person: {
    name: string
    age: number
    say(word:string):void
}={
    name:'Jack',
    age:18,
    say(word) {
        console.log(word)
    }
}
person.say("hello world")

function myAxios(config:{url: string,method?: string}){
    console.log(config)
}
myAxios({url,method})

//接口，当一个类型多次被使用时来描述对象的类型，以达到复用的作用
interface person{
    name: string
    age: number
    say():void
}

let person1: person={
    name: "Tom",
    age:10,
    say() {
        console.log(this.name,"正在说话")
    }
}
person1.say()
//和之前的type做对比
//相同点：都可以给对象指定类型
//不同点1.接口只能为对象指定类型  2.类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名
type human = {
    name: string
    age: number
    sayHi(): void
}
type numStr = number|string
let human1: human = {
    name: "Jack",
    age: 20,
    sayHi(){
        console.log(this.name,"say Hi")
    }
}
human1.sayHi()
//如果两个接口之间有相同的属性或者方法，可以将公共的属性和方法抽离出，通过继承来实现复用
interface Point2D{x:number,y:number}
interface  Point3D extends Point2D{z:number}

let p3: Point3D = {
    x:1,
    y:2,
    z:3
}