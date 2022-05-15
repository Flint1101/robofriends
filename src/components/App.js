import React, { Component } from 'react';
import CardList from './Card/CardList';
import SearchBox from './SearchBox/searchbox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users})});
    }
    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })

        if(this.state.robots.length === 0) {
            return <h1>Loadding...</h1>
        }
        else {
            return(
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1> <hr />
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
        }
    }
};
export default App;