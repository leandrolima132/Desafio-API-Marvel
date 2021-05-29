import React, { useState } from "react";

const Pesquisa = ({ search }) => {
  const [texto, setTexto] = useState("");

  const onSearch = (e) => {
    setTexto(e);
    search(e);
  };

  return (
    <section className="search">
      <h1>Busque por seu herói</h1>
      <form>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Digite o nome do personagem"
          autoFocus
          value={texto}
          onChange={(e) => onSearch(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Pesquisa;
