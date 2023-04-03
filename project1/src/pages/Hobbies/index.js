import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://thumbs.dreamstime.com/b/happy-teen-singing-listening-to-music-phone-home-wearing-headphones-smart-196296493.jpg',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.II9ZSlgCiXrt5jys-e29tgAAAA?pid=ImgDet&w=300&h=300&rs=1',
    title: 'Photography',
    
  },
  {
    img: 'https://i.pinimg.com/originals/fa/6f/55/fa6f55c25e2ec3f7aa72e1f3ad59be67.jpg',
    title: 'Dancing',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/beautiful-girl-autumn-field-reading-book-girl-sitting-grass-reading-book-rest-reading-outdoor-reading-128807768.jpg',
    title: 'Reading Books',
    
    cols: 2,
  },
  {
    img: 'https://cdn.totalsororitymove.com/wp-content/uploads/2014/07/f08c72c596dc94606408aa903c4a2f2a-714x400.png',
    title: 'Watching webseries',
    
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/originals/81/f5/60/81f5601d5b5e6d037479b0ed9a13396f.jpg',
    title: 'Shopping',
    
    rows: 2,
    cols: 2,
    featured: true,
  },

];
