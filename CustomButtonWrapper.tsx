import React from "react";

import CustomButton from "./CustomButton";

export default function CustomButtonWrapper(props){
  return(
    <CustomButton myButtonClickHandler ={props.myButtonClick}/>
  );
}

// export default props => (
//   <CustomButton myButtonClickHandler={props.myButtonClick} />
// );
