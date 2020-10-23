import { XOA_NGUOI_DUNG } from "../constant/QuanLyNguoiDungConst"


export const xoaNguoiDungAction = (maNguoiDung) => {
    return {
        type: XOA_NGUOI_DUNG,
        maNguoiDung
    }
}


// Định nghĩa action chỉnh sửa người dùng
export const suaNguoiDungAction = (nguoiDung) => {
    return {
        type: 'SUA_NGUOI_DUNG',
        nguoiDungChinhSua: nguoiDung
    }
}