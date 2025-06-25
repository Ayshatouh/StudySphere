import React, { useEffect, useState } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import { ToastContainer, toast } from 'react-toastify'; // Toast imports
import 'react-toastify/dist/ReactToastify.css'; // Toast styles
import axios from 'axios';
import { data } from 'react-router-dom';
const Profile = () => {
  const role = localStorage.getItem('role') || 'user';
  const [isEditing, setIsEditing] = useState(false); // Controls edit mode
  // const storedUser = JSON.parse(localStorage.getItem('user'));
  // const userId = storedUser?.id;
  
  // User state holds all profile data
    //const [user, setUser] = useState([]);
  const [user, setUser] = useState({
    name: "",
    role: "",
    email: "",
    address: "",
    school: "",
    bio: "",
    joined: "",
    avatar: ""
  });

  //for getting user from database
  useEffect(()=>{
 
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    // console.log('stored user:', storedUser);
    // //console.log('response:', res.user);
    // console.log('token:', token);
  
    const userId = storedUser?.id;

    if(userId && token){
      axios.get(`http://localhost:34567/api/users/${userId}`, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }) 
         
        .then(res => {
          console.log('response', res);
          setUser(res.data.user[0]);
        })

        .catch(err =>{
          console.error('failed to fetch user data:', err);
          toast.error("Failed to load profile info");
        });
    }
  }, []);
  

  // Handles profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Creates a preview
      setUser((prevUser) => ({ ...prevUser, avatar:imageUrl}));
    }
  };

  // Handles form field changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Submits the profile update
  const handleSubmit = async () => {
    setIsEditing(false);
      try{
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const userId = storedUser?.id;

        if (userId){
          await axios.put(`http://localhost:34567/api/users/${userId}`, user);
          toast.success("Profile updated successfully");
        }
      } catch(error){
        console.error('Error updating profile:', error);
        toast.error('failed to update profile');
      }
   

  };

  return (
    <DashboardLayout role={role}>
    {/* {JSON.stringify(user)} */}
      <div className='p-6 min-h-screen'>

        {/* Toast container (required for showing toasts) */}
        <ToastContainer />

        {/* Header Section */}
        <div className='bg-gradient-to-r from-[#9E3DAF] to-[#D98CE0] p-6 rounded-t-2xl shadow-md text-white'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>

            {/* Profile Picture + Info */}
            <div className='flex items-center space-x-4'>
              <div className='relative w-24 h-24'>

                {/* Edit Mode: Upload Image */}
                {isEditing ? (
                  <>
                    <label htmlFor='avatar'>
                      <div className='w-24 h-24 rounded-full bg-[#D98CE0] flex items-center justify-center cursor-pointer hover:bg-gray-300'>
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt='userpic'
                            className='w-full h-full rounded-full object-cover'
                          />
                        ) : (
                          <span className='text-[#D98CE0] text-sm'>Upload</span>
                        )}
                      </div>
                    </label>
                    <input
                      id='avatar'
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='hidden'
                    />
                  </>
                ) : (
                  // View Mode: Show Image or Placeholder
                  <div className='w-24 h-24 rounded-full bg-[#D98CE0] flex items-center justify-center'>
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt='userpic'
                        className='w-full h-full rounded-full object-cover'
                      />
                    ) : (
                      <svg
                        className='w-12 h-12 text-[#9E3DAF]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5.121 17.804A10.944 10.944 0 0112 15c2.485 0 4.77.83 6.879 2.221M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 1a9 9 0 11-18 0 9 9 0 0118 0z'
                        ></path>
                      </svg>
                    )}
                  </div>
                )}
              </div>

              {/* Name, Role & Join Date */}
              <div>
                {isEditing ? (
                  <input
                    type='text'
                    name='name'
                    value={user.firstname}
                    onChange={handleChange}
                    className='text-xl font-bold bg-white text-black px-2 py-1 rounded'
                  />
                ) : (
                  <>
                    <h2 className='text-2xl font-bold'>{user.firstname}</h2>
                    <p>{user.role}</p>
                    <p className='text-sm'>Member since: {user.joined}</p>
                  </>
                )}
              </div>
            </div>

            {/* Edit/Cancel Button */}
            <div className='mt-4 md:mt-0'>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className='text-white font-bold px-4 py-2 rounded-lg drop-shadow-md bg-[#9E3DAF] hover:text-white'
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        {/* Main Card Section */}
        <div className='grid md:grid-cols-3 gap-6 bg-gradient-to-l from-[#D98CE0] to-[#9E3DAF] p-6 rounded-b-2xl shadow-md mt-4'>

          {/* Left Card - About Info */}
          <div className='col-span-1 space-y-4'>
            <div className='bg-white text-black p-4 rounded-xl shadow'>
              <h3 className='font-bold mb-2'>About</h3>

              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="school"
                    value={user.school || ''}
                    onChange={handleChange}
                    className="block w-full border rounded px-2 py-1 mb-2"
                    placeholder="School"
                  />
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="block w-full border rounded px-2 py-1 mb-2"
                    placeholder="Address"
                  />
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="block w-full border rounded px-2 py-1 mb-2"
                    placeholder="Email"
                  />
                </>
              ) : (
                <>
                  <p><strong>School:</strong> {user.school}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                </>
              )}
            </div>
          </div>

          {/* Right Card - Bio Section */}
          <div className="col-span-2 space-y-4">
            <div className="bg-white text-black p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2">Bio</h3>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                />
              ) : (
                <p>{user.bio}</p>
              )}
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-[#9E3DAF] text-white px-4 py-2 rounded-xl hover:bg-[#7b2b8f]"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
