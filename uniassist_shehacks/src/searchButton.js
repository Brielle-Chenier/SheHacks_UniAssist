import React from 'react';
import TextField from '@material-ui/core/TextField';


export class SearchBar extends React.Component {
<<<<<<< HEAD
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
=======
  componentDidMount() {

    fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo")
      .then(response => response.json())
      .then(result => {
          this.setState({
            userName: result.name,
            userAge: result.age
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      )
  }

    constructor(props) {
      super(props);
      this.state = {
        code: "",
        faculty: "",
        program: "",
        school: "",
        years: "",
        coop: "",
        tuition: "",
        Requirements: "",
        LowAvg: "",
        CompAvg: "",
        SuppApp: "",
        Interview: ""

        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>

            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
      );
    }
  }
>>>>>>> 7d1360ba25df4415e0aeb6dda0593346fa104868
