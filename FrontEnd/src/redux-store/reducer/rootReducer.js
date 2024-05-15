import { combineReducers } from 'redux';
import reducerEmployee from "./reducerEmployee";
import reducerCart from "./reducerCart";
import reducerUserInformation from "./reducerUserInformation";
import reducerProducts from "./reducerProducts";

const rootReducer = combineReducers({
    reducerEmployee: reducerEmployee,
    reducerCart: reducerCart,
    reducerProducts: reducerProducts,
    reducerUserInformation: reducerUserInformation,
});

export default rootReducer;
