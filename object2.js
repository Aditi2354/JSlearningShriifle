const Person ={
    firstName:'Aditi',
    lastName:'Kesharwani',
    age:24,
    address:{
     city:'indore',
     zipcode:'000002'
    },
  
    hobbies:['coding ','reading','dancing']
}
console.log(Person.firstName)
console.log(Person['lastName'])
console.log(Person.hobbies['1'])


for(let key in Person){
    console.log (`${key} "->" ${Person[key]}`)
}


const obj= {a:1,b:2,c:3};
const keys = Object.keys(obj)
console.log(keys)


const values=Object.values(obj)
console.log(values)


const entries= Object.entries(obj)
console.log(entries)