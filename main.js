import _ from 'lodash'


console.log();
console.log("=================");
console.log('hello world 5');
console.log("=================");


{
  const object = {}
  const array =[]

  let a = 1
  let b = a

  b = 2
  console.log(a,b);

  const person = {
    name: "Aileen",
    age: 18,
    income: 0
  }

  const person2 = person

  person2.age = 28
  console.log(person, "\n", person2);
  person.income = 100
  console.log(person, "\n", person2);

  const person3 = {...person }
  console.log(person3);
  person3.age = 50
  console.log(person, '\n', person3);
}

{
  console.clear();

  const person = {
    name: "Aileen",
    age: 18,
    profile: {
      account: [
        {
          id: 1,
          income: 0,
        },
        {
          id: 2,
          income: 100,
        }
      ]
    }
  }

  const person3 = { ...person }
  person3.profile.account[0].income = 1000

  console.log(person);

  const person4 = _.cloneDeep(person)
  console.clear();
  console.log(person4);
  person4.profile.account[0].income = 5000
  console.clear();
  console.log(person);
  console.log(person4);
}

{
  console.clear();
  console.log(new Object());  // {}
  console.log(new Array());  // []
  console.log(new Set());  // {}
  console.log(new Map());  //{}
  console.log(new WeakSet());  //{}
  console.log(new WeakMap());  //{}
  console.log(new Date());
}

{
  console.clear();
  const target = { a: 1, b: 2 }
  const source = { b: 4, c: 5 }

  const returnTarget = Object.assign(target, source)
  const returnTarget2 = Object.assign(target, source)

  console.log(returnTarget, returnTarget2);

  console.log(target);
}

{
  console.clear();
  const target = { a: 1, b: 2 }
  const source = { b: 4, c: 5 }

  const combineTarget = { ...target, ...source }

  console.log(combineTarget);

  console.log(target);
}

{
  const user = {
    name: "Aileen",
    age: 18,
    profile: {
      address: "xx.xxx.xxx",
      email: "yy.yyy.yy"
    },
    draw: function () {
      console.log(this.name);
    }
  }

  console.log(user.name);
  user.draw()

  const newUser = Object.create(user)

  console.log(user);
  console.log(newUser);
  newUser.draw()

  console.log(Object.hasOwn(user, "name"));
  console.log(Object.hasOwn(user, "age"));
  console.log(Object.hasOwn(user, "draw"));
  console.log(Object.hasOwn(user, "name"));
  console.log(Object.hasOwn(user, "age"));
  console.log(Object.hasOwn(user, "draw"));
  console.log(Object.hasOwn(user, "toString"));

  console.log(user.hasOwnProperty('name'));
  console.log(user.hasOwnProperty('age'));
  console.log(user.hasOwnProperty('toString'));

  console.log(user.isPrototypeOf(newUser));

  const user2 = { ...user }
  console.log(user2.isPrototypeOf(newUser));
  console.log(newUser.__proto__);
}

{
  console.clear();
  const user = {
    name: "Aileen"
  }
  console.log(user);
  user.age = 18
  console.log(user);
  delete user.age
  console.log(user);
  user.age = 18
  user.ege = 30

  console.log(user);

  console.log(Object.isExtensible(user));

  Object.preventExtensions(user);
  console.log(Object.isExtensible(user));

  delete user.ege
  console.log(user);
  // user.ege = 30

  user.age = 30
  console.log(user); 
}

{
  console.clear();
  console.log();
  const user = {
    name: "Raymond",
    age: 18
  }

  Object.seal(user)
  console.log(Object.isExtensible(user));

  // user.ege = 30  不能增加
  // delete user.age  不能減少

  user.age = 30
  console.log(user);  // seal object 可以改變內數據
}

{
  console.clear();
  console.log();
  const user = {
    name: "Raymond",
    age: 18
  }

  Object.freeze(user)
  console.log(Object.isExtensible(user));
  //user.ege = 30  不能增加
   // delete user.age  不能刪除
   //user.age = 30  不能做任何修改

   const newUser = _.cloneDeep(user)   // 可以使用深度拷貝複製 object, 然後修改. 深度拷貝只會拷貝內容 不會拷貝設置的freeze
   console.log(newUser);
   console.log(Object.isExtensible(newUser));
}

