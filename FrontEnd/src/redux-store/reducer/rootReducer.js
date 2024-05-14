import { combineReducers } from 'redux';
import reducerEmployee from "./reducerEmployee";
import reducerUserInformation from "./reducerUserInformation";

import reducerDepartment from "./reducerDepartment";
import reducerJobtitle from "./reducerJobtitle";

const rootReducer = combineReducers({
    reducerEmployee: reducerEmployee,
    reducerDepartment: reducerDepartment,
    reducerJobtitle: reducerJobtitle,
    reducerUserInformation: reducerUserInformation,
});

export default rootReducer;
