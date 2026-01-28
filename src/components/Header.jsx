import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Todos os produtos sobre tecnologia que você poderia imaginar!</h2>
          <p>
            Na BitBuy você encontra os melhores preços para produtos com a
            melhor qualidade do mercado.
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/tecnologias.webp" alt="Products" />
        </div>
      </div>
    </header>
  );
}
