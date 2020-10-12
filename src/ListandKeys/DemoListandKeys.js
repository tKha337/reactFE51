import React, { Component } from "react";

export default class DemoListandKeys extends Component {
    danhSachKhoaHoc = ["Nodejs", "Rectjs", "Vuejs"];

    renderDanhSachKHoaHoc = () => {
        return this.danhSachKhoaHoc.map((khoaHoc, index) => {
            return <li>{khoaHoc}</li>
        })

    };


    // nâng cao
    // renderDanhSachKHoaHoc = () => this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>)
    render() {
        return (
            <div>
                <h2>List and Keys</h2>
                <h3>Danh Sách Khóa học</h3>
                <ul>
                    {this.danhSachKhoaHoc}
                </ul>
            </div>
        );
    }
}