// Array
// Array.form()
// Array.isArray()

{
  const name = "Aileen   Tsai"  // String
  const arrayName = Array.from(name)
  console.log(arrayName);   // 變成數組
  console.log(arrayName.toString());

  //傳統函數
  function filterFunc(element) {
    console.log(element);
  }

  //Es6 箭頭函數
  const filterFunc2 = (element) => {
    console.log(element);
  }
  
  // const newArrayName = arrayName.filter(element => {
  //   console.log(element);
  // })

  const newArrayName = arrayName.filter(filterFunc)
  const newArrayName2 = arrayName.filter(filterFunc)

  const newArrayName3 = arrayName.filter(element => element != ' ')
  console.log(newArrayName3);

  console.log(typeof arrayName);
  console.log(Array.isArray(name));
  console.log(Array.isArray(arrayName));
  console.log(arrayName.join());
  console.log(arrayName.join(''));  //把所有逗號換成空格
  console.log(arrayName.join(' ')); 
  console.log(arrayName.join('_'));
}

// Array.prototype.concat()
// Array.prototype.filter()
// Array.prototype.join()
// Array.prototype.map()

// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.findLast()
// Array.prototype.findLastIndex()

// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.shift()
// Array.prototype.unshift()

// Array.prototype.sort()


{
  console.clear();
  const array1 = ['a', 'b', 'c']
  const array2 = ['d', 'e', 'f']

  const array3 = array1.concat(array2)
  console.log(array3);
  console.log(array1, array2);

  const array4 = [...array1, ...array2]
  console.log(array4);
}

{
  console.clear();
  const array1 = [5, 12, 8, 130, 71, 55]
  const found = array1.find(element => element > 40)
  console.log(found);
  const index = array1.findIndex(element => element > 40)
  console.log(index);
  console.log(array1[index]);
  const foundLast = array1.findLast(element => element > 40)
  console.log(foundLast);
  const indexLast = array1.findLastIndex(element => element > 40)
  console.log(indexLast);
  console.log(array1[indexLast]);

  const filter = array1.filter(element => element > 40)
  console.log(filter);

  const newMap = array1.map(element => element * 10)  // map => 整體數值的改變
  console.log(newMap);
  console.log(array1);
}

{
  console.clear();
  const list = [1, 2, [3, 4, 5, [6, [7, 8, 9]]]]

  console.log(list);

  const newList = list.flat()
  console.log(newList);
  const newList2 = list.flat(1)
  console.log(newList2);
  const newList3 = list.flat(2)
  console.log(newList3);
  const newList4 = list.flat(3)
  console.log(newList4);

  const newList5 = list.flat(Infinity)
  console.log(newList5);
}

{
  const list = ['A', 'B', 'C']

  let iter = list.keys()

  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);


  iter = list.values()

  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
}

{
  console.clear();
  const list = ['A', 'B', 'C']
  list.push('D')

  console.log(list);
  const getPop = list.pop()
  console.log(list);
  console.log(getPop);

  list.shift()
  console.log(list);
  list.unshift('1')
  console.log(list);
}

{
  const list = [374, 435, 23, 343, 7843, 85]

  const newList = [...list.sort((a, b) => a - b)]
  const newList2 = [...list.sort((a, b) => b - a)]

  console.log(newList);
  console.log(newList2);

  const list2 = [374, 435, 'age', 343, 23, '18', 7843, 85]
  const newList3 = [...list2.sort((a, b) => a - b)] // 分段排序
  console.log(newList3);

  const list3 = [374, 435, 'age', 343, 23, '18', 7843, 85]
  const newList4 = [...list3.sort((a, b) => a - b)]
  console.log(newList4);

  const list4 = [374, 435, 23, '|', 343, 7843, '|', 85, 1534, 945]
  const newList5 = [...list4.sort((a, b) => a - b)]
  // .filter(element => element != '|')
  console.log(newList5);

  const list5 = list4.filter(element => element != '|')
  const newList6 = [...list5.sort((a, b) => a - b)]
  console.log(newList6);
}