import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Quiz = () => {
    const role = localStorage.getItem('role') || 'user';
  return (
    <DashboardLayout role={role}>
        <div>Quiz</div>
    </DashboardLayout>
  )
}

export default Quiz