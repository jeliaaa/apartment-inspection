import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './back.scss';
import { useTranslation } from 'react-i18next';

const BackBtn = () => {
  const pathObj = useLocation();
  const path = pathObj.pathname;
  let pathArr = path.split('/');
  pathArr.splice(pathArr.length - 1);
  const { t } = useTranslation();;
  pathArr.splice(0,1)

  const newPath = `/${pathArr.join('/')}`;

  return (
    <div className='back_btn_wrap'>
      <Link to={newPath}>
        <button className='back'>{t('back')}</button>
      </Link>
    </div>
  );
};

export default BackBtn;