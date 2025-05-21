// // import React from 'react';

// // const recent = [
// //   { name: "Practice Past Questions", mode: "AI Assistant", avatar: "👨‍🏫" },
// //   { name: "Tutorial Class", mode: "Tutor", avatar: "👩‍🏫" },
// //   { name: "UTME PREP", mode: "AI Assistant", avatar: "👨‍🏫" },
// //   { name: "Soft Skill training", mode: "AI Assistant", avatar: "👨‍🏫" },
// // ];

// // const RecentCourses = () => {
// //   const handleClick = (name) => {
// //     if (name === "Practice Past Questions") {
// //       if (window.Chatling) {
// //         window.Chatling.toggle(); // Optional: toggles the widget open/close
// //       } else {
// //         alert("Chatbot is loading, please wait...");
// //       }
// //     } else {
// //       alert(`${name} feature is coming soon.`);
// //     }
// //   };

// //   return (
// //     <div className="bg-white p-4 rounded-xl drop-shadow-2xl shadow-[#9E3DAF]">
// //       <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
// //       {recent.map((rect, index) => (
// //         <div
// //           key={index}
// //           className="flex items-center justify-between py-2 border-b last:border-none"
// //         >
// //           <div className="flex items-center space-x-3">
// //             <span className="text-2xl">{rect.avatar}</span>
// //             <div>
// //               <p className="font-medium text-sm">{rect.name}</p>
// //               <p className="text-sm text-[#9E3DAF]">{rect.courses} Completed Track</p>
// //             </div>
// //           </div>
// //           <button
// //             onClick={() => handleClick(rect.name)}
// //             className="text-[#D98CE0] font-semibold bg-white hover:bg-[#7A2D8E] px-4 py-2 rounded"
// //           >
// //             Start
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default RecentCourses;
// import React, { useState } from 'react';

// const SimpleForm = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     fetch("https://192.168.1.197:34567/testing",{
//       method:   "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//     .then ((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label><br />
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Email:</label><br />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Age:</label><br />
//         <input
//           type="text"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//       </div>

//       <button className='btn' type="submit">Submit</button>
//     </form>
//   );
// };

// export default SimpleForm;

import React, { useEffect, useState } from 'react'

const RecentCourses = () => {

  const [product, setProduct] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products', {
      method: "GET",
      headers: {
        "content-type":"application/json"
      }
    })
    .then((res)=> res.json())
      .then((product) => {setProduct(product); console.log(product)})
      .then ((err)=>console.log);
  },[]);
  return (
    <div className='container py-4'>
      {/* {JSON.stringify(product)} */}
      <h2 className='text-center'>Product list</h2>
      {product.map((item)=>{
        return(
          <div> 
            <div>
              <img
               src={item.image}
               style={{height: "200px", width:"200px"}}/>
            </div>
            <div>
              <h5>{item.title}</h5>
               <h5>{item.desctription}</h5>
                <h5>{item.price}</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RecentCourses