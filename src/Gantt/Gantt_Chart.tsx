import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../store/action-creators/task";
import {Chart} from "react-google-charts";
import {options} from "./option";
import "../Styles/Gantt_Chart.css";


const Gantt_Chart: React.FC = () => {
    const {tasks} = useTypedSelector(state => state.task)
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    const obj = tasks;

    const arr: { id: number; title: string; period_start: string; period_end: string; }[] = [];

    const foo = (chart: { id: any; title: any; period_start: any; period_end: any; sub: any; }) => {
        if (!chart.id) return;
        arr.push({
            id: chart.id,
            title: chart.title,
            period_start: chart.period_start,
            period_end: chart.period_end,
        });

        if (chart.sub && chart.sub.length > 0) chart.sub.forEach((item: { id: number; title: string; period_start: string; period_end: string; sub: any; }) => foo(item));
    };

    foo(obj.chart);

    function daysToMilliseconds(days: number) {
        return days * 24 * 60 * 60 * 1000;
    }

    const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
    ];

    const rows = [
        [
            arr[0].id,
            arr[0].title,
            arr[0].title,
            new Date(arr[0].period_start.replaceAll('-', ', ')),
            new Date(arr[0].period_end.replaceAll('-', ', ')),
            null,
            100,
            null,
        ],
        [
            arr[1].id,
            arr[1].title,
            arr[1].title,
            new Date(arr[1].period_start.replaceAll('-', ', ')),
            new Date(arr[1].period_end.replaceAll('-', ', ')),
            null,
            100,
            null,
        ],
        [
            arr[2].id,
            arr[2].title,
            arr[2].title,
            new Date(arr[2].period_start.replaceAll('-', ', ')),
            new Date(arr[2].period_end.replaceAll('-', ', ')),
            null,
            100,
            null,
        ],
        [
            arr[3].id,
            arr[3].title,
            arr[3].title,
            new Date(arr[3].period_start.replaceAll('-', ', ')),
            new Date(arr[3].period_end.replaceAll('-', ', ')),
            null,
            100,
            null,
        ],
        [
            arr[4].id,
            arr[4].title,
            arr[4].title,
            new Date(arr[4].period_start.replaceAll('-', ', ')),
            new Date(arr[4].period_end.replaceAll('-', ', ')),
            null,
            100,
            null,
        ],
        [
            arr[5].id,
            arr[5].title,
            arr[5].title,
            new Date(arr[5].period_start.replaceAll('-', ', ')),
            null,
            60 * 600 * 1000,
            100,
            null,
        ]
    ];


     const data = [columns, ...rows];

    return (
        <div className="Gant_Container">
            <Chart
                className="Gantt_Chart"
                chartType="Gantt"
                width="100%"
                height="50%"
                data={data}
                options={options}
            />
        </div>
    );
};

export default Gantt_Chart;