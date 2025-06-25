import React from 'react'

const CourseCard = ({course, activeTab}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 w-full sm:w-[45%] md:w-[30%]'>
        <img src = {course.image} alt={course.title} className='rounded-xl mb-2 '/>
        <p className='text-sm text-[#9E3DAF]'>{course.category}</p>
        <h2 className='font-bold'>{course.title}</h2>
        <p className='text-sm'>{course.instructor}</p>
        <p className='text-sm text-[#9E3DAF]'>{course.duration}</p>
        <button className='text-[#9E3DAF] mt-2'>
            {activeTab === 'All Courses'
            ? 'Register'
              :course.status === 'Ongoing'
            ? 'Resume Course'
            : course.status === 'Not started'
            ? 'Start Course'
            : 'View Course'
        }
        </button>
    </div>
  );
};

export default CourseCard