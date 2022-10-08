import React from "react"

const List = () => {
    const schedules = [
        {
            schedule: 'React',
            time: '02:00:00'
        },
        {
            schedule: 'Vue',
            time: '01:00:00'
        },
        {
            schedule: 'Angular',
            time: '05:00:00'
        },
        {
            schedule: 'Svelt',
            time: '01:00:00'
        },
    ]
    return(
        <aside>
            <ul>
                {
                    schedules.map((item, index) => (
                        <li key={index}>
                            <h3>{item.schedule}</h3>
                            <span>{item.time}</span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}

export { List };