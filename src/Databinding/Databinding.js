import React, { Component } from 'react'

export default class Databinding extends Component {
    hocVien = {
        Ma: 1,
        Ten: "Nguyễn lalalla",
        avatar: "https://picsum.photos/200/200"
    }

    renderHocVien = () => {
        return <div className="card text-white bg-primary">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.Ten}</h4>
                <p className="card-text">{this.hocVien.Ma}</p>
            </div>
        </div>

    }





    render() {
        let title = 'CYBERSOFT'
        let imgSrc = 'https://picsum.photos/200/200';

        // binding data là hàm
        const renderImg = () => {
            //  Giá trị hàm muốn render ra giao
            // diện phải trả về chuỗi, số, jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>

        }
        return (
            <div>
                <div id="title">
                    {title}
                </div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>
                <input className="w-25 form-control" value={title} />
                <div className="w-25">
                    {renderImg()}
                </div>
                <h1>Thông tin học viên</h1>
                <ul>
                    <li>Mã học viên: {this.hocVien.Ma}</li>
                    <li>Tên học viên:{this.hocVien.Ten} </li>
                    <li>Hình ảnh:<img src={this.hocVien.avatar} width="200" height="200" /> </li>
                </ul>

            </div>
        )
    }
}
