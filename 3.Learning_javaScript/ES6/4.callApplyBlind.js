// call, apply and Bind

// call
let userDetails = {
    name:'Bhavesh Wagh',
    Age: 22,
    Designation:'Software Engineer',
    // printDetails:function(){
    //     console.log(this.name)
    // }
    
} 

let printDetails = function(city,state){
    console.log(this.name+" "+city+" "+state)
    // console.log(this.name  )
}

// userDetails.printDetails()

printDetails.call(userDetails,"Dhule","Maharashtra.")

let userDetails2 = {
    name:'Mohit Wagh',
    Age: 22,
    Designation:'Doctor'
    // printDetails:function(){
    //     console.log(this.name)
    // }

}
// function borrowing
// userDetails.printDetails.call(userDetails2)

printDetails.call(userDetails2,"Dhule",'Maharashtra')

// Apply
// when you use apply you pass the array list rather than passing individual argument/ multiple arg
printDetails.apply(userDetails2,["Dhule",'Maharashtra'])

// Bind 
let newfun = printDetails.bind(userDetails,["Dhule","Maharashtra"])
// console.log("blind",newfun())
newfun('')