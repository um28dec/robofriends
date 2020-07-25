import React from 'react';

const Card = ({name, email ,id}) => {
	return (	
     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
       <img width="200" height= "200" alt ='robots' src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
     </div>     
	);
}

export default Card;