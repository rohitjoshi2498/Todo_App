var users = [{
        "username": "john",
        "password": "password",
        "name": "John Doe",
        "email": "john@example.com",
        "todo":[]
  }]

var set_todo=(value)=>{
users[0]["todo"]=value
}
var get_todo=()=>{
  return users[0]["todo"]
  }

var generateRandomCode=(length)=> {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var code = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
  
    return code;
  }

  export {set_todo,get_todo,generateRandomCode,users}