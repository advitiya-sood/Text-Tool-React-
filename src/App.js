import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';


function App() {

const [mode , changeMode]=useState('light')
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

  const toggleModeT=()=>{
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


  return (
    <>
    <Navbar title= "First-App" about="About"  mode={mode} toggleMode={toggleModeT}  capital={capital}    />
    <Alert   alt={alert} capital={capital} />

    <div className="container my-3">

    {/* <About/> */}
      
    <TextForm heading ="Enter your text below" mode={mode}/>

    </div>

    </>
      );
    }

export default App;
