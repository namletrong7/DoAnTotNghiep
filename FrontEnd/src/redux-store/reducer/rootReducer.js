import { combineReducers } from 'redux';
import reducerEmployee from "./reducerEmployee";

import reducerDepartment from "./reducerDepartment";
import reducerJobtitle from "./reducerJobtitle";
import reducerAuth from "./reducerAuth";


const rootReducer = combineReducers({
    reducerEmployee: reducerEmployee,
    reducerDepartment: reducerDepartment,
    reducerJobtitle: reducerJobtitle,
    reducerAuth: reducerAuth,
});

export default rootReducer;
