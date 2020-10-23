import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import { suaNguoiDungAction, xoaNguoiDungAction } from "../Redux/actions/QuanLyNguoiDungAction";
import NewFormComponent from "./NewFormComponent";
class DanhSachNguoiDung extends Component {
    renderNguoiDung = () => {
        return this.props.mangNguoiDung.map((nguoiDung, index) => {
            return (
                <tr key={index}>
                    <td>{nguoiDung.maNguoiDung}</td>
                    <td>{nguoiDung.tenNguoiDung}</td>
                    <td>{nguoiDung.soDienThoai}</td>
                    <td>{nguoiDung.email}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => {
                            // Tạo ra action từ người dùng được click
                            let action = suaNguoiDungAction(nguoiDung);
                            this.props.dispatch(action);
                        }}>Sửa</button>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => {

                                let action = {
                                    type: "XOA_NGUOI_DUNG",
                                    maNguoiDung: nguoiDung.maNguoiDung,
                                };
                                this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung));
                            }}
                        >
                            Xóa
            </button>
                    </td>
                </tr >
            );
        });
    };
    render() {
        return (
            <div className="container">
                {/* <FormComponent/> */}
                <NewFormComponent />
                <table className="table">
                    <thead></thead>
                    <tbody>{this.renderNguoiDung()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
    };
};

export default connect(mapStateToProps)(DanhSachNguoiDung);
