import { Component } from "react";
import axios from "axios";
import '../index.css';
class Register extends Component{


  //constructor

    //constructor
  state={
    username:"",
    email:"",
    password:"",
    userType:"",
    avatar:""
  }

  changehandle=(e)=>{
    e.preventDefault();
    this.setState({   //store in setState
      [e.target.name]:e.target.value //store name:value in state={email:"",password:""}
    });
        // const{name,value}=e.target;  //e =event  target=Focus
        // SetUser({...User,[name]:value}) //SetUser mean store in SetUser //name:value store in useState({email:"HERE"})
  
  }
  filehandle=(e)=>{
    this.setState({
       // [e.target.name]:e.target.files[0] //for multiple attribute
        avatar:e.target.files[0] //for single avatar
    })
  }


    //event handling
    btnlogin=(e)=>{
      e.preventDefault();
      //stop browser refresh

      const data=new FormData();
      data.append("avatar" ,this.state.avatar);
      data.append("username" ,this.state.username);
      data.append("email" ,this.state.email);
      data.append("password" ,this.state.password);
      data.append("userType" ,this.state.userType);
      //connection
        axios.post('http://localhost:4000/register',data).then((response)=>{
            console.log("login",response.data)
            //localstorage token and userType
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userType',response.data.userType);
            alert("register successful");

        })
        .catch((error)=>{
            console.log(error);
            alert("login failed")
        })
    }
    render(){
        return(
            <>
            <h1>
                i am login </h1>


                <form class="register" action="action_page.php" method="post" >
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
  <label for="uname"><b>Username</b></label>
  
  <input type="text" placeholder="Enter Email" name="username" defaultValue={this.state.username} onChange={this.changehandle} required/>

    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={this.state.email} onChange={this.changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={this.state.password} onChange={this.changehandle}required/>

    <label for="psw"><b>userType</b></label>
    <input type="text" placeholder="Enter Password" name="userType" defaultValue={this.state.userType} onChange={this.changehandle}required/>
    <label for="psw"><b>Image</b></label>
    <input type="file" placeholder="Enter Password" name="avatar" defaultValue={this.state.avatar} onChange={this.filehandle}required/>


    <button type="submit" onClick={this.btnlogin}>Login</button>
    <label>
      <input type="button" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
   
  </div>
</form>

            
            </>
        )
    }
}
export default Register;