import {TaskAction, TaskActionTypes, TaskState} from "../../types/task";

const initialState: TaskState = {
    tasks: {
        project: "string", period: "string",
        chart: {id: "number", title: "string", period_start: "string", period_end: "string",
            sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                    sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                        sub: [{id: "number", title: "string", period_start: "string", period_end: "string",},
                            {id: "number", title: "string", period_start: "string", period_end: "string",}]
                    }]}]}]}},
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            return { tasks: {
                    project: "string", period: "string",
                    chart: {id: "number", title: "string", period_start: "string", period_end: "string",
                        sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                            sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                                sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                                    sub: [{id: "number", title: "string", period_start: "string", period_end: "string",},
                                        {id: "number", title: "string", period_start: "string", period_end: "string",}]
                                }]}]}]}}
            }
        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return {tasks: action.payload}
        default:
            return state
    }
}













