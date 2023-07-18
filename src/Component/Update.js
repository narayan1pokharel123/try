import React,{useEffect,useState} from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

function Update(){

    //constructor
    const[User,SetUser]=useState({
        username:"",
        email:"",
        password:"",
        userType:"",
        avatar:""
      }
    );  //useState HOOK
    const {id}=useParams();
  
  const changehandle=(e)=>{
    e.preventDefault();
        const{name,value}=e.target;  //e =event  target=Focus
        SetUser({...User,[name]:value}); //SetUser mean store in SetUser //name:value store in useState({email:"HERE"})
  };
//  const filehandle=(e)=>{ 
//     SetUser({...User,avatar:e.target.files[0] })
    
//   };


//this is method to get data from usersingle(backend or postman after put id) to as defaultValue={User.username},defaultValue={User.email},defaultValue={User.password} 
  useEffect(()=>{
    axios.get('http://localhost:4000/usersingle/'+id,{
        headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    })
    .then((response)=>{
        SetUser(response.data);
        console.log(response.data)

    })
    .catch((error)=>{
        console.log(error);
    })


},[id])


    //event handling
   const btnregister=(e)=>{
      e.preventDefault();
      //stop browser refresh

      // const data=new FormData();
      // data.append("avatar" ,User.avatar);
      // data.append("username" ,User.username);
      // data.append("email" ,User.email);
      // data.append("password" ,User.password);
      // data.append("userType" ,User.userType);
      //connection
        axios.put('http://localhost:4000/updateOne/'+id,User,{
          headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }).then((response)=>{
            console.log("login",response)
            //localstorage token and userType
            alert("update sucessful");

        })
        .catch((error)=>{
            console.log(error);
            alert("error")
        })
    }
    
        return(
            <>
            <h1>
                i am login </h1>


                <form action="action_page.php" method="post" >
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
  <label for="uname"><b>Username</b></label>
  
  <input type="text" placeholder="Enter Email" name="username" defaultValue={User.username} onChange={changehandle} required/>

    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={User.email} onChange={changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={User.password} onChange={changehandle}required/>

    <label for="psw"><b>userType</b></label>
    <input type="text" placeholder="Enter Password" name="userType" defaultValue={User.userType} onChange={changehandle}required/>
    
    <button type="submit" onClick={btnregister}>Login</button>
    <label>
      <input type="button" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>

            
            </>
        )
    }
export default Update;