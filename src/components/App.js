import React, { Component } from 'react';
import CardList from './Card/CardList';
import SearchBox from './SearchBox/searchbox';
import Scroll from './Scroll/Scroll';
import ErrorBoundry from './ErrorBoundry';

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })

        return !robots.length ?

        <h1>Loadding...</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1> <hr />
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
};
export default App;