
export interface TaskState {
    tasks: {
        project: "string", period: "string",
        chart: {id: "number", title: "string", period_start: "string", period_end: "string",
            sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                    sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                        sub: [{id: "number", title: "string", period_start: "string", period_end: "string",},
                            {id: "number", title: "string", period_start: "string", period_end: "string",}]
                        }]}]}]}}
}

export enum TaskActionTypes {
    FETCH_TASKS = 'FETCH_TASKS',
    FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
}

interface FetchTasksAction {
    type: TaskActionTypes.FETCH_TASKS;
}

interface FetchTasksSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS;
    payload: {
        project: "string", period: "string",
        chart: {id: "number", title: "string", period_start: "string", period_end: "string",
            sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                    sub: [{id: "number", title: "string", period_start: "string", period_end: "string",
                        sub: [{id: "number", title: "string", period_start: "string", period_end: "string",},
                            {id: "number", title: "string", period_start: "string", period_end: "string",}]
                    }]}]}]}}
}


export type TaskAction = FetchTasksAction | FetchTasksSuccessAction