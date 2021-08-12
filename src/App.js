import React, { useState } from 'react';

// component imports
import AddReminder from './components/reminder/AddReminder';
import ReminderList from './components/reminder/ReminderList';

function App() {


  const [remindersList, setRemindersList] = useState([]);

  const addReminderHandler = (reminderName) => {
    setRemindersList((prevReminderList) => {
      return [
        ...prevReminderList,
        { name: reminderName, id: Math.random().toString() },
      ]
    })
  }


  return (
    <div>
      <AddReminder onAddReminder={addReminderHandler} />
      <ReminderList reminders={remindersList} />
    </div>
  );
}

export default App;
