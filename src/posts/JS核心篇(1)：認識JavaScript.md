---
title: JS核心篇(1)：認識JavaScript
date: 2021-03-01
tags: ['JavaScript']
---
## 直譯式語言(Interpreted Language)
|例如|JavaScript、Python、PHP、Ruby、BASIC、LISP、Perl、R|
|---|---|
|流程|原始碼 → 直譯器 → 代碼生成 → 執行|
|特性|程式碼由上到下執行，效能比較差、除錯比較慢、需要依賴執行環境。|

-----------------------------------------------
## 編譯式語言(Compiled Language)
|例如|Java、C、C#、C++、Pascal|
|---|---|
|流程|原始碼 → 預處理器 → 代碼生成 → 執行|
|特性|效能比較好、除錯比較快、程式碼可獨立執行。|

-----------------------------------------------
## 語法作用域(Lexical Scope)
* 語法在解析時就決定作用域，且不再改變。
* 因為 **console.log(apple)** 不在function內，所以取不到 **區域變數**。
```js
function sayApple(){
  const apple = '蘋果';
  console.log(apple)
}

sayApple();

console.log(apple) //Ming is not defined
```

-----------------------------------------------
* 因為在function內宣告的變數，結束後也會跟著消失。
* **sayHi()** 函式並未宣告apple變數，因此會向外尋找 **全域變數**。
```js
const apple = '蘋果';

function sayHi(){
  return 'hi' + apple;
}

function sayApple(){
  const apple = '青森蘋果';
  console.log(sayHi()); //hi蘋果
}

sayApple();
```

-----------------------------------------------
## 執行環境(Execution Context)
* 全域環境
  * 瀏覽器開啟時產生的 **window** 。
  * **window**  ===  **this** 。
* 區域環境
  * 在函式 **(function)** 內，會產生自己的 **this** 。
  * 可以重複被執行產生環境。

-----------------------------------------------
## 執行堆疊(Execution stack)
1. **全域環境** 最先堆疊，再來依序堆疊 **區域環境**。
2. **區域環境** 依序結束，最後留下 **全域環境**。
* 可以使用開發者工具`Source`--> 暫停 --> 重新整理頁面 --> 點下一步
```js
function sayHi(name) {
    return 'hi' + name;
}

function sayApple() {
    const apple = '蘋果';
    console.log(sayHi(apple))
}

sayApple(); // hi蘋果

//當瀏覽器開啟時...
//產生window全域環境 → 
//sayApple() → 
//產生sayApple()的區域環境 → 
//sayHi() → 
//產生sayHi()的區域環境 → 
//sayHi()的區域環境消失 → 
//doSomething()的區域環境消失 → 
//留下window全域環境
```

-----------------------------------------------
## 範圍鍊(Scope Chain)
* 當函式本身沒有變數時，會向外層找到 **全域變數** 。
```js
const apple = '蘋果';

function sayApple1(){
  const apple = '青森蘋果';
  sayApple2();
}

function sayApple2(){
  console.log(apple);
}

sayApple1(); //蘋果
//因為sayApple2()本身沒有變數，所以會向外找到全域的變數;
```

-----------------------------------------------
* 當函式裡的函式本身沒有變數時，會向外層找到函式裡的變數。
```js
const apple = '蘋果';

function sayApple1(){

  const apple = '青森蘋果';

  function sayApple2(){
    console.log(apple);  //青森蘋果
  }

  sayApple2();
}

sayApple1();
//因為sayApple2()本身沒有變數，所以會找向外層找到sayApple1()的變數;
```

-----------------------------------------------
## 提升(Hoisting)
* 在創造階段時，宣告變數、函式表達式會先存放在 **記憶體** 裡，還取不到值 **undefined** 。
```js
var apple = '蘋果';
console.log(apple);

//------拆解過程如下-----

//創造階段
var apple; 

//執行階段
apple = '蘋果'; 
console.log(apple); //蘋果
```

-----------------------------------------------
* 函式會優先於變數宣告。
```js
var sayApple = function(){
    console.log('蘋果')
}

function sayApple(){ 
    console.log('青森蘋果')
}

sayApple();

//------拆解過程如下-----

//創造階段
function sayApple(){ 
  console.log('青森蘋果')
}
var sayApple; 
sayApple = function(){
  console.log('蘋果')
}

//執行階段
sayApple(); //蘋果
```

-----------------------------------------------
* 範例一：執行順序 : function > 宣告 > fn()。
* console.log只找到宣告的apple 但並未賦予值，因此會出現ReferenceError(暫時性死區)錯誤
```js
sayApple();

function sayApple(){
  console.log(apple);
}

var apple = '蘋果'; //undefined

//------拆解過程如下-----

//創造階段
function sayApple(){
  console.log(apple);
}
var apple;

//執行階段
sayApple();
apple = '蘋果';
```

-----------------------------------------------
* 範例二：執行順序 : function > 宣告 > fn()。
```js
function sayApple(){
  console.log('蘋果');
}

sayApple();

function sayApple(){
  console.log('青森蘋果');
}

sayApple();

//------拆解過程如下-----

//創造階段
function sayApple(){
  console.log('蘋果');
}
function sayApple(){
  console.log('青森蘋果');
}

//執行階段
sayApple(); //青森蘋果
sayApple(); //青森蘋果
```

-----------------------------------------------
* 範例三：執行順序 : function > 宣告 > fn()。
```js
sayApple(); 

function sayApple(){
  if(name){
    name = '蘋果'
  }
} 

var name = '青森蘋果';

console.log(name);

//------拆解過程如下-----

//創造階段
function sayApple(){
  if(name){
    name = '蘋果'
  }
} 
var name;

//執行階段
sayApple(); //undefined
name = '青森蘋果'
console.log(name); //青森蘋果
```

-----------------------------------------------
## 單執行緒(Single Thread)
* 同步事件會依序執行，而非同步事件會先移到 **事件佇列(Event Queue)** ，等待其他事件執行完才會執行。
* 範例一：setTimeout
```js
function sayApple(){
  setTimeout(function(){
    console.log('蘋果');
  },3000);
}

function sayBanana(){
  console.log('香蕉');
}

function sayPineapple(){
  console.log('鳳梨');
}

sayApple();
sayBanana();
sayPineapple();
//console.log出現順序:'香蕉'、'鳳梨'、'蘋果'
//但因為sayApple()裡的setTimeout屬於非同步事件
//會在事件佇列，等到sayBanana()、sayPineapple()執行完才執行
```

-----------------------------------------------
* 範例二：addEventListener
```html
<button type="button" id="box">按鈕</button>
```
```js
function clickbox(){
  console.log('你點擊了箱子');
} 

let buttonElement = document.getElementById('box');
buttonElement.addEventListener('click',clickbox,false);
```
-----------------------------------------------
* 範例三：for迴圈＋setTimeout，會先跑完所有迴圈，最後setTimeout()才會執行最後一次的結果。
```js
for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

-----------------------------------------------
## 回收機制(Garbage Collection)
* 當沒有任何物件參考時，物件的 **記憶體** 就會釋放掉。
```js
function sayApple1(){
  sayApple2();
}
function sayApple2(){
  console.log('蘋果');
}
sayApple1();
//在console.log('蘋果');前...
//因沒有任何物件參考sayApple1()，所以記憶體它的也釋放掉了。
```