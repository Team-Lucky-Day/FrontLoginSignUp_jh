import React from "react";
import "../CSS/footer.css";
const FooterContentGoLink = ({ link, href }) => {
  return (
    <>
      <ul className="ul">
        <li className="li">
          <a href={href}>{link}</a>
        </li>
      </ul>
    </>
  );
};

export default FooterContentGoLink;
