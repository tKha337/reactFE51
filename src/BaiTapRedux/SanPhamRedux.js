import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-left">
                <img style={{ width: '100%', height: 300 }} className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button onClick={() => {
                        this.props.themGioHang(sanPham);
                    }}

                        className="btn btn-danger">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            console.log(sanPhamClick);
            let spGH = { ...sanPhamClick, soLuong: 1 };

            let action = {
                type: 'THEM_GIO_HANG',
                // Giá trị gửi đi payload
                spGH: spGH
            }

            // Dug hàm dispath mà redux cung cấp đưa action lên reducer
            dispatch(action);
        }
    }
}
// Tham số 1 hàm connect là 1 hàm (callbackFunction): lấy giá trị từ reducer về
// Tham số 2 hàm connect là 1 hàm(callbackFunction): đứa các giá trị lên reducer
export default connect(mapStateToProps, mapDispathToProps)(SanPhamRedux);