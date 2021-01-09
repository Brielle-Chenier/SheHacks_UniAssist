import React from 'react';
import TextField from '@material-ui/core/TextField';

export class SearchBar extends React.Component {
  render(){
    return(
      <div>
        <button type = "button" onClick = {this.props.onClick} class = "colorButton">
        </button>

        <TextField id="outlined-basic" label="Enter OUAC Code" variant="outlined" />
      </div>
    );
  };
}
