import React from 'react';

import Card from '../UI/Card';

import classes from './ReminderList.module.css';

const ReminderList = props => {
    return (
        <Card className={classes.reminders}>
            <ul>
                {props.reminders.map((reminder) => (
                    <li key={reminder.id}>
                        {reminder.name}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default ReminderList;