import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux'
// Import thư viện kết nối react và component store
import { connect } from 'react-redux';
class GioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return <SanPhamGHRedux spGioHang={spGioHang} />
        })

    }
    render() {
        console.log('props', this.props)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

// Lấy state từ redux store biến thành props của component
// 
const mapStateToProps = (state) => {
    return {
        gioHang: state.StateBaiTapGioHang.gioHang
    }
}

export default connect(mapStateToProps)(GioHangRedux);
// Kết nối giữa gioHgReduxComponent va redux store
