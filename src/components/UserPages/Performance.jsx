import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Performance = () => {
    const role = localStorage.getItem('role') || 'user';
  return (
    <DashboardLayout role={role}>
        <div>Performance</div>
    </DashboardLayout>
  )
}

export default Performance 