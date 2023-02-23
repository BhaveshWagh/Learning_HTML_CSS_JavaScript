localStorage.setItem("Name","Bhavesh")
localStorage.setItem("Name1","Akshay")
localStorage.getItem("Name")
// localStorage.removeItem("Name")
const user = {user : "Mohit"}

localStorage.setItem("user",user)
// Line 7 In which we try stored object in local storage output of the object is stored in the form o/p : key: user AND value : [object Object] but we want to store object so, 
// Q : How to store object in local storage :
localStorage.setItem("user-copy",JSON.stringify(user));

//The above line o/p is : key : user-copy  and value : {"user":"Mohit"} So its store the whole object in Local Storage

// But we want this data out of storage So, see how access this data.

JSON.parse(localStorage.getItem("user-copy"));