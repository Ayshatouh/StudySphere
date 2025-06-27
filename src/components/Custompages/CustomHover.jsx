import React, { useState } from 'react';
import { Card, Statistic } from 'antd';
import CountUp from 'react-countup';
const CustomHover = ({ title, value, icon, onView, style, titleColor = 'white', iconPosition ='left' }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Card
      style={{ borderRadius: '1rem', position: 'relative', cursor: 'pointer', ...style }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={`flex ${iconPosition === 'left' ? 'flex-row items-center' : 'flex-col items-center'} gap-4`}
      >
        {icon && <span className="text-3xl">{icon}</span>}

        <div className={`flex flex-col ${iconPosition === 'left' ? 'ml-2' : ''}`}>
          <h3 style={{ color: titleColor, fontSize: '1.25rem', margin: 0 }}>{title}</h3>
          <span style={{ fontSize: '1.5rem', color: titleColor, fontWeight: 'bold', textAlign: 'center' }}>
            <CountUp end={value} separator="," />
          </span>
        </div>
      </div>
      {/* <Statistic
        title={title}
        value={value}
       // valueStyle={{ color: 'white', fontSize: '1.5rem' }}
        prefix={icon}
      /> */}
     
      {hovering && (
        <button
            onClick={onView}
            style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '0.4rem 0.5rem',
            borderRadius: '0.5rem',
            background: '#9E3DAF',
            color: 'white',
            border: 'none',
          }}
        >
          View
        </button>
      )}
    </Card>
  );
};

export default CustomHover;
