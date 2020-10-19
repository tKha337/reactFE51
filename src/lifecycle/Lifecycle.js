import React, { Component } from 'react'
import ChileComponents from './ChileComponents'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: {
                index: 1
            }
        };
        console.log('contructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }
    render() {
        return (
            <div>
                <header>Header Component</header>
                <h1>Lifecycle number:{this.state.number}</h1>
                <button onClick={() => {
                    let newNumber = {...this.state.number};
                    newNumber.index += 1;
                    this.setState({
                        number: this.state.number + 1
                    })
                }} > + </button>
                {this.state.number < 3 ?
                    <ChileComponents /> : ""}

            </div >
        )
    }

    componentDidMount() {
        // GỌi api tại didMount
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

}

