import React, { Component } from 'react'
import DanhSachXXac from './DanhSachXXac'
import KQgame from './KQgame'
import style from './BaiTapGameXX.module.css'

export default class BaiTapGameXXac extends Component {
    render() {
        return (
            <div>
                <div className={`${style.fontGameXXac}`}
                    style={{
                        backgroundImage: 'url(./img/BTGAMEXX/bgGame.png)',
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        top: 0,
                        left: 0
                    }}>
                    <h1 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC
                    </h1>
                    <DanhSachXXac />
                    <KQgame />
                </div>

            </div>
        )
    }
}
