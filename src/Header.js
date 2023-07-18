import React from 'react';
function Header(props){
    return(
        <>
        <h1> i am Header </h1>
        {props.name}
        {props.id}
        {props.hobby}
        </>

    )
}
export default Header;


// {
//     Sdata.map(function(val){
//         return(
//             <>
//             <div>
//             <p>{val.name}</p>
//             <p>{val.id}</p>
//             <p>{val.title}</p>
//             </div>
//             </>
//         )
//     })
// }

// import React from 'react';
// import Sdata  from './Sdata';
// {
//     Sdata.map(function(val){
//         return(
//             <>
//             <div>
//             <p>{val.name}</p>
//             <p>{val.id}</p>
//             <p>{val.title}</p>
//             </div>
//             </>
//         )
//     })
// }
// export default Header;
