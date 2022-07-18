import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
    const handleEventClick = (info) => {
        console.log(info.event.start)
    }
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar= {{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek"
                }}
                businessHours = {{
                    startTime: "7:00",
                    endTime: "19:00",
                    daysOfWeek: [1,2,3,4,5,6]
                }}
                timeZone = "local"
                events = {[
                    {title: "event 1", start: "2022-07-18T01:30:00", end: "2022-07-18T03:30:00", nombre_participante: "Pedro"},
                    {title: "event 1", start: "2022-07-18T04:30:00", end: "2022-07-18T06:30:00", backgroundColor: "green", borderColor: "blue"}
                ]}
                eventClick = {handleEventClick}
                eventContent = {renderEventContent}
            />            
        </div>
    );
}

function renderEventContent(eventInfo) {
    return (
        <div>
            <div>Cita</div>
            <div>{eventInfo.event.title}</div>
            <div>{eventInfo.event.extendedProps.nombre_participante}</div>
        </div>
    )
}