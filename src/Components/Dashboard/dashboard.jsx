import React from 'react'
import SideBar from '../Dashboard/Components/SideBar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

const Dashboard = () => {
    return(
        <>
        <div className='dashboard flex'>   
            <div className='dashboardContainer flex'>
            <SideBar/>
            <Body/>
            </div>
        </div>
     
        </>
    )
}

export default Dashboard
