import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const ManageUsers = () => {
     
 const role =localStorage.getItem('role') || 'admin';
  return (
    <DashboardLayout role ={role}>
        <div>ManageUsers</div>
    </DashboardLayout>
  )
}

export default ManageUsers