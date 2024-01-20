import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex  flex-col gap-2 h-screen bg-gray-200 p-2' style={{width: '288px'}}>

        {/* Top text :kokoro font*/}
        <div className='p-2 '>
            <span>Bienvenido de</span>
            <br />
            <span>Vuelta, </span>
            <span className='font-bold'>Charlies</span>
        </div>

        {/* Dropdown Menu */}
        <div className='p-4 items-center bg-white w-full rounded-xl flex flex-row gap-2 cursor-pointer' style={{height:'85px'}} >

                {/* Circular Icon */}
                <div className='w-16 font-light flex justify-center items-center h-16 rounded-full bg-gray-400'>CA</div>
                {/* Username */}
                <div className='flex flex-col gap-1 text-sm'>
                <div className='text-gray-500'>Username</div>
                <div className=''>Inversiones SA Mart.</div>
                </div>
                <KeyboardArrowDownIcon fontSize='large'/>
        </div>


        {/* Dashboard Menu */}
        <div className='w-full bg-white rounded-xl flex flex-col gap-1 p-2' style={{height:'40%'}} >

            {/* Dashboard Menu Items */}
            <Link  to={'/'} className='flex flex-row gap-4 h-1/6 p-2 justify-left hover:bg-black hover:text-white cursor-pointer rounded-xl items-center'>
                <DashboardOutlinedIcon/>
                <div>Dashboard</div>
            </Link>

            {/* Tracking */}
            <Link to={'/tracking'} className='flex flex-row gap-4 h-1/6 p-2 justify-left hover:bg-black hover:text-white cursor-pointer rounded-xl items-center'>
                <LocalShippingOutlinedIcon/>
                <div>Tracking</div>
            </Link>

            {/* Cargo */}
            <Link to={'/cargo'} className='flex flex-row gap-4 h-1/6 p-2 justify-left hover:bg-black hover:text-white cursor-pointer rounded-xl items-center'>
                <ContentPasteOutlinedIcon/>
                <div>Cargo</div>
            </Link>

            {/* List */}
            <Link to={'/list'} className='flex flex-row gap-4 p-2  h-1/6 justify-left hover:bg-black hover:text-white cursor-pointer rounded-xl items-center'>
                <PlaylistAddCheckOutlinedIcon/>
                <div>List</div>
            </Link>

            {/* Historial */}
            <Link to={'/historial'} className='flex flex-row gap-4 p-2 h-1/6 justify-left hover:bg-black hover:text-white cursor-pointer rounded-xl items-center'>
                <HistoryToggleOffOutlinedIcon/>
                <div>Historial</div>
            </Link>

            {/* Notifications */}
            <Link to={'/notifications'}  className='flex flex-row gap-4 p-2 justify-left hover:bg-black hover:text-white cursor-pointer rounded-xl items-center'>
                <NotificationsActiveOutlinedIcon/>
                <div>Notifications</div>
            </Link>
        </div>

        {/* Cargo Details */}
        <div className='h-1/4 bg-black rounded-xl w-full flex flex-col gap-4 py-6 px-4'>
            <div className='text-xl font-bold text-white'>Envio <br /> Reciente</div>
            <div className=' flex flex-row justify-between'>
            <div className='font-semibold text-white'>Destino</div>
            <div className='flex flex-col gap-2'>
            <div className='font-light text-white'>Tegucigalpa</div>
            <span className='flex flex-row items-center gap-2'>
                <div className='font-bold text-3xl text-white'>1859</div>
                <div className='font-light text-xl text-white'>Km</div>
            </span>
            </div>
            </div>
        </div>

        {/* Add Section */}
        <div className='bg-white rounded-xl h-1/4 flex flex-col justify-center items-center gap-2 cursor-pointer hover:bg-black hover:text-white'>
            <AddCircleOutlinedIcon fontSize='large'/>
            <div>Crear nueva poliza</div>
        </div>






    </div>
  )
}

export default Sidebar