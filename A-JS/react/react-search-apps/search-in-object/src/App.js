import React,{Component} from 'react';
import './App.css';
import Header from './Header';
import SearchResult from './SearchResult';

export  function SearchInput( props ) {
  return (
      <form onSubmit = {props.submit}>
          <input />
          <button> Search </button>
      </form>
  )
}

export default class App extends Component {

  submit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SearchInput submit = {(e) => this.submit(e)}/>
        <table className="SearchResult">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
              </tr>
          </thead>
          <tbody /* key = {index} */>
            <SearchResult/>
          </tbody>
        </table>
      </div>
    )
  }
}

