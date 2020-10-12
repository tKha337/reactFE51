import React, { Component } from 'react'
import Classprops from './Classprops'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    state = {
        ten: "KHA",
        lop: 51,
    }
    render() {
        return (
            <div>
                <h2>Props</h2>
                <FunctionProps
                    // Cách truyền props trong reacts
                    hoVaTen={this.state.ten}
                    lop={this.state.lop}
                />
                <Classprops
                    hoVaTen={this.state.ten}
                    lop={this.state.lop}
                />
            </div>
        )
    }
}
