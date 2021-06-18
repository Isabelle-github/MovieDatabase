import React, { Component } from 'react';
import data from '../data/data';
import './Movie.css'
import Sort from './Sort';


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

    render() {
        console.log(data)
        return (
            <>
                <div>
                    <Sort sortZ_A={this.handleSortZ_A} sortA_Z={this.handleSortA_Z} sortRate={this.handleSortRate} sortDescend={this.handleSortDescend} sortAscend={this.handleSortAscend}></Sort>
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