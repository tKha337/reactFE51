import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux'
// Import thư viện kết nối react và component store
import { connect } from 'react-redux';
class GioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {

            return <tr>
                <td>{spGioHang.maSP}</td>
                <td>{spGioHang.tenSP}</td>
                <td><img src={spGioHang.hinhAnh} width={50} /></td>
                <td>
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGioHang.maSP, true)
                    }}>+</button>
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGioHang.maSP, false)
                    }}>-</button>



                    {spGioHang.soLuong}</td>
                <td>{spGioHang.giaBan}</td>
                <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
                <td><button className="btn btn-danger"
                    onClick={() => {
                        this.props.xoaGioHang(spGioHang.maSP);
                    }}>Xóa</button></td>
            </tr>

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
                    <tbody>{this.renderGioHang()}</tbody>
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

// Tạo ra 1 props là hàm đưa giá trí lên reducer => để set lại state
const mapDispathToProps = (dispathch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log(maSPClick);

            // tạo ra action gửi lên reducer 
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick
            }
            // Dùng hàm dispatch đưa lên renducer
            dispathch(action);
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                maSP,
                tangGiam
            }
            dispathch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(GioHangRedux);
// Kết nối giữa gioHgReduxComponent va redux store
