import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Lecture = () => {
    const role = localStorage.getItem('role') || 'user';
  return (
    <DashboardLayout role={role}>
        <div>Lecture</div>
    </DashboardLayout>
  )
}

export default Lecture