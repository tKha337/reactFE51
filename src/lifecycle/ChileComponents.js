import React, { Component, PureComponent } from 'react'

export default class ChileComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(('contructors child'));
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');

    }

    render() {
        return (
            <div>
                <h3>Child number:{this.props.number}</h3>
                789
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount child');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate child');
    }
    componentWillUnmount() {
        // life cycle chạy trc khi component mất khỏi giao diện
        console.log('componentWillUnmount');
    }
}
