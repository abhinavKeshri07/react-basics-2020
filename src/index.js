import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

/*
JSX rules
-> return single element
-> div / section / article or fragment
-> use camelCase for html attributes
-> className instead of class
-> close every element
-> formatting


*/

function BookList() {  // you need to capitalize the name. for React to know it is a component. 
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}



ReactDom.render(<BookList />, document.getElementById('root')); // self close is necessary for html tags. 
