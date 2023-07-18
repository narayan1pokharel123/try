import { Component } from "react";
import axios from "axios";
import '../index.css';
class Login extends Component{


  //constructor
    //[[[[[Setstate=Setuser of Login  //User=State of Login
    // const[User,SetUser]=useState({email:"",password:""});

    // const changehandle=(e)=>{
    //     e.preventDefault();
    //     const[name,value]=e.target;
    //     SetUser({...User,[name]:value})
    // }]]]]]]]
    //constructor
  state={
    email:"",
    password:""
  }

  changehandle=(e)=>{
    this.setState({   //store in setState
      [e.target.name]:e.target.value //store name:value in state={email:"",password:""}
    });
  }


    //event handling
    btnlogin=(e)=>{
      e.preventDefault();
      //stop browser refresh
      //connection
        axios.post('http://localhost:4000/login',this.state).then((response)=>{
            console.log("login",response.data)
            //localstorage token and userType
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userType',response.data.userType);
            alert("login successful");

            window.location.href="/user"
            

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


                <form class="Login" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="email" defaultValue={this.state.email} onChange={this.changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={this.state.password} onChange={this.changehandle} required/>

    <button type="submit" onClick={this.btnlogin}>Login</button>
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
}
export default Login;