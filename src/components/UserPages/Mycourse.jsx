import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Mycourse = () => {
    const role = localStorage.getItem('role') || 'user';
  return (
    <DashboardLayout role={role}>
        <div>Mycourse</div>
    </DashboardLayout>
  )
}

export default Mycourse