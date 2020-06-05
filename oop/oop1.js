// var b = {}
// b.title = 'Calculas'
// b.price = 155.75
// b['bar-code'] ='333222'
// b.available = 20
// for (var i in b){
//     console.log(i+' '+b[i])
// }

// const user = {
//     name : 'Dean Carter',
//     password: 'fucking',
//     age: 33,
//     connected: false,
//     login:function(){
//         this.connected  = true;
//         console.log('You status:', this.connected);

//     }


// }
// console.log(user.name);
// console.log(user.login());
// console.log('----------------');
// console.log(user.login());


//////////////////////////////////////////

// class userTemplate{
//     constructor(name,password,age){
//         this.name = name
//         this.password = password
//         this.age = age
//         this.connected = false
//     }
//     login(){
//         this.connected = false
//         console.log('your login status ',this.connected+' name='+this.name)
//     }
// }

// user1 = new userTemplate('Dean','pws22',33)
// user2 = new userTemplate('Carter','Mavelfore',34)

// console.log(user1.name)
// console.log(user2.name)
// user1.login()
// console.log(user1.connected)
// console.log(user2.login())
// user2.login()
//////////////////////////////////////////

// class Person { 
//     constructor(name, hairColor) { 
//         this.name = name 
//         this.hairColor = hairColor 
//     } 
// }
// let Bruce = new Person('Bruce', 'Black') 
// let preson2 = new Person('Bird','Black')

//  let ownProps = []
//  for(let property in Bruce){
//      if(Bruce){
//          ownProps.push(property)
//      }
//  }
//  console.log(ownProps)
//////////////////////////////////////////
// let parrot = {

//     name: "Speedy",
  
//     numLegs: 2,
  
//     sayName: function() {return "The name of this duck is " + this.name + ".";}
  
//   };
  class parrot { 
      constructor(name,color,numLegs){ 
          this.name = name 
          this.color = color 
          this.numLegs = 2 
       }
    Person(){
        console.log(this.numLegs)
    }   
}
 
let dog = new parrot('Bob','Brown',2)

dog.Person()
