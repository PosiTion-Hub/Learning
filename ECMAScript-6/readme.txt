ECMAScript 6

//�ʼ�


							ECMAScript 6  ̽��

һ�� let,const����
     1��let: �������������ģ����� var ������ let ���ڴ��������Ч����forѭ������Ϊͻ��
          ����{
                   let a = 10;
                    var b = 11; 
               }
               console.log(a); //����
               console.log(b); //11

           let �����ڱ�������
              console.log(foo);// ���undefined
               var foo = 2;

               console.log(bar); // ����ReferenceError
               let bar = 2;
               
             ��ʱ������ (��Ҳ����ζ�� let�������ڱ��������ýṹʱ Ҳ�ǲ�������typeof �����жϣ������������û�ж���ʱ typeof �����ᱨ�� �ĵ�undefined)
               var tmp = 12;
               if(true){
                    tmp = 'abc';// ����ReferenceError
                    let tmp;
               }
     2��const ������һ��ֻ���ó����������󲻿ɸı� ��Ҳ����ζ�� const �����ǲ����ȶ����ֵ��  ����ʱ�ͱ��踳ֵ
          const foo = {}
               foo.prop = 123;
          console.log(foo.prop) //123
          foo = {} //����
          
          Object.freeze�������Զ���һ������ ʹ�ö������������Ч
          

���������ý⹹
     var a = 1;var b = 2; var c = 3 ;  <===> var a = 1, b = 2, c = 3; <===> ES6 : var [ a, b, c ] = [1, 2, 3]
     let [foo, [[bar],baz]] = [11,[[22],33]]  console.log(foo,bar, baz) //1,2,3
     let [x, y, z] = ['1'];
     ����⹹���ɹ� ��ô����ֵΪ undefined
   
     �⹹ָ��Ĭ��ֵ
          var [foo = true] = [];
          console.log(foo) //true

     ����⹹
          var {obj1, obj2} = {obj1: 1, obj2: 2}
          console.log(obj1, obj2)
     �ַ����⹹
          let {chat1, chat2, chat2} = 'hello'
          console.log(chat1, chat2 , chat3)// h e l 
     ������������
          function add([a, b]){
              return a + b 
          }
          add([1,3]) //3
          
          function move ({x = 0, y = 1} = {}){
               return x + y
          }
          move()  //1
          move({x:2, y:3})// 5
     /*��;*/
          [x,y] = [y,x];
          var [a, b, c, d] = ()=>[1, 2, 3, 4];
          var {x, y} = ()=>{x:1,y:2}
     
�����ַ�������չ
     1���ַ���Unicode��ʾ��
          "\u0061" //a
          "\u0000" - "\uFFFF" ֮���ʾΪ���ַ� �����������������ַ���ʾ
          let hello = 123;
          hell\u{6f} // 123;
     2�� codePointAt();  //���ر��� ���� charCodeAt
     3��String.fromCodePoint(); // ���ڴ���㷵�ض�Ӧ�ַ� String.fromCharCode
     4���ַ����������ӿ�   
     for(let code of 'abcd'){
          console.log(code)     
     }
     5��ͨ���ַ������±��Ӧ���ַ�
     'abcd'.at(1); // b 
     6��normalize()
     7��includes()   ���ز���ֵ ��ʾ�Ƿ��ҵ��˲����ַ���
          startsWith() ���ز���ֵ ��ʾ�����Ƿ���Դ�ַ��Ŀ�����
          endsWith() ���ز���ֵ ��ʾ�����ַ����Ƿ���Դ�ַ���β��
               let str = 'hello word';
               str.includes('o') //true
               str.startsWith('h') //true
               str.endsWith('d') //true
              
               str.startsWith('h',6) //true       ��������ֱ�ʾ��ʲô�ط���ʼ
               str.endsWith('hello',5) //true   ��������ֱ�ʾ��ʲô�ط���ʼ
         8��repeat()  ����һ���µ��ַ���������Ϊ����(ΪС����ȡ��)��ʾ�ַ��ظ����ٴ�
               'xx'.repeat(4); //xxxx
               'nono'.repeat(0); // '' 

          9��padStart(nub,str)��padEnd(nub,str) //�ַ�����ȫ���ȹ���    ���nub�ó���С���ַ����ó�����ô����ԭ�ַ���
                'x'.padStart(3,'a')// 'aax' //���ַ�����ͷ������ַ�ʹ���ַ�����Ϊ3 ����
               'x'.padEnd(3,'a')// 'xaa' //���ַ�����β������ַ�ʹ���ַ�����Ϊ3 ����
               'abc'.padStart(10,'123456789')// '1234567abc' ���ָ����ҲҪע�� //�������ַ���ԭ�ַ��ĳ��� ������ nub ���ȡ�����ַ�
          
          10���ַ���ģ��
               ` abc ${name} defg ` //�ַ���ģ�塣 ���б���ʹ�� ${}�������� ʡ����ƴ�ӵ��鷳 ���� ${}�в������Էű��������Էŷ������ַ���









































