
export interface TaskState {
    tasks: any[];
    loading: boolean;
    error: null | string;
}

export enum TaskActionTypes {
    FETCH_TASKS = 'FETCH_TASKS',
    FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
    FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR'
}

interface FetchTasksAction {
    type: TaskActionTypes.FETCH_TASKS;
}

interface FetchTasksSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS;
    payload: any[]
}

interface FetchTasksErrorAction {
    type: TaskActionTypes.FETCH_TASKS_ERROR;
    payload: string;
}

export type TaskAction = FetchTasksAction | FetchTasksSuccessAction | FetchTasksErrorAction