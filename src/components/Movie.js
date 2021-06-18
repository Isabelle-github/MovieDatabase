import React, { Component } from 'react';
import data from '../data/data';
import './Movie.css'
import Sort from './Sort';
import Form from './Form';


class Movie extends Component {
    state = {
        myArr: [...data],
        isSorted: false
    }
    handleSortAscend = () => {
        let tempArr = [...this.state.myArr]
        tempArr.sort((a, b) => Number(a.year) - Number(b.year))
        this.setState({
            myArr: tempArr, isSorted: !this.state.isSorted,
        })
    }
    handleSortDescend = () => {
        let tempArr = [...this.state.myArr]
        tempArr.sort((a, b) => Number(b.year) - Number(a.year))
        this.setState({
            myArr: tempArr, isSorted: !this.state.isSorted,
        })
    }
    handleSortRate = () => {
        let tempArr = [...this.state.myArr]
        tempArr.sort((a, b) => Number(b.rate) - Number(a.rate))
        this.setState({
            myArr: tempArr, isSorted: !this.state.isSorted,
        })
    }
    handleSortA_Z = () => {
        let tempArr = [...this.state.myArr]
        tempArr.sort((a, b) => (a.title > b.title) ? 1 : -1)
        this.setState({
            myArr: tempArr, isSorted: !this.state.isSorted
        })
    }
    handleSortZ_A = () => {
        let tempArr = [...this.state.myArr]
        tempArr.sort((a, b) => (b.title > a.title) ? 1 : -1)
        this.setState({
            myArr: tempArr, isSorted: !this.state.isSorted
        })
    }
    addNew = () => {
        let newMovieInput = {};
        newMovieInput.year = "";
        newMovieInput.title = "";
        newMovieInput.genre = [];
        this.setState({ myArr: [...this.state.myArr, newMovieInput] });
    }
    handleSearch = (e) => {
        console.log(e.target.value)
        if (e.key === "Enter") {
        }
        // https://learningtofly.dev/blog/how-to-search-an-array-of-objects-in-javascript-react
        // const tempArray = () => {
        //     const searchTerm = e.target.value.toLowerCase()
        //     return this.state.myArr.filter(value => {
        //         return value.title.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        //             value.year.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        //             value.director.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        //             value.genre.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        //             value.rate.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
        //             value.duration.toLowerCase().match(new RegExp(searchTerm, 'g'))
        //     })
        // }
        // console.log(tempArray);
        // this.setState({ myArr: tempArray })
    }

    render() {
        console.log(data)
        return (
            <>
                <div>
                    <Sort sortZ_A={this.handleSortZ_A} sortA_Z={this.handleSortA_Z} sortRate={this.handleSortRate} sortDescend={this.handleSortDescend} sortAscend={this.handleSortAscend}></Sort>

                </div>
                <div className="search_Form_Container">
                    <div className="Search">
                        <span className="SearchSpan">
                            Search
                        </span>
                        <input
                            className="SearchInput"
                            type="text"
                            placeholder={"Search Movie"}
                            onChange={(e) => this.handleSearch(e)}
                        />
                    </div>
                    {/* addMovie={this.addNew} */}
                    <Form addMovie={this.addNew}></Form>
                </div>

                <section className="movie-container">
                    {this.state.myArr.map((obj, i) =>
                        <div key={i} className="film">
                            <h3>{obj.title}</h3>
                            <p>{obj.year}</p>
                            <p>Director: {obj.director}</p>
                            <p>{obj.duration}</p>
                            <p>{obj.rate}</p>
                            <div>{obj.genre.map((el, ind) => (<p key={ind}> {el}</p>))}</div>
                        </div>)
                    }
                </section>
            </>
        );
    }
}

export default Movie;