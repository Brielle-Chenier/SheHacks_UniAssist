import React from 'react';

export class SearchBar extends React.Component {
  render(){
    return(
      <button type = "button" onClick = {this.props.onClick} class = "colorButton">

      </button>

      <TextField id="outlined-basic" label="Enter OUAC Code" variant="outlined" />
    );
  };
}
