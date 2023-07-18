import React from 'react';
import Sdata  from './Sdata';
function Footer(){
    return(
        <>
        <h1> i am Footer </h1>
        {
            Sdata.map(function(val){
                return(
                    <>
                    
                    <div>
                    <center>
                    <p> {val.id}</p>
                    <p> {val.name}</p>
                    <p> {val.title}</p>
                    <p> {val.subject[1]}</p>
                
                    <p> {val.data.map(function(val2){
                        return(
                            <>

                            {val2.name}
                            {val2.id}
                            {val2.title}
                            </>
                        )
                    })}</p>
                    <p>  {val.car.name}</p>
                    <p>  {val.car.price}</p>
                    </center>

                    </div>
                    </>
                )
            })
        }
        
        </>
    )
}
export default Footer;