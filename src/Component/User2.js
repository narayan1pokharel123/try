import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function User2(){
    const[User,SetUser]=useState([]);
    //const Config=useState({headers:{''}})

        const deleteuser=(userid)=>{
        
        axios.delete('http://localhost:4000/deleteuser/'+userid,{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
       }).then((resp)=>{
            console.log("response",resp)    
        alert("delete successful")

        }).catch((error)=>{
            console.log(error);
            alert("delete failed")

        })
    }

// same as componentDidMount() 
    useEffect(()=>{
        axios.get('http://localhost:4000/userall',{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response)=>{
            SetUser(response.data);

        })
        .catch((error)=>{
            console.log(error);
        })


    },[])
    return(
    <>

<div className="user-container" >
    {
        User.map((curElem)=>{
            return(
                <> 
               <div className="user-card" >
            <div className="user-details">
                <p>Username: {curElem.username}</p>
                <p>Email: {curElem.email}</p>
                <p>Password: {curElem.password}</p>
                <p>User Type: {curElem.userType}</p>
            </div>
            <div className="user-actions">
            <img src={'http://localhost:4000/'+curElem.avatar} alt="image"></img>
            </div>
            <div className="user-buttons">
                
                <button className="delete" onClick={deleteuser.bind(this,curElem._id)}>delete</button>
                <a className="update" > <Link to={"/updateuser/"+curElem._id}>Update</Link>  </a>
                
            </div>

            </div>
          
                </>
            )

        })
    }
    </div>
    
    </>
    )
}

export default User2;


// import { useState,useEffect } from "react";
// import axios from "axios";

// function User2(){
//     const[User,SetUser]=useState([]);
//     // const Config=useState({headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}})
//     const deleteuser=(userid)=>{
        
//         axios.delete('http://localhost:4000/deleteuser/'+userid,{
//             headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
//        }).then((resp)=>{
//             console.log("response",resp)    
//         alert("delete successful")

//         }).catch((error)=>{
//             console.log(error);
//             alert("delete failed")

//         })
//     }


//     useEffect(()=>{
       
//             axios.get('http://localhost:4000/userall',{
//                  headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
//             }).then((response)=>{
//                 SetUser(response.data);
//             })
//             .catch((error)=>{
//                 console.log(error);
//             })
        
//     },[])
    
//     return(

        
//         <>

//         {
//             User.map((curElem)=>{
//                 return(
//                     <>
//                         {curElem.username}
//                         {curElem.password}
//                         {curElem.email}
//                         {curElem.userType}
//                         <img src={'http://localhost:4000/'+curElem.avatar}></img>

//                         <button class="delete" onClick={deleteuser.bind(curElem._id)}>delete</button>
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }

// export default User2;