const reducerTask = (state = {
    isLoadingAddTask: false ,
}, action) => {
    switch (action.type) {
        // khi bắt đầu thêm task mới thì sẽ loading
        case 'START_ADD_TASK': {
            return { ...state,
                isLoadingAddTask: true
            };
        }
        // khi kết thúc loading khi add task mới
        case 'END_ADD_TASK': {
            return { ...state,
                isLoadingAddTask: false
            };
        }




        default:
            return state
    }

}
export default reducerTask
