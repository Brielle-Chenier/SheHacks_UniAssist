import React from 'react';
import TextField from '@material-ui/core/TextField';


export class SearchBar extends React.Component {

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
