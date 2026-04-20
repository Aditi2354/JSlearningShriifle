const person={
firstName:"Aditi",
lastName:"Kesharwani",
age: 24,
salary : 20000,
greet : function (){
 return this.firstName + " "  + this.lastName;
},
isStudent :false,
address: {
    city : "indore",
    zipcode: '2349'
},
hobbies:['playing','eating','sleeping']
};

// person.greet();
document.getElementById('demo').innerText= person.greet()

// this is how we can create an empty object var person ={}

class Animal {
constructor(name,age,gender){
    this.name=name,
    this.age=age,
    this.gender = this.female 
}
greet (){
    return  "Hello dear " + this.name
}
}

var Dog = new Animal("cat",4,"female")
console.log(Dog)
Dog.greet()

document.getElementById('dogisss').innerText = Dog.greet()



var prototypeobject ={
    greet: function(){
        return 'hello i am ' + this.name 
    }
}

var person2= Object.create(prototypeobject)

person2.name= "Don",
person2.age= 26
person2.gender="female"


document.getElementById('dogisss').innerText=person2.greet()
