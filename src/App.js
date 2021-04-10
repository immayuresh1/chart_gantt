import React from 'react';
import Gantt from './components/Gantt';
import './App.css';

const data = {
    data: [
        { id: 1, text: 'Planning', start_date: '1-04-2021', duration: 4 , progress: 1 },
        { id: 2, text: 'Preparation', start_date: '5-04-2021', duration: 1, progress: 0.4 },
        { id: 3, text: 'Procurement', start_date: '6-04-2021', duration: 4, progress: 0 }
    ],
    links: [
        { id: 1, source: 1, target: 2, type: '0' },
        { id: 2, source: 2, target: 3, type: '0' },
    ]
};
const App =()=> {
    
     return (
        <div>
             <div className="gantt-container">
            <Gantt tasks={data}/>
             </div>
        </div>
     );
    }
 
 export default App;