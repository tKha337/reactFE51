import React, { Component } from 'react'
import { connect } from 'react-redux'

class KQgame extends Component {
    renderKetQua = () => {
        let tongDiem = this.props.mangXXac.reduce((tongDiemXX, xucXac, index) => {
            return tongDiemXX += xucXac.so;
        }, 0)
        let ketQua = tongDiem > 9 ? 'Tài' : 'Xỉu';

        return <div>
            <span className="display-4 text-dark">{tongDiem}-{ketQua}</span>
        </div>
    }
    render() {

        return (
            <div className=" text-center m-5">
                <div className="display-4">
                    {this.renderKetQua()}
                </div>
                <div className="display-4">
                    Bạn chọn : <span className="text-danger">{this.props.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi : <span className="text-primary">{this.props.soBanChoi}</span>
                </div>
                <div className="text-center">
                    <button onClick={() => {
                        this.props.playGame()
                    }} className="btn btn-success p-2 mt-2">
                        <span style={{ fontSize: 20 }}>PLAY GAME</span>
                    </button>

                </div>
            </div>
        )
    }
}

const mapDispathToProps = dispatch => {
    return {



        playGame: () => {
            let n = 0;
            // setInterval là hảm thưc thi liên tuc theo tg quy dih => thực thi cho dến khi ta gọi clearInterval
            let randomXXac = setInterval(() => {
                const action = {
                    type: 'RANDOM_XUC_XAC',

                }
                dispatch(action);
                n++;
                if (n === 10) {
                    // dừng hàm setInterval
                    clearInterval(randomXXac);
                    const actionKQ = {
                        type: 'END_GAME',
                    }
                    dispatch(actionKQ)
                }
            }, 500)

        }
    }
}

const mapStateToProps = state => {
    return {
        banChon: state.StateBaiTapGameXXac.banChon,
        soBanThang: state.StateBaiTapGameXXac.soBanThang,
        soBanChoi: state.StateBaiTapGameXXac.soBanChoi,
        mangXXac: state.StateBaiTapGameXXac.mangXXac,
    }
}
export default connect(mapStateToProps, mapDispathToProps)(KQgame)