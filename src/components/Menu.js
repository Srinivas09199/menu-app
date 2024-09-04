import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from './MenuItem';
import homeImage from '../images/home.jpeg';
import moviesImage from '../images/movies.jpeg';
import tvShowsImage from '../images/tvshows.jpeg';
import sportsImage from '../images/sports.jpeg';
import liveImage from '../images/live.jpeg';

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    { title: t('home'), image: homeImage },
    { title: t('movies'), image: moviesImage },
    { title: t('tvShows'), image: tvShowsImage },
    { title: t('sports'), image: sportsImage },
    { title: t('live'), image: liveImage }
  ];

  return (
    <div>
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item.title} image={item.image} />
      ))}
    </div>
  );
};

export default Menu;
