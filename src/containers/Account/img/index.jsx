import React from 'react';
import logo from '../../../shared/img/logo/Eat@United-logo-white.png';

console.log(logo);

const imgStyle = {
  maxHeight: 180,
  maxWidth: 180,
  margin: 5,
};

function LogoLight() {
  // Import result is the URL of your image
  return <img src={logo} style={imgStyle} alt="Logo" />;
}

export default LogoLight;

