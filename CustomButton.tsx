import React from 'react'

export default function CustomButton(props){

  function LogInfo(){
    alert("2");
    console.log("clicked");
  }

  // return(
  //   <button onClick = {props.myButtonClickHandler,LogInfo}> Click Me </button>
  // );

  return(
    <button onClick = {(event) => { LogInfo(); props.myButtonClickHandler(); }}> Click Me </button>
  );
}