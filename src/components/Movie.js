import React, { Component } from 'react';
import data from '../data/data';
import './Movie.css'


class Movie extends Component {
    state = {}
    render() {
        console.log(data)
        return (
            <section className="movie-container">
                {data.map((obj, i) =>
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
        );
    }
}

export default Movie;