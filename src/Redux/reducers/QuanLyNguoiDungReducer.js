import { QuanLyNguoiDungConst } from '../constant/QuanLyNguoiDungConst'



const stateDefault = {
    mangNguoiDung: [
        { maNguoiDung: 1, tenNguoiDung: 'Nguyễn Văn A', soDienThoai: '09090909', email: 'nguyenvana@gmail.com' },
        { maNguoiDung: 2, tenNguoiDung: 'Nguyễn Văn B', soDienThoai: '09098888', email: 'tranvana@gmail.com' },
    ],
    nguoiDungChinhSua: {
        maNguoiDung: '',
        tenNguoiDung: '',
        soDienThoai: '',
        email: '',
    },

    stateForm: {
        values: {
            maNguoiDung: "",
            tenNguoiDung: "",
            soDienThoai: "",
            email: "",
        },
        errors: {
            maNguoiDung: "",
            tenNguoiDung: "",
            soDienThoai: "",
            email: "",
        },
        maNguoiDungXoa: ''
    }
}
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'XOA_NGUOI_DUNG': {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];

            mangNguoiDungUpdate = mangNguoiDungUpdate.filter(nd => nd.maNguoiDung != action.maNguoiDung);

            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state }
        }
        case 'SUA_NGUOI_DUNG': {
            let nguoiDungDuocClick = {
                ...action.nguoiDungChinhSua
            };
            state.nguoiDungChinhSua = nguoiDungDuocClick
            // Xuly cach1 <newFormComponent></newFormComponent>
            state.stateForm = { ...state.stateForm, values: nguoiDungDuocClick };
            return { ...state };
        }
        case "HANDLE_CHANGE_INPUT": {
            state.stateForm = { ...action.newState };

            return { ...state }
        }
        case 'CAP_NHAT_THONG_TIN_NGUOI_DUNG': {
            let mangNguoiDungUpdate = [...state.mangNguoiDung];

            let index = mangNguoiDungUpdate.findIndex(nd => nd.maNguoiDung ===
                action.nguoiDungUpdate.maNguoiDung);

            mangNguoiDungUpdate[index] = action.nguoiDungUpdate;

            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state };
        }
        case "THEM_NGUOI_DUNG": {
            const mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];

            state.mangNguoiDung = mangNguoiDungUpdate
            return { ...state }
        }
        default: return { ...state }
    }
}