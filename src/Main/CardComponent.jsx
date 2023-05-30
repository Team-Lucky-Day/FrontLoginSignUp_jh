import React, { useEffect } from "react";
import "../CSS/mainheader.css";
import "../CSS/card.css";
const MainContainer = ({
  cardtextheader,
  cardtextbody,
  cardimage,
  cardLink,
}) => {
  return (
    <>
      <div className="card">
        <img src={`/img/${cardimage}`} alt={cardtextheader} />
        <div className="cardText">
          <h1>{cardtextheader}</h1>
          <p>{cardtextbody}</p>
          <button>{cardLink}</button>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
