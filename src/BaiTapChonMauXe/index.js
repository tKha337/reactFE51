// Các bước thưc hiện
// 1 : Dàn layout
// 2 : Xđ data thay đổi và lưu vào trong state
// 3: Lấy data trong state di binding ra jsx
// 4: bắt skien click cho các nút chọn màu
// 5 : cập nhật lại giá trị trong state


import React, { Component } from "react";


export default class BaiTapChonMauXe extends Component {
    state = {
        imgCar: "./img2/car/products/red-car.jpg",
    };
    handleChangeColor = (imgCar1) => {
        console.log(imgCar1);
        this.setState({
            // key của state: tham số của phương thức
            imgCar: imgCar1,
        })
    }

    render() {
        return (
            <div>
                <section className="show-room">
                    <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
                    <div className="container">
                        <div className="chose__color d-flex justify-content-around">
                            <button onClick={() => { this.handleChangeColor("./img2/car/products/black-car.jpg") }} className="btn">
                                <img
                                    src="./img2/car/icons/icon-black.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                            <button onClick={() => { this.handleChangeColor("./img2/car/products/red-car.jpg") }} className="btn">
                                <img
                                    src="./img2/car/icons/icon-red.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                            <button onClick={() => { this.handleChangeColor("./img2/car/products/silver-car.jpg") }} className="btn">
                                <img
                                    src="./img2/car/icons/icon-silver.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                            <button onClick={() => { this.handleChangeColor("./img2/car/products/steel-car.jpg") }} className="btn">
                                <img
                                    src="./img2/car/icons/icon-steel.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                        </div>
                        <div className="car mt-2">
                            <img
                                className="img-thumbnail"
                                src={this.state.imgCar}
                                alt="hinh"
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
