---
title: JS核心篇(31)：Class
date: 2021-03-31
tags: ["JavaScript"]
---
## ES6 class與傳統建立原型比較
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
## 建立資料處理方法
```js
const data = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 20,
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24,
  },
  {
    name: 'Ray',
    like: '泡菜',
    age: 28,
  },
  {
    name: '滷蛋',
    like: '狗糧',
    age: 10,
  },
  {
    name: '漂亮阿姨',
    like: '美妝',
    age: 19,
  },
];


class FilterData {
  constructor(item){
    this.item = item;
  }
  //篩選[屬性]不超過[多少值]
  filterItems(key,value){
    this.data = this.data.filter((item) => {
      return item[key] >= value
    });
    return this;
  }
  //將[屬性]由小排到大
  sortItems(key){
    this.data.sort((a,b)=>{
      return a[key] - b[key];
    });
    return this;
  }
  //只要查看[哪些屬性]
  excludeFields(...fields){
    this.data = this.data.map((item)=>{
      Object.keys(item).forEach((key)=>{
        if(!fields.includes(key)){ delete item[key] }
      })
      return item;
    });
    return this;
  }
}

const newData = new FilterData(item);

//方法結束都有return this因此可以連接方法
newData.filterItems('age',20).sortItems('age').excludeFields('name','age');

console.log(newData); 
//[
//  {name: 'Casper', age: 20},
//  {name: 'Wang', age: 24},
//  {name: 'Ray', age: 28}
//]
```