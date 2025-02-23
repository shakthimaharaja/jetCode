import React from "react";

const LogoComponent = ({ imageSrc, altText, className }) => {
    return (
      <img src={imageSrc} alt={altText} className={className} />
    );
  };
  
  export default LogoComponent;