import React,{Component} from 'react';
import './App.css';
import Header from './Header';
import SearchResult, {SearchInput, SearchButton} from './SearchResult';


export default class App extends Component {


constructor(props) {
      super(props)

    this.state = { 

      searchTerm:'',
      lastSearchTerm:''

    }

}
  
  search = (e) => {
    this.setState({ searchTerm : e.target.value })

  }

  searchFor = () => {
    this.setState({ lastSearchTerm : this.state.searchTerm })

  } 

  render() {
    console.log(this.state.lastSearchTerm)
    return (
      <div className = "App">
        <Header/>
        <SearchInput onChange  = {this.search} />
        <SearchButton onClick  = {this.searchFor} />
        <SearchResult searchFor = {this.state.lastSearchTerm}/>
      </div>
    )
  }




}

