import React from 'react';
import ReactDOM from 'react-dom';
//Access-Control-Allow-Origin: *;
import './index.css';

//USE IMAGE ON CLICK!!! (EVENT LISTENERS)
//USE LISTS of the colors and keys? and a component class
//Use logic in a render function

class TitleBlock extends React.Component{
  render() {
    return(
      <blockquote>
        <h1> Welcome to Uni Assist</h1>

      </blockquote>
    );
  }
};

class SchoolData extends React.Component{

};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'blank',
      userAge: '0'
    };
  }

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

  render() {
    return (
      <div>
        <div> {this.state.userName} </div>
        <div> {this.state.userAge} </div>
      </div>
    )
}
}



ReactDOM.render(
  <MyComponent/>,
  document.getElementById('test')
);
