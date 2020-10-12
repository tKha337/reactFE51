import React, { Component } from 'react'

export default class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-left">
                <img style={{ width: '100%', height: 300 }} className="card-img-top" src="https://picsum.photos/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
        )
    }
}
