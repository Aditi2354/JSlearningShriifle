let user1 ={
    firstname:"Aditi",
    lastname:"kesharwani",
    address:{
        city:"prayagraj",
        zipcode:"20687"
    }
}

let user2={...user1}

user2.firstname= "Aanya "
console.log(user1.firstname)
console.log(user2.firstname)


// this is shallow copy we have made seperate object from first one 

user2.address.city ="Indore"
console.log(user2.address.city)
console.log(user1.address.city)


//  it is taking the reference of nested object 
// that's why changing value of both objects 


// that's why we will use deep copy 

let user3= structuredClone(user1)
user3.address.city="Ayodhya"
console.log(user1.address.city)
console.log(user3.address.city)
