// File khai báo tất cả các state ug dug
import { combineReducers } from 'redux'
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXXReducer from './BaiTapGameXXReducer'

// state tog các ug dug
export const rootReducer = combineReducers({
    // Nơi khai báo các state theo tug nghiep vụ
    StateBaiTapGioHang: BaiTapGioHangReducer,
    StateBaiTapGameXXac: BaiTapGameXXReducer
})