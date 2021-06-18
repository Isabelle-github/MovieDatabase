import React, { Component } from 'react';
// let newMovieInput = new Object()



class Form extends Component {

    handleMovieInput = (e) => {
        console.log('check');
        console.log(e.target.value);
        //add a new obj in the myArr state with empty key values
        // this.props.addMovie;
        //access to the last object in the list and replace their values by the values of the userinput
        //this.props.state.myArr
    }
    render() {
        return (
            <form>
                <h4>Add New Movie</h4>

                <label>
                    Title:
                    <input
                        name="title"
                        type="text"
                    />
                </label>

                <label>
                    Year:
                    <input
                        name="year"
                        type="number"
                        max="2021"
                        min="1800"
                    />
                </label>
                {/* <label>
                    Duration:
                    <input
                        name="password"
                        type="password"
                    />
                </label>
                <label>
                    Director:
                    <input
                        name="password"
                        type="password"
                    />
                </label>
                <label>
                    Rate:
                    <input
                        name="password"
                        type="password"
                    />
                </label> */}
                <label>
                    Genre:
                    <select>
                        <option value="Action">Action</option>
                        <option value="Horor">Horor</option>
                        <option value="Romance">Romance</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </label>
                <button className="form_submit" onClick={(e) => this.handleMovieInput(e)}>Add new Movie</button>
            </form>
        );
    }
}

export default Form;