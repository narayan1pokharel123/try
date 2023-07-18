
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import React from 'react'


const Logout = () => {
    const Navigate=useNavigate();

    const logout2=(e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        if(!localStorage.getItem('token')){
            Navigate('/login');
        }
        
        

    }

    // useEffect(()=>{
    //     if(!localStorage.getItem('token')){
    //         Navigate('/login');
    //     }
        
        

    // })

  return (
    <>
//       <button onClick={logout2}>Logout</button>
//     </>
  )
}

export default Logout;
// const logout2 = (e) => {
//   e.preventDefault();

//   axios
//     .put('http://localhost:4000/logout', {
//       headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
//     })
//     .then((response) => {
//       console.log("res", response);
//       alert("update successful");
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// };

// const LogoutButton = () => {
//   return (
//     <>
//       <button onClick={logout2}>Logout</button>
//     </>
//   );
// };

// export default LogoutButton;




// import React from 'react'

// const Logout = () => {
//     const Logout2 = (e) => {
//       e.preventDefault();
  
//       axios
//         .put('http://localhost:4000/logout', {
//           headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
//         })
//         .then((response) => {
//           console.log("res", response);
//           // Clear local storage token and userType
//           localStorage.removeItem('token');
//           localStorage.removeItem('userType');
//           alert("Logout successful");
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("Error occurred during logout");
//         });
//     };
  
//     return Logout2;
//   };