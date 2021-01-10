import React from 'react';
//import TextField from '@material-ui/core/TextField';
import careltonPic from './Uni Pictures/Carleton.png';
import waterlooPic from './Uni Pictures/Waterloo.png';
import macPic from './Uni Pictures/Mac.png';

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
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

   componentDidMount() {

      fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo")
        .then(response => response.json())
        .then(result => {
            this.setState({
              value: result.Code,
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

    handleSubmit (event){
      alert('Code Submitted: ' + this.state.value);
      this.setState({code:this.state.value})
    /*  fetch("https://northamerica-northeast1-shehacks21.cloudfunctions.net/getSchoolInfo")
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
      */
      event.preventDefault();
    }

    render() {

      let picture
      if (this.state.school === "McMaster"){
        picture = macPic
      }else{
        picture = waterlooPic
      }

      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>

              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
              <input type="submit" value="Search" />
          </form>

          <img
            src = {waterlooPic}
            alt = 'Waterloo'
            class = 'schoolPic'
            />
          <div> OUAC Code {this.state.code} </div>
          <div> Program: {this.state.program} </div>
          <div> School: {this.state.school} </div>
          <div> Faculty: {this.state.faculty} </div>
          <div> Years: {this.state.years} </div>
          <div> Coop: {this.state.coop} </div>
          <div> Tuition: {this.state.tuition} </div>
          <div> Requirements: {this.state.requirements} </div>
          <div> Low Average: {this.state.lowAvg} </div>
          <div> Competitive Average: {this.state.compAvg}</div>
          <div> Supplemental: {this.state.suppApp}</div>
          <div> Interview: {this.state.interview}</div>
        </div>
      );
    }
  };

export default SearchBar;
