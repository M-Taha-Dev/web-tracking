import React, { useState } from 'react'
import BasicTable from '../Components/Table'
import TrackerList from '../Components/TrackerList'
import tracker_list from '../Utils/data/TrackerList'
import tracker_status from '../Utils/data/TrackerStatus'
const Tracking = () => {


  const [buttonText, SetButtonText] = useState('Add Entry')
  const [trackerType, SetTrackerType] = useState(null)
  const [trackerStatus, SetTrackerStatus] = useState(null)
  const [rowData, SetRowData] = useState([
    {'id': 1,'TrackerType': 'Internet Tracking',
    'TrackerStatus':'Available'},
  ])
  const [selectedID, SetSelectedID] = useState(null)

  const addRow = () => {
    if (buttonText === 'Add Entry'){
    const lastId = rowData.length > 0 ? rowData[rowData.length - 1].id: 0
    const newArray  = [...rowData,{'id':lastId+1,'TrackerType': trackerType, 'TrackerStatus': trackerStatus}]
    console.log(trackerType)
    SetRowData(newArray)
    }
    else{
      editElement(selectedID,{'TrackerType': trackerType, 'TrackerStatus':trackerStatus})
      
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
    SetButtonText('Add Entry')
  };

  const removeRow = () => {
      const updatedArray = rowData.filter((element) => element.id != selectedID)
      SetRowData(updatedArray)
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