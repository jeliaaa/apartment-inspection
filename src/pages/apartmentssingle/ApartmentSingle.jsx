import { Container, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './apartmentssingle.scss'
import almare from '../../assets/apartsImages/almare1.jpg'
import map from '../../assets/banners/map-pic.jpg'

const ApartmentSingle = () => {
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
    const Scroll = require('react-scroll')
    const scroll = Scroll.animateScroll
    useEffect(() => {
        scroll.scrollToTop()
    })
    return (
        <div className='apartment_single'>
            <button className='back-but'>Back</button>
            <div className="upper-pg">
                <div className="upper-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, obcaecati.</span>
                    <div className="inner-info">
                        <img src={almare} alt="" />
                        <div className="txt">
                            <p>Lorem, ipsum dolor.</p>
                            <p>Lorem, ipsum dolor</p>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        
                    </div>

                    <p className='description'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            
            <div className="lower-pg">
                <div className="info_table">
                    <TableContainer>
                        <Table variant='striped'>
                            <Thead>
                                <Tr>
                                    <Th>დასახელება</Th>
                                    <Th>ხარისხი</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>ლიფტი</Td>
                                    <Td>უმაღლესი - comp</Td>
                                </Tr>
                                <Tr>
                                    <Td>ინტერნეტი</Td>
                                    <Td>დაბალი - ERA</Td>
                                </Tr>
                                <Tr>
                                    <Td>საკეტი</Td>
                                    <Td>საშუალო - comp</Td>
                                </Tr>
                                <Tr>
                                    <Td>საკეტი</Td>
                                    <Td>საშუალო - comp</Td>
                                </Tr>
                                <Tr>
                                    <Td>საკეტი</Td>
                                    <Td>საშუალო - comp</Td>
                                </Tr>
                                <Tr>
                                    <Td>საკეტი</Td>
                                    <Td>საშუალო - comp</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="price">
                    <img src={map} alt="" className='map'/>
                    <button>documentation/History</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem earum sit accusantium? Consequatur, dignissimos?</p>
                </div>
            </div>
        </div>
    )
}

export default ApartmentSingle