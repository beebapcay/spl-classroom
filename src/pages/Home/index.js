import React, { useState, useEffect } from 'react';
import ClassCard from '../../components/ClassCard';
import EmptyImage from '../../assets/images/empty_comments.png';
import Typography from '@mui/material/Typography';
import { classApi } from '../../api';
import './index.css';

const Home = ({ ...props }) => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    classApi.fetchClasses().then((data) => {
      setClasses(data);
    });
  }, []);

  return (
    <div {...props} className="main">
      {classes.length === 5 ? (
        <div className="classes-list">
          <ClassCard />
        </div>
      ) : (
        <div className="empty-comments">
          <img src={EmptyImage} alt="empty_comments" className="empty-comments-img" />
          <Typography className="empty-comments-msg">Your class list is empty</Typography>
        </div>
      )}
    </div>
  );
};

export default Home;
