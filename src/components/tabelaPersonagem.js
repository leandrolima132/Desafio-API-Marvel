import React from "react";
import ItensPersonagem from "./itensPersonagem";

const tabelaPersonagem = ({ itens, isLoading }) => {
  return isLoading ? (
    <h1>Aguarde</h1>
  ) : (
    <section className="contents">
      {itens.map((item) => (
        <ItensPersonagem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default tabelaPersonagem;
