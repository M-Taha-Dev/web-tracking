import React from 'react'
import MenuIcon from '@mui/icons-material/MenuRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import SimCardAlertOutlinedIcon from '@mui/icons-material/SimCardAlertOutlined';
const Dashboard = () => {
    return (
        <div className='px-8 py-4 w-full h-full flex flex-col bg-gray-200 overflow-auto'>

            {/* Header */}
            <div className='flex flex-row justify-between  items-center p-2'>
                <div className='text-4xl'>Dashboard</div>
                <MenuIcon fontSize='large' />
            </div>

            {/* Map Section */}
            <img className='w-full h-auto object-cover p-2' src='/src/Utils/images/map.png' alt='map image' />


            {/* Middle Card Section */}
            <div className='w-full h-2/3 flex flex-row justify-between gap-4 p-2'>
                <div className='h-full w-2/3 bg-white rounded-2xl flex flex-col'>
                    <div className='flex flex-row justify-between p-4'>
                        <div className='text-xl font-bold'>Detalles de envío</div>
                        <MoreHorizIcon />
                    </div>
                    <div className='p-4 items-center bg-white w-full rounded-xl flex flex-row gap-2 cursor-pointer' style={{ height: '85px' }} >

                        {/* Circular Icon */}
                        <div className='w-16 font-light flex justify-center items-center h-16 rounded-full bg-gray-400'>MG</div>
                        {/* Username */}    
                        <div className='flex flex-col gap-1 text-sm'>
                            <div className='font-semibold text-lg'>Marvin Garcia</div>
                            <div className='text-md text-gray-500'>Transportes Escobar Caceres, S.A</div>
                        </div>
                    </div>
                    <div className='px-2 bg-gray-100 w-full flex flex-row h-2/3'>

                        {/* Card 1 */}
                        <div className='flex flex-col gap-2 p-2 border-r-2 w-1/3  '>
                            <div className='text-lg'>Datos de Envio</div>
                            <div className='px-2 justify-between flex flex-row gap-6'>
                                <span className='text-gray-500'>Salida</span>
                                <span>23/10/2023</span>
                            </div>

                            <div className='px-2 flex justify-between flex-row gap-6'>
                                <span className='text-gray-500'>Llegada</span>
                                <span>26/10/2023</span>
                            </div>

                            <div className='text-lg'>Estatus</div>
                            <div className='p-1 text-center rounded-lg cursor-pointer w-1/2 bg-black text-white font-bold'>En carretera</div>

                        </div>






                        <div className='flex flex-col gap-2 p-2 border-r-2 w-1/3'>

                        <div className='text-lg'>Order ID:    #FR156KL89K</div>
                            <div className='px-2 justify-between flex flex-row gap-6'>
                                <span className='text-gray-500'>23 Jul</span>
                                <span className='text-sm font-bold'>Cargando</span>
                            </div>

                            <div className='px-2 flex justify-between  flex-row gap-6'>
                                <span className='text-gray-500'>23 Jul</span>
                                <span>Salida</span>
                            </div>
                            <div className='px-2 flex justify-between flex-row gap-6'>
                                <span className='text-gray-500'>______</span>
                                <span>Llegada</span>
                            </div>                            <div className='px-2 flex justify-between flex-row gap-6'>
                                <span className='text-gray-500'>______</span>
                                <span>Descarga</span>
                            </div>



                        </div>





                        <div className='flex flex-col gap-2 p-2 border-r-2 w-1/3'>
                        <div className='text-lg'>Cobertura</div>
                            <div className='px-2 justify-start flex flex-row gap-2'>
                                <div className='bg-black p-1 px-2 rounded-xl cursor-pointer text-white'>Tipo C</div>
                                <div className='bg-black p-1 px-2 rounded-xl cursor-pointer text-white'>Tipo D</div>

                            </div>

                            <div className='px-2 flex justify-between flex-col gap-6'>
                                <span className='text-xl'>Total Cobertura</span>
                                <span className='text-2xl text-red-600'>$ 15,000.00</span>
                            </div>

                        </div>






                    </div>
                </div>
                <div className='w-1/3 bg-white rounded-2xl p-4'>
                    <div className='text-2xl font-bold'>Resumen</div>
                    <div className='flex flex-col gap-2 p-2'>
                        <div className='w-full flex flex-row justify-between items-center bg-black p-2 rounded-lg cursor-pointer'>
                            {/* Icon */}
                            <LocalShippingIcon style={{color:'white'}} fontSize='large'/>

                            {/* Middle Text */}
                            <div className='text-white font-semibold'>En Carretera</div>
                            {/* Numeric Value */}
                            <div className='bg-white text-center p-3 rounded-lg text-black font-bold'>10</div>
                        </div>
                    </div>



                    {/* Card 2 */}

                    <div className='flex flex-col gap-2 p-2'>
                        <div className='w-full flex flex-row justify-between items-center bg-black p-2 rounded-lg cursor-pointer '>
                            {/* Icon */}
                            <DoneSharpIcon style={{color:'white'}} fontSize='large'/>

                            {/* Middle Text */}
                            <div className='text-white font-semibold'>Entregados</div>
                            {/* Numeric Value */}
                            <div className='bg-white text-center p-3 rounded-lg text-black font-bold'>10</div>
                        </div>
                    </div>

                    {/* Card 3 */}

                    <div className='flex flex-col gap-2 p-2'>
                        <div className='w-full flex flex-row justify-between items-center bg-black p-2  rounded-lg cursor-pointer'>
                            {/* Icon */}
                            <SimCardAlertOutlinedIcon style={{color:'white'}} fontSize='large'/>

                            {/* Middle Text */}
                            <div className='text-white font-semibold'>Accidentes</div>
                            {/* Numeric Value */}
                            <div className='bg-white text-center p-3 rounded-lg text-black font-bold'>10</div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Dashboard