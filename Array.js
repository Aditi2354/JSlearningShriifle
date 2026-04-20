let lang=['html','js','c++','java']
console.log(lang.length);


let s= lang.toString()
console.log(s)

console.log(lang.join('|'))

let emp={
    firstName : "Aditi",
    lastName : "Kesharwani",
    salary : "5000"

}

console.log(delete emp.salary)
console.log(emp)

let a1=[11,12,13]
let a2=[14,15,16]
let a3=[17,18,19]

let newarr= a1.concat(a2,a3);
console.log(newarr)


let flat1=[1,2,[3],[4,[5]]]
let flat2= flat1.flat(Infinity)
console.log(flat2)


let  unshift= [20,30,40]
unshift.unshift(10)
console.log(unshift)



let splice1=[20,30,40,50]
  splice1.splice(1,3)
  splice1.splice(1,0,3,4,5)
  console.log(splice1)

  const slice1=[1,2,3,4,5,6]
  const res=slice1.slice(1,4)
  console.log(res)


  const some=[1,2,3,4,5]
  let res1= some.some((val)=>val>4)
  console.log(res1)

  const values= [1,2,3,4,5,6]
  const res2= values.values()

  for(const i of res2){
    console.log(i)
  }


  let red=[88,50,25,10]
  let sub= red.reduce(geeks)

  function geeks(tot, num){
   return tot-num
  }

  console.log(sub)

  let filter=[1,2,3,4,5,6,7,8]

  let res3= filter.filter((num)=>num>1)
  console.log(res3)


  let map1= [4,9,16,25]
  let map2= map1.map(geeks1)

  function geeks1(){
    return map1.map(Math.sqrt)
  }
  console.log(map2)


  let map3=[4,9,16,25]
  let map4= map3.map((num)=>num*2)
  console.log(map4)