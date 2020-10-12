import React, { Component } from 'react'

export default class Classprops extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Class Props</h3>
                <p>tên: {this.props.hoVaTen}</p>
                <p>lớp: {this.props.lop}</p>
            </div>
        )
    }
}
