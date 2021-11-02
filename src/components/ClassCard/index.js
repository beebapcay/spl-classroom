import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ClassCard = () => {
  return (
    <Card sx={{ width: 350 }}>
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
            height="140"
            image="https://source.unsplash.com/collection/190727/500x850"
          />
        </CardActionArea>
      </div>

      <CardContent sx={{ minHeight: 150 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Class Name
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Class Type
        </Typography>
      </CardContent>

      <Divider />

      <CardActions sx={{ justifyContent: 'end' }}>
        <IconButton aria-label="class-trending-up">
          <TrendingUpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ClassCard;