const stateDefault = {

    banChon: 'Tài',
    mangXXac: [
        { so: 1, hinhAnh: "./img/BTGAMEXX/1.png" },
        { so: 1, hinhAnh: "./img/BTGAMEXX/1.png" },
        { so: 1, hinhAnh: "./img/BTGAMEXX/1.png" },
    ],
    soBanThang: 0,
    soBanChoi: 0,

}


const BaiTapGameXXReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.taiXiu;
            return { ...state };
        }
        case 'RANDOM_XUC_XAC': {
            let mangXucXacNgauNhien = [];
            for (var i = 0; i < 3; i++) {
                const soNgauNhien = Math.floor(Math.random() * 6) + 1;
                const xucXacNgauNhien = {
                    so: soNgauNhien,
                    hinhAnh: `./img/BTGAMEXX/${soNgauNhien}.png`
                }
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXXac = mangXucXacNgauNhien;
            return { ...state };
        }
        case 'END_GAME': {
            console.log(action);
            // TÍnh tog điểm các số trog mảng xxac
            let tongDiem = state.mangXXac.reduce((tongDiemXXac, xucXac, index) => {
                return tongDiemXXac += xucXac.so;
            }, 0);

            if ((tongDiem > 9 && state.banChon === 'Tài') ||
                (tongDiem <= 9 && state.banChon === 'Xỉu')) {
                state.soBanThang += 1;
            }

            state.soBanChoi += 1;
            return { ...state }
        }
    }
    return { ...state }
}
export default BaiTapGameXXReducer