import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../store/action-creators/task";
import "../Styles/Gantt.css";
import {Chart} from "react-google-charts";
import {options} from "./option";


const Gantt_Container: React.FC = () => {
    const {tasks, loading, error} = useTypedSelector(state => state.task)
    const dispatch: Dispatch<any> = useDispatch()

    console.log(tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="Gant_Container">

        </div>
    );
};

export default Gantt_Container;