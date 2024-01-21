    import * as React from 'react';
    import Table from '@mui/material/Table';
    import TableBody from '@mui/material/TableBody';
    import TableCell from '@mui/material/TableCell';
    import TableContainer from '@mui/material/TableContainer';
    import TableHead from '@mui/material/TableHead';
    import TableRow from '@mui/material/TableRow';
    import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { StepButton } from '@mui/material';



    export default function BasicTable({changeButtonText,columns, data, selectedID, handleDelete, SetTrackerType, SetTrackerStatus}) {
        useEffect(() => {
            // Your refresh logic here
            console.log('Component refreshed due to a change in "data".');
          }, [data]); 
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell style={{fontWeight:'bold'}}>Tracker Type</TableCell>
                <TableCell style={{fontWeight:'bold'}} align="right">Tracker Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow
                key={row.TrackerType}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.TrackerType}
                </TableCell>
                <TableCell align="right">{row.TrackerStatus}</TableCell>

                <TableCell align="right">
                    <button onClick={()=>{
                        changeButtonText('Save Changes')
                        SetTrackerType(row.TrackerType)
                        selectedID(row.id)

                        SetTrackerStatus(row.TrackerStatus)
                    }} className='p-2 px-4 bg-black font-bold text-white rounded-lg'>
                        Edit
                    </button>
                </TableCell>

                <TableCell align="right">
                    <button onClick={() => {
                        selectedID(row.id)
                        handleDelete()
                    }} className='p-2 px-4 bg-red-600 font-bold text-white rounded-lg'>
                        Delete
                    </button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }
