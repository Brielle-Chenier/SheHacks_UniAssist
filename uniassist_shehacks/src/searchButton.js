import React from 'react';


export class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

<<<<<<< Updated upstream
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
=======
   componentDidMount() {

      fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo-1")
        .then(response => response.json())
        .then(result => {
            this.setState({
              code: result.Code,
              faculty: result.Faculty,
              program: result.Program,
              school: result.School,
              years: result.Years,
              coop: result.Coop,
              tuition: result.Tuition,
              requirements: result.Requirements,
              lowAvg: result.LowAvg,
              compAvg: result.CompAvg,
              suppApp: result.SuppApp,
              interview: result.Interview
            });

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        )
    }

    handleSubmit (event) {
     alert('Code Submitted: ' + this.state.value);
     this.setState({code: this.state.value});

    /*  fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo")
        .then(response => response.json())
        .then(result => {
            this.setState({
              code: result.Code,
              age: result.age
            });

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
        )
      */
>>>>>>> Stashed changes
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
