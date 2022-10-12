import React from "react";
import Header from "./Header";
import Disco from "./Disco";
import Footer from "./Footer";
import discografia from "../discografia";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="slices">
        {discografia.map((disco) => {
          return (
              <Disco
                key={disco.id}
                image={disco.image}
                nome={disco.nome}
                ano={disco.ano}
              />
          )
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default App;