import { Component } from 'react';

import CardList from './components/card-list/card-list.comp';
import SearchBox from './components/search-box/search-box.comp';

import './App.css';

class App extends Component {

  // Initializing the state
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Lifecycle method that runs once the app is mounted
  componentDidMount(){
    // Fetching the URL, JSONify it and then assigning to the state
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => { return {monsters: users} }
    ));
  }

  // Separate method for handling the search query
  onSearchChange = (event) => {
    // Getting the value of the search field and storing it in the state
    const searchField = event.target.value.toLowerCase();
    this.setState(() => { return { searchField } })
  }

  // Main render method (mounts the app)
  render() {
    
    // Destructuring some variables to access them more easily
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // Creating filteredMonsters variable that holds the filtered original array based on the value of the search field
    const filteredMonsters = monsters.filter(
      (monster) => { return monster.name.toLowerCase().includes(searchField) }
    );

    return (
      <div className="App">

        <h1 class="primary-heading">Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" placeholder="Search monsters" onChangeHandler={onSearchChange}/>
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;













// Change name example

/////////////////////
// CLASS COMPONENT //
/////////////////////

// Our class should extend Component class
// class App extends Component {
//
//   constructor(){
//     super();
//
//     // Initiating State
//     this.state = {
//       name: {firstName: "BroN", lastName: "Wolfs"},
//       company: "VS Inc."
//     };
//
//     // Logging the initial State
//     console.log(this.state);
//   }
//
//   // Render methods that returns the JSX
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.name.firstName} {this.state.name.lastName} is learning React again from the start. He currently works at {this.state.company}</p>
//           <button
//             // Creating the onClick handler and passing the setState method to update the name in the state and have React rerender the page
//             onClick={() => {
//               this.setState( 
//                 // Main function that updates the State
//                 () => {return {name: { firstName: "Big BAD", lastName: "Wolf" }}},
//                 // Callback function that just logs the new State
//                 () => {console.log(this.state)})
//               }
//           }>Change Name</button>
//         </header>
//       </div>
//     );
//   }
// }