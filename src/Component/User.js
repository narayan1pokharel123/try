import axios from "axios";
import { Component } from "react";
import { Navigate } from "react-router-dom";


class User extends Component{
    state={
        User:[],
        config:{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    },// config: {} for delete user
    }
    deleteuser=(userid)=>{
        //e.preventDefault();
        axios.delete('http://localhost:4000/deleteuser/'+userid,this.state.config)

        .then((resp)=>{
            console.log("response",resp)
            alert("delete successful")
        })
        .catch((error)=>{
            console.log(error);

        })
    }

    //method
    componentDidMount(){
        axios.get('http://localhost:4000/userall',this.state.config).then((response)=>{
            this.setState({
                User:response.data
            })

        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        <div></div>
        if(localStorage.getItem('userType') && localStorage.getItem('userType')!=='Admin'){
            return <Navigate to="/login"></Navigate>
        }

        return(
            <>
            <div className="user-container">
            {this.state.User.map((val)=>{  //{this.state.User.map((val)=>{
                return(
                    <>
                    <div className="user-card">
                    <div className="user-details">
                    <p>{val.username}</p>
                    <p>{val.email}</p>
                    <p>{val.password}</p>
                     <p>{val.userType}</p>
                </div>
                
                <img src={'http://localhost:4000/'+val.avatar} alt="image"></img>
                <button class="delete" onClick={this.deleteuser.bind(this,val._id)}>Delete</button>
                </div>
                </>
                )
            })}
            
            </div>
            
            </>
        )
    }
}
export default User;
//map function to display image dtra   fetch from data