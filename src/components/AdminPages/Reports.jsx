import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Reports = () => {
  const role = localStorage.getItem('role') || 'admin';
  return (
   <DashboardLayout role ={role}>
     <div>Reports</div>
   </DashboardLayout>
  )
}

export default Reports