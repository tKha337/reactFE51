import React, { Component } from 'react'

export default class SanPham extends Component {

    handleDetail = () => {

        const currenProduct = this.props.product;
        this.props.xuLyChiTiet(currenProduct);
    }
    render() {
        console.log(this.props);
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.product.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{this.props.product.tenSP}</h4>
                    <button className="btn btn-success" onClick={this.handleDetail}>Chi tiết</button>
                    <button className="btn btn-danger"
                        onClick={() => {
                            const currenProduct = this.props.product;
                            this.props.handleCardList(currenProduct)
                        }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
