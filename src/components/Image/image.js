import React from "react";


function ImageCard(props) {
    
  return (
    <div className="myImage">
      <div className="img-container">
        <img 
            alt= {props.name}
            src= {props.image}
        />
      </div>
      {/* <span className="remove" onClick={() => handleRemove(id)}>𝘅</span> */}
      </div>
    //   we won't be using this code specfically but I need to make a onClick function
    //  to will remove the image and possibly create another image.
      
    
  );
}

export default ImageCard;
