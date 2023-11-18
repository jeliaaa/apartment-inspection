import { Container, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import './apartmentssingle.scss'

const ApartmentSingle = () => {
    const { id } = useParams();
    return (
        <div className='apartment_single'>
            <div className="left_side">
                <div className="img_wrap">
                    <img src='https://darbuilding.ge/projects/dar-tower/1.jpg' alt='...' />
                </div>
                <div className="banner">
                    <h4>Dar Building Apartment N{id}</h4>
                </div>
            </div>
            <div className="right_side">
                    <div className="rating">
                        4.7 / 5
                    </div>
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
                        <p>50$</p>
                        <button>I want to purchase</button>
                    </div>
            </div>
        </div>
    )
}

export default ApartmentSingle