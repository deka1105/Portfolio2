import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Shubham A. D."
  }
  render(){
    return('')}
}

ReactDOM.render(

  <React.StrictMode>
    <Doc /> <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
