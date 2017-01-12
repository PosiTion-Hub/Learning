ECMAScript 6

//笔记


							ECMAScript 6  探索

一、 let,const命令
     1、let: 用于声明变量的，类似 var ，其中 let 是在代码块内有效，在for循环中尤为突出
          例：{
               let a = 10;
                var b = 11; 
           }
           console.log(a); //报错
           console.log(b); //11

       let 不存在变量提升
          console.log(foo);// 输出undefined
           var foo = 2;

           console.log(bar); // 报错ReferenceError
           let bar = 2;
           
         暂时性死区 (这也就意味着 let变量存在变量提升得结构时 也是不能是用typeof 进行判断，但是这个变量没有定义时 typeof 将不会报错 的到undefined)
           var tmp = 12;
           if(true){
                tmp = 'abc';// 报错ReferenceError
                let tmp;
           }
     2、const ：声明一个只读得常量，声明后不可改变 这也就意味着 const 常量是不能先定义后赋值的  声明时就必需赋值
          const foo = {}
               foo.prop = 123;
          console.log(foo.prop) //123
          foo = {} //报错
          
          Object.freeze方法可以冻结一个对象 使得对象添加属性无效
          

二、变量得解构
     var a = 1;var b = 2; var c = 3 ;  <===> var a = 1, b = 2, c = 3; <===> ES6 : var [ a, b, c ] = [1, 2, 3]
     let [foo, [[bar],baz]] = [11,[[22],33]]  console.log(foo,bar, baz) //1,2,3
     let [x, y, z] = ['1'];
     如果解构不成功 那么变量值为 undefined
   
     解构指定默认值
          var [foo = true] = [];
          console.log(foo) //true

     对象解构
          var {obj1, obj2} = {obj1: 1, obj2: 2}
          console.log(obj1, obj2)
     字符串解构
          let {chat1, chat2, chat2} = 'hello'
          console.log(chat1, chat2 , chat3)// h e l 
     函数参数机构
          function add([a, b]){
              return a + b 
          }
          add([1,3]) //3
          
          function move ({x = 0, y = 1} = {}){
               return x + y
          }
          move()  //1
          move({x:2, y:3})// 5
     /*用途*/
          [x,y] = [y,x];
          var [a, b, c, d] = ()=>[1, 2, 3, 4];
          var {x, y} = ()=>{x:1,y:2}
     
二、字符串得扩展
     1、字符得Unicode表示法
          "\u0061" //a
          "\u0000" - "\uFFFF" 之间表示为单字符 ，超出必须用两个字符表示
          let hello = 123;
          hell\u{6f} // 123;
     2、 codePointAt();  //返回编码 类似 charCodeAt
     3、String.fromCodePoint(); // 用于从码点返回对应字符 String.fromCharCode
     4、字符串遍历器接口   
     for(let code of 'abcd'){
          console.log(code)     
     }
     5、通过字符串的下标对应的字符
     'abcd'.at(1); // b 
     6、normalize()
     7、includes()   返回布尔值 表示是否找到了参数字符串
          startsWith() 返回布尔值 表示参数是否在源字符的开部。
          endsWith() 返回布尔值 表示参数字符串是否在源字符得尾部
               let str = 'hello word';
               str.includes('o') //true
               str.startsWith('h') //true
               str.endsWith('d') //true
              
               str.startsWith('h',6) //true       后面得数字表示从什么地方开始
               str.endsWith('hello',5) //true   后面得数字表示从什么地方开始
         8、repeat()  返回一个新得字符串，参数为数字(为小数会取整)表示字符重复多少次
               'xx'.repeat(4); //xxxx
               'nono'.repeat(0); // '' 

          9、padStart(nub,str)，padEnd(nub,str) //字符串补全长度功能    如果nub得长度小于字符串得长的那么返回原字符串
                'x'.padStart(3,'a')// 'aax' //在字符串的头部添加字符使的字符长度为3 即可
               'x'.padEnd(3,'a')// 'xaa' //在字符串的尾部添加字符使的字符长度为3 即可
               'abc'.padStart(10,'123456789')// '1234567abc' 这种个情况也要注意 //当参数字符加原字符的长度 大于了 nub 会截取参数字符
          
          10、字符串模板
               ` abc ${name} defg ` //字符串模板。 其中变量使用 ${}包裹起来 省区了拼接的麻烦 其中 ${}中不仅可以放变量还可以放方法和字符串









































