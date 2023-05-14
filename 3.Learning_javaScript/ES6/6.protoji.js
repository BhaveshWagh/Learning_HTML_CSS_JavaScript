// How To create Object in JS

// const obj = new obj({
//   name: "bhavesh",
// });

// or 
// const obj1 = new obj1();

// or
const obj2 = {
    name: "kapil",
    getName: function(){
        return this.name
    },
    getRoll: function(){
        return this.rollNo
    }
  };
  
const obj = {
    rollNo: 101,
    __proto__:obj2

};

console.log(obj2.getRoll.rollNo)
