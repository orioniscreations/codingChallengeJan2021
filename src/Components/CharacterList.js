import React from 'react';

const CharacterList = ( {characters, loading} ) => {

  if(loading){
    return <h2>Loading...</h2>
  }



  return (
    <ul className="list-group mb-4">
        {characters.map(characters => (

          
          <div key={characters.id} className="card">
            <ul>
            <li key='name' >Name: {characters.name}</li>
            <li key='gender'>Gender: {characters.gender}</li>
            <li key='culture'>Culture: {characters.culture}</li>
            <li key='born'>Born: {characters.born}</li>
            <li key='died'>Died: {characters.died}</li>
            <li key='titles'>Titles: {characters.titles}</li>
            <li key='aliases'>Aliases: {characters.aliases}</li>
            <li key='books'>Books: {characters.books}</li>
           </ul>
          </div>
        ) )}
    </ul>
  )
}

export default CharacterList