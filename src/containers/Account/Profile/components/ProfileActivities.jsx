import React from 'react';
import ProfileActivity from './ProfileActivity';

const Ava1 = `${process.env.PUBLIC_URL}/img/12.png`;
const Ava2 = `${process.env.PUBLIC_URL}/img/15.png`;
const Ava3 = `${process.env.PUBLIC_URL}/img/11.png`;
const Ava4 = `${process.env.PUBLIC_URL}/img/photo_notification.png`;
const Img1 = `${process.env.PUBLIC_URL}/img/9.png`;
const Img2 = `${process.env.PUBLIC_URL}/img/13.png`;

const data = [
  {
    id: 1,
    avatar: Ava1,
    date: '1 min ago',
    name: 'Roman Johnson',
    text: 'Added new Restaraunts.',
    photos: [],
  },
];

const ProfileActivities = () => (
  <div>
    {data.map(item => (
      <ProfileActivity key={item.id} img={item.avatar} date={item.date} name={item.name}>
        <p>{item.text}</p>
        {item.photos.map(photo => <img key={photo.id} src={photo.src} alt={photo.alt} />)}
      </ProfileActivity>
    ))}
  </div>
);

export default ProfileActivities;
