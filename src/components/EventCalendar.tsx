import React from 'react';
import {Badge, Calendar} from "antd";
import {IEvent} from "../store/slices/event/types";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

export interface IProps {
    events: IEvent[]
}

const EventCalendar: React.FC<IProps> = (props) => {

    function dateCellRender(value: Moment) {
        const data = formatDate(value.toDate());
        const currentEvents = props.events.filter(ev => ev.date === data);
        return (
            <div>
                {currentEvents.map((ev, i) =>
                    <div key={i} >{ev.description}</div>
                )}
            </div>
        )
    }

    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
}

export default EventCalendar;