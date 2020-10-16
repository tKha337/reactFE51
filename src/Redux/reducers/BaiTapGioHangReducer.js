const stateDefault = {
    gioHang: [
        {
            maSP: 1, tenSP: "Iphone", hinhAnh: 'https://picsum.photos/50', soLuong: 1,
            donGia: 100
        }
    ]
}

const BaiTapGioHangReducer =
    (state = stateDefault, action) => {
        switch (action.type) {
            case 'THEM_GIO_HANG': {
                let gioHangUpdate = [...state.gioHang];

                const index = gioHangUpdate.findIndex
                    (spGH => spGH.maSP === action.spGH.maSP);

                if (index !== -1) {
                    gioHangUpdate[index].soLuong += 1;
                } else {
                    gioHangUpdate.push(action.spGH)
                }
                // Gán lại state cũ bằng giá tri ms
                state.gioHang = gioHangUpdate;
                return { ...state };
            }
            case 'XOA_GIO_HANG': {
                let gioHangUpdate = [...state.gioHang];

                const index = gioHangUpdate.findIndex(spGH => spGH.maSP ===
                    action.maSPClick);

                if (index !== -1) {
                    gioHangUpdate.splice(index, 1);
                }
                // cập nhật lại state.gioHang
                state.gioHang = gioHangUpdate;
                return { ...state };
            }
            case 'TANG_GIAM_SL': {
                let gioHangUpdate = [...state.gioHang];

                let spGHang = gioHangUpdate.find(sp => sp.maSP === action.maSP);
                if (spGHang) {
                    if (action.tangGiam) {
                        spGHang.soLuong += 1;
                    } else {
                        if (spGHang.soLuong > 1) {
                            spGHang.soLuong -= 1;
                        }
                    }
                }
                state.gioHang = gioHangUpdate;
                return { ...state }
            }


        }

        return { ...state }
    }
export default BaiTapGioHangReducer
