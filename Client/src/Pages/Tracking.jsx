import React, { useEffect, useState } from 'react'
import BasicTable from '../Components/Table'
import TrackerList from '../Components/TrackerList'
import tracker_list from '../Utils/data/TrackerList'
import tracker_status from '../Utils/data/TrackerStatus'
import axios from 'axios';

const Tracking = () => {
  const [buttonText, SetButtonText] = useState('Add Entry')
  const [trackerType, SetTrackerType] = useState(null)
  const [trackerStatus, SetTrackerStatus] = useState(null)
  const [rowData, SetRowData] = useState([])
  const [selectedID, SetSelectedID] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/trackers');
        const parsedData = response.data.map((tracker) => {
          return {
            id: tracker._id,
            TrackerType: tracker.TrackerType,
            TrackerStatus: tracker.TrackerStatus,
          };
        });
        SetRowData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);

  const addRow = async() => {
    if (buttonText === 'Add Entry') {
      try {
        const lastId = rowData.length > 0 ? rowData[rowData.length - 1].id : 0;
        const response = await axios.post('http://localhost:5001/api/trackers', {
          TrackerType: trackerType,
          TrackerStatus: trackerStatus,
        });
        const newTracker = response.data;
        SetRowData((prevData) => [...prevData, newTracker]);
        console.log(trackerType);
      } catch (error) {
        console.error('Error adding row:', error.message);
      }
    } else {
      try {
        await axios.put(`http://localhost:5001/api/trackers/${selectedID}`, {
          TrackerType: trackerType,
          TrackerStatus: trackerStatus,
        });
        editElement(selectedID, { TrackerType: trackerType, TrackerStatus: trackerStatus });
        SetButtonText('Add Entry');
      } catch (error) {
        console.error('Error editing row:', error.message);
      }
    }
  }

  const editElement = (idToEdit, updatedValues) => {
    console.log('Editing element with ID:', idToEdit);
    console.log('Updated values:', updatedValues);

    const updatedArray = rowData.map((element) => {
      if (element.id === idToEdit) {
        return { ...element, ...updatedValues };
      }
      return element;
    });

    SetRowData(updatedArray);
    SetButtonText('Add Entry');
  };

  const removeRow = async() => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/trackers/${selectedID}`);
      const deletedTracker = response.data;
      const updatedArray = rowData.filter((element) => element.id !== selectedID);
      SetRowData(updatedArray);
    } catch (error) {
      console.error('Error deleting row:', error.message);
    }
  }
    

  return (
    <div className='flex flex-col gap-2 p-4 rounded-lg bg-gray-200 h-screen'>
      <TrackerList value={trackerType} SetTrackerType={SetTrackerType} tracker_list={tracker_list} label={'Tracker Types'}/>
      <TrackerList value={trackerStatus} SetTrackerType={SetTrackerStatus} tracker_list={tracker_status} label={'Status'}/>
      <button onClick={addRow} className='p-2 w-1/5 bg-black font-bold text-white '>{buttonText}</button>
      <BasicTable changeButtonText={SetButtonText} SetTrackerStatus={SetTrackerStatus} SetTrackerType={SetTrackerType} data={rowData} selectedID = {SetSelectedID} handleDelete={removeRow}/>
    </div>
  )
}

export default Tracking