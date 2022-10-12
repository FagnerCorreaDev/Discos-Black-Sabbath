import React from "react";

const ano = new Date().getFullYear();

function Footer(){
  return(
    <footer>
      <p> Copyright &copy;{ano} </p>
    </footer>
  )
}
export default Footer;