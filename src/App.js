import React from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className='container-fluid'>
      <h1 className="fst-italic" >Movie Voting and Review App</h1>
      
        
      <MovieList />
      </div>
      
    </div>
  );
}

export default App;
