import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { backgrounds } from '../../configs/default';
import _ from 'lodash';

const ClassCard = ({ classItem, ...props }) => {
  const background = classItem.background || backgrounds[_.random(0, backgrounds.length - 1)];

  return (
    <Card
      {...props}
      sx={{
        boxShadow: 2,
        '&:hover': {
          boxShadow: 5,
        },
      }}
    >
      <div style={{ position: 'relative' }}>
        <CardHeader
          action={
            <IconButton
              aria-label="class-more-options"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(10, 10, 10, 0.1)',
                },
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            alt="class-background"
            height="125"
            image={require(`../../assets/images/${background}`).default}
          />
        </CardActionArea>
      </div>

      <CardContent sx={{ minHeight: 135 }}>
        <Typography gutterBottom variant="h5" component="p" sx={{ color: '#263248' }}>
          {classItem.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {classItem.section}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
