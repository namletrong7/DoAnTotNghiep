import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import reducerAuth from "./auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import reducerTask from "./task";
import reducerUser from "./user";
import reducerProject from "./project";





//NamLTc: cấu hình redux persist
const persistConfig = {
   key: 'root', // tên của kho lưu trữ, có thể là bất kỳ chuỗi nào
   storage: AsyncStorage, // sử dụng AsyncStorage cho lưu trữ local
   whitelist: ['auth','task','user','project'], // reducer mà bạn muốn lưu trữ
};
const persistedReducer = persistReducer(persistConfig, combineReducers({
   auth: reducerAuth,
   task: reducerTask,
   user: reducerUser,
   project:reducerProject,
   // Thêm các reducers khác nếu cần
}));


//NamLTc: tạo store cho toàn bộ ứng dụng
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);
const persistor = persistStore(store);
export { store, persistor };
