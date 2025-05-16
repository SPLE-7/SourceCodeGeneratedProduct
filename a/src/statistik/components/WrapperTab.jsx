/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useContext } from 'react';
import { Tab } from '@/commons/components'
import ListGenre from '../containers/ListGenre.jsx'
import ListAuthor from '../containers/ListAuthor.jsx'


const WrapperTab = () => {
  
  return (
    <Tab
      tabs={[
        {
          id: 'ListGenre',
          name: 'ListGenre',
          children: <ListGenre />
        }
    ,
        {
          id: 'ListAuthor',
          name: 'ListAuthor',
          children: <ListAuthor />
        }
      ]}
      id='0'
    />
  );
};

export default WrapperTab;
