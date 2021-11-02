import React, { useState } from 'react';
import ClassCard from '../../components/ClassCard';
import EmptyImage from '../../assets/images/empty_comments.png';
import Typography from '@mui/material/Typography';
import './index.css';

const Home = ({ ...props }) => {
  const [classes, setClasses] = useState([0]);

  return (
    <div {...props}>
      {classes.length ? (
        <div>
          <ClassCard />
        </div>
      ) : (
        <div>
          <img src={EmptyImage} alt="empty_comments" style={{ width: 350, height: 'auto' }} />
          <Typography sx={{ textAlign: 'center', color: 'gray', mt: 2 }}>
            Your class list is empty
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Home;
