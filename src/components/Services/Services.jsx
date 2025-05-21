import React from 'react'
import { RiBook2Line } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
// import { RiBook2Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <RiBook2Line size={30} />,
      title: "UTME Prep Hub",
      desc: "JAMB-focused lessons, past questions, and mock tests trained on UTME data using AI.",
    },
    {
      icon: <IoSchoolOutline size={30} />,
      title: "WAEC/NECO Success Zone",
      desc: "Master WAEC & NECO with subject-targeted tutorials powered by AI and data from past exams.",
    },
    {
      icon: <MdOutlineCastForEducation size={30} />,
      title: "University Course Support",
      desc: "Access tutorials for your department, with AI-generated summaries and test tips.",
    },
    {
      icon: <RiBook2Line size={30} />,
      title: "Past Question Vault",
      desc: "Explore a large database of past questions, tagged and ranked using AI trends.",
    },
    {
      icon: <BiSupport size={30} />,
      title: "Final Year Project Lab",
      desc: "Get help structuring and refining your final year project with AI suggestions and expert feedback.",
    },
    {
      icon: <FaUserFriends size={30} />,
      title: "1-on-1 Mentorship",
      desc: "Connect directly with tutors for personalized support throughout your academic journey.",
    },
  ];

  return (
    <section className='bg-[#f8f8f8] py-12 px-10 md:px-12' id='services'>
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-lg px-4 py-6 w-full h-auto mx-auto max-w-[300px] text-center relative"
          >
             <div className="flex justify-center absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#D98CE0] text-white p-4 rounded-full shadow-md text-2xl">
                {service.icon}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-6">{service.title}</h2> 
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <button className="text-[#D98CE0] font-medium hover:underline">
              More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
