import React from 'react';
//import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {

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
        Interview: "", 
        value: ''

        };

      this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

   componentDidMount() {

      fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo")
        .then(response => response.json())
        .then(result => {
            this.setState({
              code: result.Code,
              userAge: result.age
            });

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        )
    }

    handleSubmit = () => {
      alert('A name was submitted: ' + this.state.value);
      console.log("pressed");
      fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo")
        .then(response => response.json())
        .then(result => {
            this.setState({
              code: result.Code,
              userAge: result.age
            });

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        )
          console.log("complete?");
      //event.preventDefault();
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>

              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
              <input type="submit" value="Search" />
          </form>

              <div> Hello {this.state.code} </div>
              <div> {this.state.age} </div>
          </div>
      );
    }
  };

export default SearchBar;