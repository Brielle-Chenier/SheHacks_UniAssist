import React from 'react';
import ReactDOM from 'react-dom';
//Access-Control-Allow-Origin: *;
import './index.css';
import SearchBar from './searchButtonOne';
import NestedGrid from './grid';




class TitleBlock extends React.Component{
  render() {
    return(
      <blockquote>
        <h1> Welcome to Uni Assist! </h1>

      </blockquote>
    );
  }
};


class SearchResultsContainer extends React.Component{
  render() {
    return(
      <div>
        <p> Search Here! </p>
        <SearchBar />
      </div>
    );
  }
};


ReactDOM.render(
  <TitleBlock />,
  document.getElementById("titleBlock")
);

ReactDOM.render(
  <NestedGrid/>,
  document.getElementById('grid')
);

/*ReactDOM.render (
  <SearchResultsContainer />,
  document.getElementById('search')
);*/
