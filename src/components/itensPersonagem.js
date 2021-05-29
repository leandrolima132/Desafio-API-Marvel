import React from "react";

const itensPersonagem = ({ item }) => {
  return (
    <div className="content">
      <div className="content-front">
        <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt="/" />
        <div className="content-inner">
          <div className="content-back">
            <h1 className="content-text">{item.name}</h1>
            <ul>
              <li>
                <strong>Name:</strong> {item.name}
              </li>
              <li>
                <strong>Description:</strong> {item.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itensPersonagem;
