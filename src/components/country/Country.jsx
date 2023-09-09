
import React, { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountry}) => {
  // console.log(country);
  const {name, flags, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleClick =()=>{
    setVisited(!visited);
  }
  return (
    
      <div className={`country text-center ${visited?'visited':''}`}>
      <h3 className='py-5 text-2xl font-bold text-black'>Country Name: <span style={{color:visited?'red':'green'}}>{name?.common}</span> </h3>
      <img className='inline w-[300px]' src={flags?.png}  alt="" />  
      <p className='py-5'>Code: {cca3}</p>  
      <button onClick={()=>handleVisitedCountry(country)} className='my-5 btn'>Mark Visited</button>
      <button onClick={handleClick} className='my-5 btn'>{visited?'Visited':'Not Visited'}</button> 
      {
        // visited && 'visited!!!';
        // visited?'Already Visited': 'Not Yet!'
      } 
      </div>
    
  );
};

export default Country;
























// import React from 'react';

// const Country = ({country}) => {
//   const {name} = country;
//   // console.log(country.name.common);
//   return (
//     <div>
//       <h3>Country Name: {name?.common} </h3>
      
//     </div>
//   );
// };

// export default Country;