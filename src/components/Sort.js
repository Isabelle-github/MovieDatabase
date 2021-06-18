import React, { Component } from 'react';
import data from '../data/data';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myArr: [...data],
            isSorted: false
        }
    }
    handleSort = () => {
        let tempArr = [...this.state.myArr]
        if (this.state.isSorted) {
            tempArr.sort((a, b) => Number(a.year) - Number(b.year))
            this.setState({
                isSorted: !this.state.isSorted,
                myArr: tempArr
            })
        }
    }

    render() {
        return (
            <button onClick={this.handleSort}>
                {this.props.text}
            </button>
        );
    }
}

export default Sort;