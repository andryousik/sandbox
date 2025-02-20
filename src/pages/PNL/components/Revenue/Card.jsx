import React from 'react';
import PropTypes from "prop-types";


const  Card= ({image, title, discription}) => {

  return ( 
   
    <div className='square'>
        <img className='card-img' src={image} alt={title}></img>
            <div className='card-text'>
                <h1 className='card-title'>{title}</h1>
                <p className='card-discription'>{discription}</p>
            </div>
    </div>

   );
};
Card.propTypes =
{ 
  image: PropTypes.string,
  title: PropTypes.string,
  discription: PropTypes.string,
}

export default Card;