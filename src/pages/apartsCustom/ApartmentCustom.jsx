import React, { useEffect, useState } from 'react'
import './apartsCustom.scss'
import { NavLink, useParams } from 'react-router-dom'
import map from '../../assets/banners/map-pic.jpg'
import apartBanner from '../../assets/apartsImages/apartment.jpg'
import almare from '../../assets/apartsImages/almare1.jpg'
import BackBtn from '../../ReusableComps/backbtn/BackBtn';
import { useTranslation } from 'react-i18next';
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS for styling (optional)
import Gallery from 'react-image-gallery';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import '../apartmentssingle/apartmentssingle.scss'
import { Divider, FormLabel, Input, Select, Stack } from '@chakra-ui/react'


const images = [
    {
        original: apartBanner,
        thumbnail: apartBanner,
        description: 'ფოტო 1',
    },
    {
        original: apartBanner,
        thumbnail: apartBanner,
        description: 'ფოტო 2',
    },
    {
        original: apartBanner,
        thumbnail: apartBanner,
        description: 'ფოტო 3',
    },
    {
        original: apartBanner,
        thumbnail: apartBanner,
        description: 'ფოტო 4',
    }
    // Add more images as needed
];
const ApartmentCustom = () => {
    const Scroll = require('react-scroll')
    const scroll = Scroll.animateScroll
    // useEffect(() => {
    //     scroll.scrollToTop()
    // }, [])
    var overall = 0;
    var counter = 0;
    const { t } = useTranslation();
    const { name, id } = useParams();
    const [data, setData] = useState([]);
    const [houseInfo, setHouseInfo] = useState({});
    const [houseMasterInfo, setHouseMasterInfo] = useState({});
    const [selectedNames, setSelectedNames] = useState([]);


    const imagesOfAparts = {
        'Almare': `${almare}`,
        'Alliance': 'https://alliance.ge/static/media/kH2mgqOnyfwcl8g8R7O02MrHhwRdfgeSXAmSUpIN.png',
        'DarBuilding': 'https://darbuilding.ge/projects/dar-tower/1.jpg'
    }
    var imgSrc = '';
    Object.keys(imagesOfAparts).forEach((e) => {
        if (e === name) {
            imgSrc = imagesOfAparts[e];
        }
    });
    const changeOfSelect = (e) => {
        if (e.currentTarget.value != 0) {
            const newName = e.currentTarget.id;
            const newValue = parseInt(e.currentTarget.value, 10);
            const updatedData = data.map(item => {
                if (item.name === newName) {
                    return { name: newName, value: newValue };
                }
                return item;
            });
            if (!updatedData.some(item => item.name === newName)) {
                updatedData.push({ name: newName, value: newValue });
            }
            setData(updatedData);
        };
    }
    const changeOfHouseInfo = (e) => {
        const newName = e.currentTarget.id;
        const newValue = e.currentTarget.value;
        const updatedData = { ...houseInfo, [newName]: newValue };
        setHouseInfo(updatedData);
    }
    const changeOfHouseMasterInfo = (e) => {
        const newName = e.currentTarget.id;
        const newValue = e.currentTarget.value;
        const updatedData = { ...houseMasterInfo, [newName]: newValue };
        setHouseMasterInfo(updatedData);
    }
    const filter = (name) => {
        setSelectedNames((prevSelectedNames) => {
            const isSelected = prevSelectedNames.includes(name);

            if (isSelected) {
                // If the name is already selected, remove it
                return prevSelectedNames.filter((selectedName) => selectedName !== name);
            } else {
                // If the name is not selected, add it
                return [...prevSelectedNames, name];
            }
        });

    };
    selectedNames.forEach((name) => {
        const index = data.findIndex((item) => item.name === name);
        if (index !== -1) {
            overall += data[index].value;
            counter++;
        }
    });
    overall = counter === 0 ? 0 : overall / counter;
    let formattedNumberString = overall.toFixed(1);
    overall = parseFloat(formattedNumberString);

    const dataNames = ['elevator', 'entrance', 'santeqnika', 'renovationQuality', 'eleqtronika', 'Internet']
    return (
        <div className='apartment_single'>
            <div className='upper'>
                <div className='back_btn_wrap'>
                    <BackBtn />
                </div>
                <div className="upper-pg" style={{ backgroundImage: `url(${apartBanner})` }}>
                    <div className="upper-content">
                        <h2>{t('apartment')} #{houseInfo.apartId}</h2>
                        <span>info</span>
                        <div className="inner-info">
                            <img src={imgSrc} alt="" />
                            <div className="txt">
                                <p>{t('date')} : {houseInfo.date}</p>
                                <p>{t('owners')} : {houseInfo.owners}</p>
                            </div>

                        </div>
                        <p className='description'>{t('housemaster')} : {houseMasterInfo.name}</p>
                    </div>
                </div>
                <div className="lower-pg">
                    <div className="info_table">
                        <Link style={{ backgroundColor: 'yellow', padding: 10, width: 200, borderRadius: 5, textAlign: 'center', cursor: 'pointer', fontWeight: 'bolder' }} smooth to='gallery'>{t('viewPhotos')}</Link>
                        <div style={{ backgroundColor: 'cornflowerblue', padding: 10, width: 200, borderRadius: 5, textAlign: 'center', backgroundBlendMode: 'color-burn', color: 'white', fontSize: 25, fontWeight: 'bold' }}>
                            <span>{t('area')} : {houseInfo.area} {t('sqm')}</span>
                        </div>
                        <form style={{ width: '100%' }}>
                            <Stack spacing={3}>
                                <FormLabel>{t('apartId')}</FormLabel>
                                <Input type='number' placeholder={t('apartId')} id='apartId' size='lg' onChange={(e) => changeOfHouseInfo(e)} />
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('area')}</FormLabel>
                                <Input type='number' placeholder={t('area')} id='area' size='lg' onChange={(e) => changeOfHouseInfo(e)} />
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('date')}</FormLabel>
                                <Input type='date' placeholder={t('date')} id='date' size='lg' onChange={(e) => changeOfHouseInfo(e)} />
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('owners')}</FormLabel>
                                <Input type='number' placeholder={t('owners')} id='owners' size='lg' onChange={(e) => changeOfHouseInfo(e)} />
                            </Stack>
                            <Divider style={{ marginTop: 20 }} />
                            <h1 style={{ textAlign: 'center', fontSize: 30 }}>{t('housemaster')}</h1>
                            <Stack spacing={3}>
                                <FormLabel>{t('name')}</FormLabel>
                                <Input placeholder={t('name')} id='name' size='lg' onChange={(e) => changeOfHouseMasterInfo(e)} />
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('phone')}</FormLabel>
                                <Input id='phone' placeholder={t('phone')} size='lg' onChange={(e) => changeOfHouseMasterInfo(e)} />
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('mail')}</FormLabel>
                                <Input type='email' placeholder={t('mail')} id='mail' size='lg' onChange={(e) => changeOfHouseMasterInfo(e)} />
                            </Stack>
                            <Divider style={{ marginTop: 20 }} />
                            <Stack spacing={3}>
                                <FormLabel>{t('elevator')}</FormLabel>
                                <Select placeholder={t('elevator')} id='elevator' size='lg' onChange={(e) => changeOfSelect(e)} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>

                                </Select>
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('entrance')}</FormLabel>
                                <Select placeholder={t('entrance')} id='entrance' size='lg' onChange={(e) => changeOfSelect(e)} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>

                                </Select>
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('renovationQuality')}</FormLabel>
                                <Select placeholder={t('renovationQuality')} id='renovation' size='lg' onChange={(e) => changeOfSelect(e)} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>

                                </Select>
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('santeqnika')}</FormLabel>
                                <Select placeholder={t('santeqnika')} id='santeqnika' size='lg' onChange={(e) => changeOfSelect(e)} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>

                                </Select>
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('eleqtronika')}</FormLabel>
                                <Select placeholder={t('eleqtronika')} id='eleqtronika' size='lg' onChange={(e) => changeOfSelect(e)} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>

                                </Select>
                            </Stack>
                            <Stack spacing={3}>
                                <FormLabel>{t('Internet')}</FormLabel>
                                <Select placeholder={t('Internet')} id='Internet' size='lg' onChange={(e) => changeOfSelect(e)} >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>

                                </Select>
                            </Stack>
                        </form>
                        {data.map((e, index) => (
                            <div key={index} className='info_element'>
                                <div className="img_wrapp">
                                    <i className='fa-solid fa-elevator' />
                                </div>
                                <div className='description'>
                                    <h4>{t(`${e.name}`)}</h4>
                                    <p>{e.value} / 10</p>
                                </div>
                            </div>
                        ))}
                        <div>
                            {['elevator', 'entrance', 'renovationQuality', 'santeqnika', 'eleqtronika', 'Internet'].map((number) => (
                                <button
                                    key={number}
                                    onClick={() => filter(number)}
                                    style={{
                                        backgroundColor: selectedNames.includes(number) ? 'gray' : 'yellow',
                                        margin: '5px',
                                        padding: '20px',
                                        cursor: 'pointer',
                                        borderRadius: 5,
                                    }}
                                >
                                    {t(`${number}`)}
                                </button>
                            ))}
                        </div>

                        <div className='overall' style={{ backgroundColor: 'darkblue', color: '#fff', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 25, padding: 20, fontSize: 50, fontWeight: 'bolder' }}>
                            <h1>{overall}</h1>
                        </div>
                        <div style={{ padding: 50, backgroundColor: 'yellow', borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ul>
                                <li>{houseMasterInfo.name}</li>
                                <li>{houseMasterInfo.phone}</li>
                                <li>{houseMasterInfo.mail}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Element name='gallery' className='gallery'>
                <Gallery
                    items={images}
                />
            </Element>
        </div>
    )
}

export default ApartmentCustom