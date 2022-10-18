import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

const [mode , changeMode]=useState('light')      // used to store mode eg Dark, light
const [alert , changeAlert]=useState(null)


const capital=(word)=>{                                //function to capitalize the first letter of navbar text
  const small= word.toLowerCase()
  return small.charAt(0).toUpperCase()+small.slice(1)
}

  const  setAlertMode=(message,type)=>{
    changeAlert({
      msg: message,
      type : type
    })

    setTimeout(() => {
     changeAlert(null);
    }, 2000);
    }

  const toggleModeT=()=>{                                    //used to change the mode 
    if (mode === 'light'){
     changeMode('dark');
     document.body.style.backgroundColor='#151931'
     setAlertMode("DarkMode set","success")                   // calling function isntead of usestate variable
    } 
    else{
     changeMode('light');
     document.body.style.backgroundColor='white'
     setAlertMode("LightMode set","success") 
    } }



    let theme=(clr)=>{

      if (clr === 'green' ){
        // changeMode('green');
        document.body.style.backgroundColor='green'                    
       }
  
       else if (clr === 'red' ){
        // changeMode('red');
        document.body.style.backgroundColor='red'     
       } 
  
       else {
        // changeMode('yellow');
        document.body.style.backgroundColor='yellow'
       }     
    }

  return (
    <>
    <Router>

    <Navbar title= "First-App"   mode={mode} toggleMode={toggleModeT}  capital={capital} theme={theme} />  
    <Alert   alt={alert} capital={capital} />

    <div className="container my-3">
    <Routes>
    <Route  exact path="/about" element={<About/>} />                                      
    <Route  exact path ='/' element={<TextForm   mode={mode} />}/>                         
    </Routes>
    </div>

    </Router>
    

    </>
      );
    }

export default App;
