import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Tutordashboar = () => {
     const role = localStorage.getItem('role') || 'tutor';
  return (
  <DashboardLayout role={role}>
      <div>Tutordashboar</div>
  </DashboardLayout>
  )
}

export default Tutordashboar