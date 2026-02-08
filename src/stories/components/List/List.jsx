import React from 'react';

import PropTypes from 'prop-types';

import './list.css';

/** Primary UI component for user interaction */
export const List = ({items}) => {
  return (
   <ol>
    {
      items?.map((item,index)=>{
        return <li key={index}>{item}</li>
      })
    }
   </ol>
  );
};

List.propTypes = {
  /** Is this the principal call to action on the page? */
  items: PropTypes.array,
 
};
