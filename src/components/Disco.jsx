import React from "react";

function Disco(props) {
  return (
    <div className="disco">
      <img src={props.image} alt="disco-avatar" />
      <div className="infos">
        <h2> {props.nome} </h2>
        <h3> {props.ano} </h3>
      </div>
    </div>
  )
}
export default Disco;