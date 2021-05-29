import React, { useEffect, useState } from 'react';
import axios from 'axios'
import "./App.css";
import Header from './components/Header'
import TabelaPersonagem from './components/tabelaPersonagem'
import Pesquisa from './components/pesquisa' 
import Footer from './components/footer'

const hash = "849ceabcf92b53df9c194372ba3c10fa"

function App() {
  const[itens, setItens] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const[query, setQuery] = useState('')

useEffect(() => {
  
  const fetch = async () => {
    if(query === ''){
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2d5169874b8c8e57434c9d9e2789ac0f&hash=${hash}`)
      console.log(result.data.data.results)
      setItens(result.data.data.results)
      setLoading(false)
    }
    const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=2d5169874b8c8e57434c9d9e2789ac0f&hash=${hash}`)
    console.log(result.data.data.results)
    setItens(result.data.data.results)
    setLoading(false)
    }

    fetch()
},[query])

  return (
    
    <div >
      <Header/>
      
      <div className="container">
      <Pesquisa search={(e) => setQuery(e)}/>
      <TabelaPersonagem itens={itens} isLoading={isLoading}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
//