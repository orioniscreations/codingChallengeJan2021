import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './Components/CharacterList';
import Pagination from './Components/Pagination';
import Title from './Components/Title';
import Footer from './Components/Footer';

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=2138')
      setCharacters(res.data);
      setLoading(false);
    }
    fetchCharacters();
  }, []);

  // Get current Characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacter = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)

// Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div className="container mt-5">

      <Title/>      
      <CharacterList characters={currentCharacter} loading={loading} />
      <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate} />
      <Footer/>
    </div>

  );
}


export default App;
