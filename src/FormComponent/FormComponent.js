import React, { Component } from "react";
import sweet from 'sweetalert2';
export default class FormComponent extends Component {
    state = {
        values: {
            maNguoiDung: "",
            tenNguoiDung: "",
            soDienThoai: "",
            email: "",
        },
        errors: {
            maNguoiDung: "",
            tenNguoiDung: "",
            soDienThoai: "",
            email: "",
        },
    };

    handleChangeInput = (event) => {
        // Lấy ra name và value
        let { name, value } = event.target;
        // lấy ra attribute types(các thuộc tính trên thẻ thêm gọi attribute)
        let types = event.target.getAttribute("types");
        console.log(types);
        // Xử lý value
        let newValues = { ...this.state.values };
        newValues[name] = value;
        // Xử lý erros
        let newErrors = { ...this.state.errors };
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
        this.setState(
            {
                values: newValues,
                errors: newErrors,
            },
            () => {
                console.log(this.state);
            }
        );
    };

    render() {
        return (
            <form className="card" onSubmit={(event) => {
                // Cần sự kiện submit lại trang của browser
                event.preventDefault();
                let valid = true;
                // Duyệt thuộc tính trong đối tượng for in trong ES6
                for (let tenThuocTinh in this.state.values) {
                    if (this.state.values[tenThuocTinh].trim() === '') {
                        valid = false;
                    }
                }
                // Duyệt lỗi => tất cả các lỗi phải = rỗng
                for (let tenThuocTinh in this.state.errors) {
                    if (this.state.errors[tenThuocTinh].trim() !== '') {
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
                                    value={this.state.values.maNguoiDung}
                                    className="form-control"
                                    name="maNguoiDung"
                                    onChange={this.handleChangeInput}
                                />
                                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
                            </div>
                            <div className="form-group">
                                <span>Tên người dùng</span>
                                <input
                                    value={this.state.values.tenNguoiDung}
                                    className="form-control"
                                    name="tenNguoiDung"
                                    onChange={this.handleChangeInput}
                                />

                                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <span>Số điện thoại</span>
                                <input
                                    types="phoneNumber"
                                    value={this.state.values.soDienThoai}
                                    className="form-control"
                                    name="soDienThoai"
                                    onChange={this.handleChangeInput}
                                />

                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <span>Email</span>
                                <input
                                    types="email"
                                    value={this.state.values.email}
                                    className="form-control"
                                    name="email"
                                    onChange={this.handleChangeInput}
                                />

                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-success"> Thêm người dùng</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
