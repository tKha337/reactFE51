
// dàn layout
// Xđ dl thay đổi và lưu state
// Lấy data trong state di biding ra jsx
// render dsach sp
// Xây dựng chức nang xem chi tiết
// xây dựng chức năng thêm vào giỏ hàng
// xây dug chức năng tăng giảm sluong
// xd chuc nang xóa khỏi giỏ hàng
// xd chức nang9 hiển thị tổng số sản phẩm







import React, { Component } from "react";
import danhSachSanPham from "./data.json";
import Modal from "./Modal";
import SanPham from "./SanPham";
export default class BaiTapGioHang extends Component {
    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        cardList: [],

    }
    handleCardList = (sanPham) => {
        // tìm vị trí
        const index = this.state.cardList.findIndex((card) => {
            return card.maSP === sanPham.maSP;
        });
        let cardList = [...this.state.cardList];
        if (index !== -1) {
            // tìm thấy tăng số lượng
            cardList[index].soLuong += 1;

        } else {
            // ko tìm thấy => thêm vào mag
            const newCard = { ...sanPham, soLuong: 1 };
            cardList = [...this.state.cardList, newCard];
        }


        this.setState({
            cardList,
        })
    }

    handleSanPhamChiTiet = (sanPhamChiTiet) => {
        this.setState({
            sanPhamChiTiet,
        })
    }
    renderDanhSachSanPham = () => {
        return danhSachSanPham.map((sanPham, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <SanPham product={sanPham} xuLyChiTiet={this.handleSanPhamChiTiet} handleCardList={this.handleCardList} />

                </div>
            )
        })
    }

    deleteItem = (maSP) => {
        // Xly xoa gio hang
        console.log('maSP', maSP)

        let gioHangUpdate = [...this.state.cardList];
        const indexSP = gioHangUpdate.findIndex(
            spGH => spGH.maSP === maSP);
        if (indexSP !== -1) {
            gioHangUpdate.splice(indexSP, 1);
        }

        this.setState({
            cardList: gioHangUpdate
        })
    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        // tang = true, Giam= false
        console.log('maSP', maSP)
        console.log('tangGiam', tangGiam);
        // set lai state gio hag
        let gioHangUpdate = [...this.state.cardList]

        // Tìm sp trong giỏ hàng
        let spGH = gioHangUpdate.find(sp => sp.maSP === maSP);
        // Nếu tìm thấy sp đó != undefine
        if (spGH) {
            if (tangGiam) {
                spGH.soLuong += 1;
            } else {
                if (spGH.soLuong > 1) {
                    spGH.soLuong -= 1;
                }
            }
        }
        // setState giỏ hàng
        this.setState({
            cardList: gioHangUpdate
        })
    }
    tongSoLuong = () => {
        let tongSoLuong = this.state.cardList.reduce((soLuong, spGH, index) => {
            return soLuong += spGH.soLuong
        }, 0)
        return tongSoLuong;
    }
    tongTien = () => {
        let tongTien = this.state.cardList.reduce((soLuong, spGH, index) => {
            return soLuong += soLuong * spGH.giaBan
        }, 0)
        return tongTien;
    }

    render() {
        return (
            <div>
                <section className="container">
                    <h3 className="title text-center">Bài tập giỏ hàng</h3>
                    <div className="container text-center my-2">
                        <button
                            className="btn btn-danger "
                            data-toggle="modal"
                            data-target="#modelId"
                        >
                            Giỏ hàng ({this.tongSoLuong})
            </button>
                    </div>
                    <div className="container danh-sach-san-pham">
                        <div className="row">
                            {this.renderDanhSachSanPham()}
                        </div>
                    </div>
                    <Modal tongTien={this.tongTien} tongSoLuong={this.tongSoLuong} tangGiamSoLuong={this.tangGiamSoLuong}
                        deleteItem={this.deleteItem} cardList={this.state.cardList} />
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="img-fluid"
                                src={this.state.sanPhamChiTiet.hinhAnh}
                                alt="sdaad" />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.sanPhamChiTiet.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{this.state.sanPhamChiTiet.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{this.state.sanPhamChiTiet.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
