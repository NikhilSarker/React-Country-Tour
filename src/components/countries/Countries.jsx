import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Countries = () => {
  const [countries, setCountries]= useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country)=>{
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
    
    console.log(country);
    
  }



  useEffect(() => {
    try {
      const fetchData = async () => {
        const URL = `https://restcountries.com/v3.1/all`;
        const response = await fetch(URL);
        const countries = await response.json();
        // console.log(countries);
        setCountries(countries);

      }
      
    fetchData();
      
    } catch (error) {
      console.log(error);
      
    }

  }, []);
  return (
    <div >
      <h3>Country Name:{countries.length} </h3>
      <div>
        <ul>
          <h4>Visited Country: {visitedCountry.length}</h4>
        </ul>
      </div>
     <div className='grid grid-cols-3 gap-4'>
     {
        countries && countries.map((country) => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry}></Country>)
      }
     </div>
      
    </div>
  );
};

export default Countries;




























// mport { useEffect } from "react";
// import { useState } from "react";
// import Country from "../country/Country";


// const Countries = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//      try {
//       const URL = `https://restcountries.com/v3.1/all`;
//       const response = await fetch(URL);
//       const countries = await response.json();
//       // console.log(countries);
//       setCountries(countries)
      
      
//      } catch (error) {
//       console.log(error);
      
//      }

//     };
    
//     fetchData();


//   }, [])
  

//   return (
//     <div>
//       <h3>Countries:{countries.length}</h3>
      
//       {
//         countries && countries.map((country)=> <Country country={country} key={country.cca3}></Country>)
//       }
//     </div>
//   );
// };

// export default Countries;