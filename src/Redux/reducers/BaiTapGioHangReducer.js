const stateDefault = {
    gioHang: [
        {
            maSP: 1, tenSP: "Iphone", hinhAnh: 'https://picsum.photos/50', soLuong: 1,
            donGia: 100
        }
    ]
}

const BaiTapGioHangReducer = (state = stateDefault, action) => {
    return { ...state }
}
export default BaiTapGioHangReducer
