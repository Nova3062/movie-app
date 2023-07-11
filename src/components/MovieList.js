import React from 'react';
import Movie from './Movie';
import ImageOne from "../images/Forrest_Gump_poster.jpeg"
import ImageTwo from '../images/Mean Girls.jpeg'
import ImageThree from '../images/Dumb.jpeg'
import ImageFour from '../images/passengers.jpeg'

const MovieList = () => {
   const movies = [
      {
         id: 1,
         title: 'Forrest Gump',
         image: ImageOne,
         director: 'Robert Zemeckis',
         writer: ' Based on the Novel by: Winston Groom',
         starring: 'Tom Hanks',
         synopsis:
            "Life is Like a Box of Chocolates.. you never know what you're gonna get.",
         rating: 'PG-13',
         
      },
      {
         id: 2,
         title: 'Mean Girls',
         image: ImageTwo,
         director: 'Christopher Nolan',
         writer: 'Christopher Nolan',
         starring: 'Lindsay Lohan, Rachel McAdams, Amanda Seyfreid',
         synopsis: 'Teenage Cady Heron (Lindsay Lohan) was educated in Africa by her scientist parents. When her family moves to the suburbs of Illinois, Cady finally gets to experience public school and gets a quick primer on the cruel, tacit laws of popularity that divide her fellow students into tightly knit cliques. She unwittingly finds herself in the good graces of an elite group of cool students dubbed "the Plastics," but Cady soon realizes how her shallow group of new friends earned this nickname.',
         rating: 'PG-13',
         
      },
      {
         id: 3,
         title: 'Dumb and Dumber',
         image: ImageThree,
         director: 'Christopher Nolan',
         writer: 'Jonathan Nolan, Christopher Nolan',
         starring: 'Jim Carrey, Jeff Daniels',
         synopsis:
            "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
         rating: 'PG-13',
         
      },
      {
         id: 4,
         title: 'Passengers',
         image: ImageFour,
         director: 'Christopher Nolan',
         writer: 'Jonathan Nolan, Christopher Nolan',
         starring: 'Christ Pratt, Jennifer Lawrence',
         synopsis: 'A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.',
         rating: 'PG-13',
         
      },
   ];

  return (
    <div>
      
      <div className="movieContainers">
      <div className="row">
      {movies.map(movie => (
         <div className='col-4 m-2'>
        <Movie key={movie.id} movie={movie} />
        </div>
      ))}
      </div>  
      </div>
      </div>
   );
};

export default MovieList;
