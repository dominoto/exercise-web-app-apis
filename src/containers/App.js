import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            people: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        let allData = [];
        let currentPage = 0;
        while (currentPage <= 8) {
            currentPage++;
            fetch(`https://swapi.py4e.com/api/people/?page=${currentPage}`)
                .then(response => response.json())
                .then(data => {
                    allData.push(...data.results)
                    this.setState({ people: allData });
                });
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { people, searchfield } = this.state;
        const filteredPeople = people.filter(person => {
            return person.name.toLowerCase().includes(searchfield.toLowerCase()) || person.gender.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !people.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f2">Characters from Star Wars movies</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList people={filteredPeople} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;