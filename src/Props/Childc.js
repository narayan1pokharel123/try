import React,{createContext} from 'react'
import { data } from './ChildA';
import { data2} from './ChildA';



const Childc = ({name}) => {
    

  return (
    <div>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <>
                        <data2.Consumer>
                            {
                                (title)=>{
                                    return(
                                        <>
                                        my name{name}
                                        my title{title}
                                        </>
                                    )
                                }
                            }
                        </data2.Consumer>
                        </>
                    )
                }
            }
        </data.Consumer>
    </div>
  )
}

export default Childc