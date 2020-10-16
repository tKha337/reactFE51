import React, { Component } from 'react'
import { connect } from "react-redux";
class DanhSachXXac extends Component {
    renderXXac = () => {
        return this.props.mangXXac.map((xucXac, index) => {
            return <img key={index} className="m-5" src={xucXac.hinhAnh} style={{ width: 50 }} />
        })
    }
    render() {

        return (

            <div className="row mt-5 text-center">
                <div className="col-3">
                    <button className="p-5 btn btn-success"><span className="display-4" onClick={() => {
                        this.props.datCuoc('Tài');
                    }}>Tài</span></button>
                </div>
                <div className="col-6">
                    {this.renderXXac()}
                    {/* <div className="row">
                        <img className="m-5"
                            src="./img/BTGAMEXX/1.png"
                            style={{ width: 50 }} />

                        <img className="m-5"
                            src="./img/BTGAMEXX/1.png"
                            style={{ width: 50 }} />
                        <img className="m-5"
                            src="./img/BTGAMEXX/1.png"
                            style={{ width: 50 }} />


                    </div> */}


                </div>
                <div className="col-3">
                    <button className="p-5 btn btn-danger"><span className="display-4" onClick={() => {
                        this.props.datCuoc('Xỉu');
                    }}>Xỉu</span></button>
                </div>
            </div >
        )
    }
}

const mapDispathToProps = dispatch => {
    return {
        datCuoc: (taiXiu) => {
            const action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        mangXXac: state.StateBaiTapGameXXac.mangXXac,
    }
}



export default connect(mapStateToProps, mapDispathToProps)(DanhSachXXac)




