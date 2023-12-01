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
          <Link to={'/'}><span>Apartments Inspection</span></Link>
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
        <h4>All rights reserved &copy;</h4>
      </footer>
    </div>
  );
}

export default App;
