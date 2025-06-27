import React, { useEffect, useState} from 'react'
import {Row, Col, Card, Statistic, Table, Empty} from 'antd';
import { UserOutlined, BookOutlined, TeamOutlined } from '@ant-design/icons';
import DashboardLayout from '../Layout/DashboardLayout'
import CountUp from 'react-countup';
import { data } from 'react-router-dom';
import CustomHover from '../Custompages/CustomHover';

const formatter = (value) => <CountUp end={value} separator=","/>;

const Admindashboard = () => {
     const role = localStorage.getItem('role') || 'admin';

     //states
     
     const [studentsCount, setStudentsCount] = useState(0);
     const [tutorsCount, setTutorsCount] = useState(0);
     const [adminsCount, setAdminsCount] = useState(0);
     const [students, setStudents] = useState([]);
    //  const [courses, setCourses] = useState([]);
    //  const [tutors, setTutors] = useState([]);
     const [loading, setLoading] = useState(true);

    useEffect(()=>{
        //fetching all data 
       fetch(`http://localhost:34567/api/users`,{
            // headers: {
            //     Authorization: `Bearer ${token}`//needed for auth
            // }
       })
        .then(res => res.json())
        .then(data => {
            const users = data.user;
            console.log('users fetched:', users);
            setStudents(users);
            setStudentsCount (users.filter(u=> u.role === 'user').length);
            setTutorsCount(users.filter(u => u.role ==='tutor').length);
            setAdminsCount(users.filter(u => u.role ==='admin').length);
        })
        .catch(err => console.error('Error fetching users:', err))
        .finally(()=> setLoading(false));
    }, []);
   const columns =[
    {title: 'Fullname', render: (_, record) => `${record.firstname} ${record.lastname}`, key:'name'},
    {title: 'Email', dataIndex: 'email', key:'email'},
    {title: 'Role', dataIndex: 'role', key:'role'}
   ];
 
  return (
    <DashboardLayout role={role} >
          <Row gutter={16} className='mb-4' >
            <Col xs={24} sm={8}>
                <CustomHover
                    title="Total Students"
                    value={studentsCount}
                    icon={<UserOutlined style={{color:'#9E3DAF',fontSize:'50px'}}/>}
                    onView={()=> setSelectedList('students')}
                    style={{background: '#D98CE0'}}
                    formatter={formatter}
                   
                />
            </Col>
             <Col xs={24} sm={8}>
            <CustomHover
              title="Total Tutors"
              value={tutorsCount}
              icon={<BookOutlined style={{ color: '#9E3DAF', fontSize:'50px' }} />}
              onView={() => setSelectedList('tutors')}
              style={{ background: '#D98CE0' }}
              formatter={formatter}
             
            />
        
        </Col>
          <Col xs={24} sm={8}>
         
            <CustomHover
            title="Total Admins"
            value={adminsCount}
            icon={<TeamOutlined style={{ color: '#9E3DAF', fontSize:'50px'}} />}
            onView={() => setSelectedList('admins')}
            style={{ background: '#D98CE0' }}
            formatter={formatter}
           
            />

        </Col>
          </Row>
        <Card title ='Users'> 
        <Table
         columns={columns}
         dataSource={students}
         loading={loading}
         rowKey="id"
         locale={{emptyText: "No data available"}}
         pagination={{pageSize: 5}}
        />
        </Card>
    </DashboardLayout>
  )
}

export default Admindashboard