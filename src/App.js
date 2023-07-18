//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';//package define
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Header2 from './Header2';
import Login from './Component/Login';
import Login2 from './Component/Login2';
import Register from './Component/Register';
import Register2 from './Component/Register2';
import User from './Component/User';
import User2 from './Component/User2';
import Update from './Component/Update';
import Reducer from './Component/Reducer';
import Logout from './Component/Logout';
import ChildA from './Props/ChildA';

//import Reducer from './Component/Reducer';
//import Register2 from './Component/Register2';
//import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <h1> i am hello</h1>
    <BrowserRouter>
    <Routes>

    <Route path="/Header" exact element={<Header name="Ram" id= "1" hobby="singing"/>} />
    <Route path="/Body" exact element={<Body/>} />
    <Route path="/Footer" exact element={ <Footer/>} />
    <Route path="/login" exact element={ <Login/>} />
    <Route path="/login2" exact element={ <Login2/>} />
    <Route path="/register" exact element={ <Register/>} />
    <Route path="/register2" exact element={ <Register2/>} />
    <Route path="/user" exact element={ <User/>} />
    <Route path="/user2" exact element={ <User2/>} />
    <Route path="/updateuser/:id" exact element={ <Update/>} />
    <Route path="/reducer" exact element={ <Reducer/>} />
    <Route path="/logout" exact element={ <Logout/>} />
    <Route path="/child" exact element={ <ChildA/>} />
    
    


    
    <Route path="/header2" exact element={ <Header2/>} />

    

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

//<Route path="/logout" exact element={ <Logout/>} />
//<Route path="/reducer" exact element={ <Reducer/>} />
