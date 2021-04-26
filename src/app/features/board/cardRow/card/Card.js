import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectVisibleIDs,flipCard,selectMatchedIDs} from '../../boardSlice.js';




export const Card = ({ id, contents }) => {
  
  const visibleIDs=useSelector(selectVisibleIDs);
  const dispatch=useDispatch();
  const matchedIDs=useSelector(selectMatchedIDs);
  
  const flipHandler = (id) => {
    
    dispatch(flipCard(id))
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  
  if (visibleIDs.includes(id) || matchedIDs.includes(id) ) {
    cardText = contents;
    click = () => {};
  }

  
  if (matchedIDs.includes(id)){
    cardStyle = 'matched';
  }

  
  if (visibleIDs.length ===2 ){
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
