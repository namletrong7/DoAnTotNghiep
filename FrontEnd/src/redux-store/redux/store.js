import {applyMiddleware, createStore} from 'redux';
import { thunk } from 'redux-thunk'
import rootReducer from "../reducer/rootReducer";
import reducerEmployee from "../reducer/reducerEmployee";
import reducerDepartment from "../reducer/reducerDepartment";
import reducerJobtitle from "../reducer/reducerJobtitle";
import reducerAuth from "../reducer/reducerAuth";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );
//
// export default store;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['reducerAuth','reducerDepartment','reducerJobtitle','reducerAuth'] // chỉ định các reducer bạn muốn persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
