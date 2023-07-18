import React,{useState} from "react";
import axios from "axios";// or fetch('/login',User) in line23
function Login2(){

    //[[[[[User=this.state of Login //Setuser=Setstate of Login  // useState=state of login
  
    //state // do value intialized 
    //data change
    const[User,SetUser]=useState({email:"",password:""});  //useState HOOK

    const changehandle=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;  //e =event  target=Focus
        SetUser({...User,[name]:value}) //SetUser mean store in SetUser //name:value store in useState({email:"HERE"})
    }

    //useeffect is lifecycle
    
    const btnlogin=(e)=>{
        e.preventDefault();
      //stop browser refresh
      //connection
      axios.post('http://localhost:4000/login',User).then((response)=>{  //this.state  convert into User
        console.log("login",response.data)
        //localstorage token and userType
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('userType',response.data.userType);
        alert("login successful");
        window.location.href = "/user2";

    })
    .catch((error)=>{
        console.log(error);
        alert("login failed")
    })
    }
    return(
        <>
        
        <h1>
                i am login2
            </h1>

            <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>


  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="email" defaultValue={User.email} onChange={changehandle} required/>
    

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={User.password} onChange={changehandle} required/>

    <button type="submit" onClick={btnlogin}>Login</button> 
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
   
  </div>
</form>
        </>
    )
}
export default Login2;
// <span class="psw">Forgot <a href="#">password?</a></span>