---
title: JS核心篇(14)：JSON
date: 2021-03-14
tags: ["JavaScript"]
---
## JSON(JavaScript Object Notation)
* JSON是一種輕量級的資料格式，只有屬性，不支援函式或 **undefined** 。
* 所有屬性都是 **字串** 型別，且一律都只用 **雙引號** 。
* 打開Chrome→Network→Response，可查看回傳的資料。
```json
{
    "name": "小明家",
    "members":{
        "father": "老爸",
        "mother": "老媽",
        "ming": "小明"
    }
}
```

-----------------------------------------------
* 使用 **new XMLHttpRequest()** 。
```markdown
you project
│ 
├─── family.json
│     
└─── index.html
```
```js
let xhr = new XMLHttpRequest();
xhr.open("GET", "family.json");
xhr.onload = function() {
    if (xhr.status === 200) {
        //這裡取到的會是JSON原始格式
        console.log(xhr.responseText);
        //通常會使用parse()轉為javascript可運用的格式
        const family = JSON.parse(xhr.responseText);
    }
};
xhr.send();
```

-----------------------------------------------
* 使用 **AJAX** 套件，會直接將JSON直接轉為物件資料，省略parse()這段處理。
```js
$.ajax({
  url: "網址.json",
}).done(function(data){
  console.log(data);
};)
```