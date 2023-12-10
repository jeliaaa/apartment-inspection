import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './apartmentssingle.scss'
import almare from '../../assets/apartsImages/almare1.jpg'
import map from '../../assets/banners/map-pic.jpg'
import apartBanner from '../../assets/apartsImages/apartment.jpg'
import BackBtn from '../../ReusableComps/backbtn/BackBtn';
import { useTranslation } from 'react-i18next';
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS for styling (optional)
import Gallery from 'react-image-gallery';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

const ApartmentSingle = () => {
    const { t } = useTranslation();
    const { name, id } = useParams();
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

    const data = [
        { id: 1, area: 61.9, housemaster: 'გიორგი გიორგაძე', date: '15-07-2022', owners: 1, info: 'ინფორმაცია ბინაზე N1', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 4, renovationQuality: 10, santeqnika: 2, eleqtronika: 10, Internet: 10 } },
        { id: 2, area: 45.5, housemaster: 'გიორგი გიორგაძე', date: '15-03-2022', owners: 3, info: 'ინფორმაცია ბინაზე N2', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 7, renovationQuality: 6, santeqnika: 3, eleqtronika: 5, Internet: 8 } },
        { id: 3, area: 48.0, housemaster: 'გიორგი გიორგაძე', date: '13-02-2019', owners: 12, info: 'ინფორმაცია ბინაზე N3', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 8, renovationQuality: 7, santeqnika: 4, eleqtronika: 6, Internet: 5 } },
        { id: 4, area: 81.9, housemaster: 'გიორგი გიორგაძე', date: '15-07-2022', owners: 1, info: 'ინფორმაცია ბინაზე N4', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 10, renovationQuality: 4, santeqnika: 8, eleqtronika: 8, Internet: 4 } },
        { id: 5, area: 78.0, housemaster: 'გიორგი გიორგაძე', date: '19-08-2022', owners: 3, info: 'ინფორმაცია ბინაზე N5', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 4, renovationQuality: 10, santeqnika: 2, eleqtronika: 10, Internet: 10 } },
        { id: 6, area: 35.8, housemaster: 'გიორგი გიორგაძე', date: '01-07-2021', owners: 4, info: 'ინფორმაცია ბინაზე N6', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 7, renovationQuality: 6, santeqnika: 3, eleqtronika: 5, Internet: 8 } },
        { id: 7, area: 46.9, housemaster: 'გიორგი გიორგაძე', date: '05-05-2020', owners: 5, info: 'ინფორმაცია ბინაზე N7', qualities: { elevator: { name: 'Honda', elevatorQuality: 7 }, entranceQuality: 8, renovationQuality: 7, santeqnika: 4, eleqtronika: 6, Internet: 5 } },
        { id: 8, area: 78.1, housemaster: 'გიორგი გიორგაძე', date: '05-10-2023', owners: 1, info: 'ინფორმაცია ბინაზე N8', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 10, renovationQuality: 4, santeqnika: 8, eleqtronika: 8, Internet: 4 } },
        { id: 9, area: 41.5, housemaster: 'გიორგი გიორგაძე', date: '03-05-2023', owners: 1, info: 'ინფორმაცია ბინაზე N9', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 4, renovationQuality: 10, santeqnika: 2, eleqtronika: 10, Internet: 10 } },
        { id: 10, area: 63.3, housemaster: 'გიორგი გიორგაძე', date: '02-02-2022', owners: 1, info: 'ინფორმაცია ბინაზე N10', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 7, renovationQuality: 6, santeqnika: 3, eleqtronika: 5, Internet: 8 } },
        { id: 11, area: 29.6, housemaster: 'გიორგი გიორგაძე', date: '02-04-2022', owners: 1, info: 'ინფორმაცია ბინაზე N11', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 8, renovationQuality: 7, santeqnika: 4, eleqtronika: 6, Internet: 5 } },
        { id: 12, area: 65.9, housemaster: 'გიორგი გიორგაძე', date: 'არ დასრულებულა', owners: 0, info: 'ინფორმაცია ბინაზე N12', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 10, renovationQuality: 4, santeqnika: 8, eleqtronika: 8, Internet: 4 } },
        { id: 13, area: 100.9, housemaster: 'გიორგი გიორგაძე', date: 'არ დასრულებულა', owners: 0, info: 'ინფორმაცია ბინაზე N13', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 4, renovationQuality: 10, santeqnika: 2, eleqtronika: 10, Internet: 10 } },
        { id: 14, area: 31.9, housemaster: 'გიორგი გიორგაძე', date: '02-05-2022', owners: 4, info: 'ინფორმაცია ბინაზე N14', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 7, renovationQuality: 6, santeqnika: 3, eleqtronika: 5, Internet: 8 } },
        { id: 15, area: 61.9, housemaster: 'გიორგი გიორგაძე', date: '05-01-2021', owners: 5, info: 'ინფორმაცია ბინაზე N15', qualities: { elevator: { name: 'Fuji', elevatorQuality: 9 }, entranceQuality: 8, renovationQuality: 7, santeqnika: 4, eleqtronika: 6, Internet: 5 } },
        { id: 16, area: 79.9, housemaster: 'გიორგი გიორგაძე', date: 'არ დასრულებულა', owners: 0, info: 'ინფორმაცია ბინაზე N16', qualities: { elevator: { name: 'Delta', elevatorQuality: 6 }, entranceQuality: 10, renovationQuality: 4, santeqnika: 8, eleqtronika: 8, Internet: 4 } },
        { id: 17, area: 70.6, housemaster: 'გიორგი გიორგაძე', date: '02-07-2023', owners: 1, info: 'ინფორმაცია ბინაზე N17', qualities: { elevator: { name: 'Delta', elevatorQuality: 6 }, entranceQuality: 4, renovationQuality: 10, santeqnika: 2, eleqtronika: 10, Internet: 10 } },
        { id: 18, area: 53.5, housemaster: 'გიორგი გიორგაძე', date: '19-05-2023', owners: 1, info: 'ინფორმაცია ბინაზე N18', qualities: { elevator: { name: 'Delta', elevatorQuality: 6 }, entranceQuality: 7, renovationQuality: 6, santeqnika: 3, eleqtronika: 5, Internet: 8 } },
        { id: 19, area: 81.7, housemaster: 'გიორგი გიორგაძე', date: '02-12-2022', owners: 2, info: 'ინფორმაცია ბინაზე N19', qualities: { elevator: { name: 'Delta', elevatorQuality: 6 }, entranceQuality: 8, renovationQuality: 7, santeqnika: 4, eleqtronika: 6, Internet: 5 } },
        { id: 20, area: 101.9, housemaster: 'გიორგი გიორგაძე', date: '11-12-2022 ', owners: 1, info: 'ინფორმაცია ბინაზე N20', qualities: { elevator: { name: 'Delta', elevatorQuality: 6 }, entranceQuality: 10, renovationQuality: 4, santeqnika: 8, eleqtronika: 8, Internet: 4 } },


    ]
    const Scroll = require('react-scroll')
    const scroll = Scroll.animateScroll
    useEffect(() => {
        scroll.scrollToTop()
    })
    var overall;
    return (
        <div className='apartment_single'>
            <div className='upper'>
                <div className='back_btn_wrap'>
                    <BackBtn />
                </div>
                <div className="upper-pg" style={{ backgroundImage: `url(${apartBanner})` }}>
                    {data.map((e) => {
                        if (e.id == id) {
                            return (
                                <div className="upper-content">
                                    <h2>{t('apartment')} N{e.id}</h2>
                                    <span>{e.info}</span>
                                    <div className="inner-info">
                                        <img src={imgSrc} alt="" />
                                        <div className="txt">
                                            <p>{t('date')} : {e.date}</p>
                                            <p>{t('owners')} : {e.owners}</p>
                                        </div>

                                    </div>
                                    <p className='description'>{t('housemaster')} : {e.housemaster}</p>
                                </div>

                            )
                        }
                    })}
                </div>
                <div className="lower-pg">
                    <div className="info_table">
                    <Link style={{backgroundColor:'yellow', padding:10, width:200, borderRadius:5, textAlign:'center', cursor:'pointer', fontWeight:'bolder'}} smooth to='gallery'>{t('viewPhotos')}</Link>
                        {data.map(e => {
                            if(e.id == id){
                                return <div style={{backgroundColor:'cornflowerblue', padding:10, width:200, borderRadius:5, textAlign:'center', backgroundBlendMode:'color-burn', color:'white', fontSize:25, fontWeight:'bold'}}>
                                    <span>{t('area')} : {e.area} {t('sqm')}</span>
                                </div>
                            }
                        })}
                        {data.map((e) => {
                            if (e.id == id) {
                                var arrayofData = Object.entries(e.qualities);
                                return arrayofData.map((i, index) => (
                                    <div key={index} className='info_element'>
                                        <div className="img_wrapp">
                                            <i className='fa-solid fa-elevator' />
                                        </div>
                                        <div className='description'>
                                            {typeof i[1] == 'object' ? (
                                                <>
                                                    <h3 style={{ fontWeight: 'bolder' }}>{t(`${i[0]}`)}</h3>
                                                    <h4>{t('production')} - {t(`${i[1].name}`)}</h4>
                                                    <p>{t(`${i[1].elevatorQuality}`)} / 10</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h4>{t(`${i[0]}`)}</h4>
                                                    <p>{i[1]} / 10</p>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                ));
                            }
                            return null; // Add this line if you want to handle the case where e.id !== id
                        })}
                        {data.map((e) => {
                            if (e.id == id) {
                                overall = (e.qualities.Internet + e.qualities.eleqtronika + e.qualities.elevator.elevatorQuality + e.qualities.entranceQuality + e.qualities.santeqnika + e.qualities.renovationQuality) / 6;
                                let formattedNumberString = overall.toFixed(1);
                                overall = parseFloat(formattedNumberString);
                            }
                        })}
                        <div className='overall' style={{ backgroundColor: 'darkblue', color: '#fff', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 25, padding: 20, fontSize: 50, fontWeight: 'bolder' }}>
                            <h1>{overall}</h1>
                        </div>

                    </div>
                    <div className="price">
                        <img src={map} alt="" className='map' />
                        <NavLink target='_blank' download to={'./dummy.pdf'} className='download'>{t('docs')}</NavLink>
                        <p>
                            <ul>
                                <li>გიორგი გიორგაძე</li>
                                <li>555-55-55-55</li>
                                <li>ggiorgadze@gmail.com</li>
                            </ul>
                        </p>
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

export default ApartmentSingle