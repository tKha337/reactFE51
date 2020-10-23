import React, { Component } from "react";
import sweet from 'sweetalert2';
import { connect } from 'react-redux'
import { xoaNguoiDungAction } from "../Redux/actions/QuanLyNguoiDungAction";
class NewFormComponent extends Component {


    handleChangeInput = (event) => {
        // Lấy ra name và value
        let { name, value } = event.target;
        // lấy ra attribute types(các thuộc tính trên thẻ thêm gọi attribute)
        let types = event.target.getAttribute("types");
        console.log(types);
        // Xử lý value
        let newValues = { ...this.props.stateForm.values };
        newValues[name] = value;
        // Xử lý erros
        let newErrors = { ...this.props.stateForm.errors };
        newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

        // Validation các trường đặc biệt
        if (types === "phoneNumber") {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "Dữ liệu phải là số!";
            }
        }
        if (types === "email") {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value.trim())) {
                newErrors[name] = "Email không hợp lệ!";
            }
        }
        // this.setState(
        //     {
        //         values: newValues,
        //         errors: newErrors,
        //     },
        //     () => {
        //         console.log(this.props.stateForm);
        //     }
        // );


        let action = {
            type: 'HANDLE_CHANGE_INPUT',
            newState: {
                values: newValues,
                errors: newErrors
            }
        }
        this.props.dispatch(action)
    };
    // Giải phap1 sử dụng lifecycle componentWllReceiveprops
    // Hàm này chạy khi props thay đổi trc khi render 


    render() {
        // Lấy giá trị từ reducer về render lên các value
        let { maNguoiDung,
            tenNguoiDung,
            soDienThoai,
            email }
            = this.props.stateForm.values;
        return (
            <form className="card" onSubmit={(event) => {
                // Cần sự kiện submit lại trang của browser
                event.preventDefault();
                let valid = true;
                // Duyệt thuộc tính trong đối tượng for in trong ES6
                for (let tenThuocTinh in this.props.stateForm.values) {
                    if (this.props.stateForm.values[tenThuocTinh] === '') {
                        valid = false;
                    }
                }
                // Duyệt lỗi => tất cả các lỗi phải = rỗng
                for (let tenThuocTinh in this.props.stateForm.errors) {
                    if (this.props.stateForm.errors[tenThuocTinh] !== '') {
                        valid = false;
                    }
                }

                if (!valid) {

                    sweet.fire('Thông báo', 'Dữ liệu không hợp lệ!', 'error');
                    // Chặn skien submit
                    return;
                }
                sweet.fire('Thông báo', 'Thêm người dùng thành công!', 'success');
                console.log('submit');

                let action = {
                    type: 'THEM_NGUOI_DUNG',
                    nguoiDung: this.props.stateForm.values
                }
                this.props.dispatch(action);
            }}>
                <div>
                    <div class="card-header bg-dark text-light font-weight-boid">
                        <h4 class="card-title">
                            <span>THÔNG TIN NGƯỜI DÙNG</span>
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <span>Mã người dùng</span>
                                <input
                                    value={maNguoiDung}
                                    className="form-control"
                                    name="maNguoiDung"
                                    onChange={this.handleChangeInput}
                                />
                                <p className="text-danger">{this.props.stateForm.errors.maNguoiDung}</p>
                            </div>
                            <div className="form-group">
                                <span>Tên người dùng</span>
                                <input
                                    value={tenNguoiDung}
                                    className="form-control"
                                    name="tenNguoiDung"
                                    onChange={this.handleChangeInput}
                                />

                                <p className="text-danger">{this.props.stateForm.errors.tenNguoiDung}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <span>Số điện thoại</span>
                                <input
                                    types="phoneNumber"
                                    value={soDienThoai}
                                    className="form-control"
                                    name="soDienThoai"
                                    onChange={this.handleChangeInput}
                                />

                                <p className="text-danger">{this.props.stateForm.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <span>Email</span>
                                <input
                                    types="email"
                                    value={email}
                                    className="form-control"
                                    name="email"
                                    onChange={this.handleChangeInput}
                                />

                                <p className="text-danger">{this.props.stateForm.errors.email}</p>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-success"> Thêm người dùng</button>
                            <button type="button" className='btn btn-primary ml-2' onClick={() => {
                                let action = {
                                    type: 'CAP_NHAT_THONG_TIN_NGUOI_DUNG',
                                    nguoiDungUpdate: this.props.stateForm.values
                                }
                                this.props.dispatch(action);
                            }}>Cập nhật thông tin người dùng</button>
                        </div>
                        <div>
                            <input name="maNguoiDungXoa " placeholder="nhập vào mã người dùng cần xóa"
                                className="form-control"
                                onChange={(e) => {
                                    this.setState({
                                        maNguoiDungXoa: e.target.value
                                    })
                                }} />
                            <button type='button' className="btn btn-danger"
                                onClick={() => {
                                    let action = xoaNguoiDungAction
                                        (this.props.stateForm.maNguoiDungXoa)
                                    this.props.dispatch(action);
                                }

                                }>Xóa</button>
                        </div>
                    </div>
                </div>
            </form >
        );
    }
}


const mapStateToProps = state => {
    return {
        nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
        stateForm: state.QuanLyNguoiDungReducer.stateForm,
    }
}

export default connect(mapStateToProps)(NewFormComponent)
