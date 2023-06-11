import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function MyText(props) {
    const [text, setText] = useState("")
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const upperBtn = () => {
        setText(text.toUpperCase());
        props.setAlert("success","Changed to Upper Case!!")
    }
    const lowerBtn = () => {
        setText(text.toLowerCase());
        props.setAlert("success","Changed to Lower Case!!")
    }
    const extraSpaces = () => {
      let eText = text;
      eText = eText.replace(/\s+/g, ' ').trim();
      setText(eText);
      props.setAlert("success","Extra spaces removed!!")
    }    
    const wordCounter = () => {
      if (text ===""){
        return 0;
      }
      else{
        return text.split(" ").length;
      }
    }
    const readTime = () =>{
      let timeReq = Math.floor((wordCounter()*60)/125);
      if (timeReq<60){
        return timeReq+" seconds";
      }
      else{
        let minutes = Math.floor(timeReq/60);
        let seconds = Math.floor(timeReq%60);
        return minutes+" minutes and "+seconds+" seconds"
      }
    }
  return (
    <div className="mt-2" style={{
      color : props.colorInp.backGroundColor === '#FAF8F1'?'black':'white',
      backgroundColor: props.colorInp.backGroundColor
    }}>
    <div className="container">
      <div className="mb-3">
        <h1>Please enter your text here.</h1>
        <h2>{props.inp}</h2>
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{
      color : props.colorInp.backGroundColor === '#FAF8F1'?'black':'white',
      backgroundColor: props.colorInp.backGroundColor
    }}></textarea>
        <button className="btn btn-primary" onClick={upperBtn}>UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={lowerBtn}>LowerCase</button>
        <button className="btn btn-primary" onClick={extraSpaces}>Remove Extra spaces</button>
      </div>
    </div>
    <div className="container">
      <h1>Your Text summary here</h1>
      <p>Your text contains {wordCounter()} words and {text.length} letters</p>
      <p>It will take {readTime()} to read it. </p>
    </div>
    </div>
  )
}
