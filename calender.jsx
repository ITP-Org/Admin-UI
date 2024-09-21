import React, { useState } from 'react';
import Calender from 'react-simple-calender';

function Cal(){
    const [date, setDate] = useState(new Date());
    return(
        <>
         <div class="calender">
        <div className="App">
      <Calender
        preselectedDates={[
          '2024-03-20',
          '2024-03-23'
        ]}
        disabledDates={[
          '2024-03-28',
          '2024-03-29',
          '2024-04-2'
        ]}
        multiselect={false}
        onChange={(params) => {setDate(params.date); console.log(JSON.stringify(params))}}
        titleFormat={'MMMM YYYY'}
        daysFormat={2}
      />
    </div>
            <div class="add-event">

                <input type='text' placeholder='Add title'></input><br/>
            <textarea placeholder='Add your description'></textarea><br/><br/>
            <button>Add task</button>
            </div>
        </div>
        
    
        
        
        </>
    );
}
export default Cal

