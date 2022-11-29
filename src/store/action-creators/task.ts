import {TaskAction, TaskActionTypes} from "../../types/task";
import axios from "axios";
import {Dispatch} from "redux";



export const fetchTasks = () => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActionTypes.FETCH_TASKS})
            const response = await axios.get("http://82.202.204.94/tmp/test.php")
            dispatch({type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload: response.data})
        } catch (e) {

        }
    }
}






