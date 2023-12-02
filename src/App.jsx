import { Button, Menu, MenuButton, MenuItem, MenuList, Select } from '@chakra-ui/react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import './i18n'
import { useEffect, useState } from 'react';
import Main from './pages/main/Main';
import { Link, Route, Routes } from 'react-router-dom';
import Apartment from './pages/apartment/Apartment';
import mainLogo from './assets/logos/mainLogo.png'
import ApartmentSingle from './pages/apartmentssingle/ApartmentSingle';
function App() {
  const { t, i18n } = useTranslation();
  const [val, setVal] = useState('');
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.currentTarget.value);
    setVal(e.target.value)
  };
  
  return (
    <div className="App">
      <header>
        <div className="logo_wrapper">
          <div className='mainLogo' style={{ backgroundImage: `url(${mainLogo})` }} />
          <Link to={'/'}><span>Apartment Inspection</span></Link>
        </div>
        <Menu>
          <MenuButton as={Button} >
            {t('lang')}
          </MenuButton>
          <MenuList>
            <MenuItem value={'ge'} onClick={(e) => changeLanguage(e)}>ქართული</MenuItem>
            <MenuItem value={'en'} onClick={(e) => changeLanguage(e)}>English</MenuItem>
          </MenuList>
        </Menu>
      </header>
      <div className='render_space'>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/:name' element={<Apartment />} />
          <Route path='/:name/:id' element={<ApartmentSingle />} />
        </Routes>
      </div>
      <footer>
        <div className="upper-footer">
          <img src={mainLogo} alt=""/>
          <div className="usefull-links">
            <h1>Usefull Links</h1>
            <ul>
              <li><a href="http://localhost:3001/Almare">Almare apartments</a></li>
              <li><a href="http://localhost:3001/Alliance">Alliance apartments</a></li>
              <li><a href="http://localhost:3001/DarBuilding">DarBuilding apartments</a></li>
            </ul>
            
            
          </div>
          <div className="contact">
            <h1>Contact us</h1>
            <a href="mailto:your-email@gmail.com" target="_blank">Send us an email</a>
            <p>+9962363151332</p>
            <p>Aghmasheneblis 2a</p>
          </div>
        </div>
        <div className="bottom-footer">
          <p>©2023 HRADJARA.GOV.GE</p>
          <p>All rights reserved ©</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
