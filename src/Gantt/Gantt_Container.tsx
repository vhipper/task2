import React, {useEffect} from 'react';
import "../Styles/Gantt.css";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../store/action-creators/task";
import Gant_timeline from "./Gantt_timeline";
import Gantt_Chart from "./Gantt_Chart";

const GanttContainer = () => {
    const {tasks} = useTypedSelector(state => state.task)
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    return (
        <div className="Container_Body">
            <div>
                <div className="top">
                    <p className="Project_and_Period">{tasks.project} / {tasks.period}</p>
                    <button>Export</button>
                </div>
                <div className="Gantt_Container">
                    <div className="Gantt_Left">
                        <div className="Gantt_Top">
                            <p>Work item</p>
                        </div>
                        <div className="Gantt_Down">
                            <Gantt_Chart/>
                        </div>
                    </div>
                    <Gant_timeline/>
                </div>
            </div>
        </div>
    );
};

export default GanttContainer;