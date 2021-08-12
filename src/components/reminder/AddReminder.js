import React, { useState } from 'react';

import classes from './AddReminder.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddReminder = props => {

    const [enteredReminder, setEnteredReminder] = useState('');
    const [error, setError] = useState('');

    const addReminderHandler = (event) => {
        event.preventDefault();
        if (enteredReminder.trim().length === 0) {
            setError({
                title: 'Input is invalid',
                message: 'Please try again'
            })
            return;
        }

        props.onAddReminder(enteredReminder);
        setEnteredReminder('');
    }

    const reminderChangeHandler = (event) => {
        setEnteredReminder(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }


    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addReminderHandler}>
                    <label htmlFor="reminder">Reminder</label>
                    <input id="reminder" tyoe="text" value={enteredReminder} onChange={reminderChangeHandler} />
                    <Button type="submit">Add a reminder</Button>
                </form>
            </Card>
        </div>
    )
}


export default AddReminder;