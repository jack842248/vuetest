---
title: JS核心篇(30)：Class
date: 2021-03-30
tags: ["JavaScript"]
---
## 傳統建立原型
```js
//創建"動物"原型
function Animal(){
  this.kingdom = '動物界';
}

//在"動物"原型，新增"移動"方法
Animal.prototype.move = function(){
  console.log(this.name + '移動');
}

//創建"狗"原型
function Dog(name, color, size){
  //呼叫父類別的建構函數
  Animal.call(this);
  this.name = name;
  this.color = color;
  this.size = size;
}

//在"狗"原型，新增"吠叫"方法
Dog.prototype.bark = function(){
  console.log(this.name +'吠叫')
}

//讓"狗"繼承於"動物"原型
Dog.prototype = Object.create(Animal.prototype);

//修正建構函數的指向，原因是因為Object.create()會覆蓋原本的建構函數
Dog.prototype.constructor = Dog;

//創建"比比"原型
const Bibi = new Dog('Bibi', 'white', 'small');

Bibi.bark(); //Bibi吠叫
Bibi.move(); //Bibi移動
console.log(Bibi.kingdom); //動物界
```

-----------------------------------------------
## 傳統建立原型
```js
class Animal {
    constructor(f) {
        this.kingdom = '動物界';
    }
    move() {
        console.log(this.name + '移動')
    }

}
class Dog extends Animal {
    constructor(name, color, size){
        super(this);
        this.name = name;
        this.color = color;
        this.size = size;
    }
    bark(){
        console.log(this.name +'吠叫')
    }
}

const Bibi = new Dog('Bibi', 'white', 'small');
Bibi.bark(); //Bibi吠叫
Bibi.move(); //Bibi移動
console.log(Bibi.kingdom); //動物界
```