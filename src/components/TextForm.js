import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText]=useState("");
    const [email, setEmail]=useState("");
    let wc=0;
    let sp=0;                                // doubt why cant i use normal variables 
    let count=true;
    

    const handleOnClick=()=>{   
        let upperText=text.toUpperCase()
        setText(upperText)
    }

    const handleLower=()=>{   
        let lowerText=text.toLocaleLowerCase()
        setText(lowerText)
    }

    const emailExtract=()=>{
        let emails=text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi).join(", ")
        setEmail(emails)  
     
        }
    
    const handleOnChange=(event) =>{    
        setText(event.target.value)
    }

    const wordCount=(tWords)=>{
        for (let t =0;t<tWords.length;t++){
            if (tWords[t]==' ' || tWords[t] == '\n' ||
            tWords[t] == '\t'){
                sp+=1
                count=true
            }            
            else if (count==true){
                count=false
                wc+=1
            }
        }
        return wc      
   }
   
   
  return (
<>
<div className="mb-3"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>{props.heading}</h3>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="5"style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
</div>
<button className='btn btn-primary mx-2'  onClick={handleOnClick} >Convert To UpperCase</button>
<button className='btn btn-primary mx-2'  onClick={handleLower} >Convert To LowerCase</button>
<button className='btn btn-primary mx-2'  onClick={emailExtract} >Extract Email</button>


<div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h4>
       Text Summary
    </h4>
     <p>Words:{wordCount(text)}  Characters:{text.length-sp}</p>    {/* wordCount function used */}
    <p>Time to read: {0.008*wordCount(text)} Minutes</p>
    <h4> Preview </h4>
    <p>{text}</p>
    <h3>Emails Are: {email} </h3>
</div>
</>
  )
  }
