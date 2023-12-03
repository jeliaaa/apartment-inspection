import { Card, CardBody, CardFooter, Divider, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, filter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './apartment.scss'
import apartmentImg from '../../assets/apartsImages/apartment.jpg'
import apartmentsHero from '../../assets/apartsImages/apartmentsHero.jpg'
import numIcon from '../../assets/icons/numberIcon.png'
import BackBtn from '../../ReusableComps/backbtn/BackBtn'
const Apartment = () => {
    let data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    const { name } = useParams()
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const Scroll = require('react-scroll')
    const scroll = Scroll.animateScroll
    useEffect(() => {
        scroll.scrollToTop()
    })

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };


    const filterData = (searchTerm) => {
        const filteredData = data.filter((item) =>
            item === searchTerm
        )

        if (searchTerm === '') {
            setFilteredData(data);
        } else {
            setFilteredData(filteredData);
        }
    };

    return (
        <div className='apartment'>
            <BackBtn />
            <div className="aparts_hero" style={{ backgroundImage: `url(${apartmentsHero})` }}>
            </div>
            <div className='search_aparts'>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <img width={20} src={numIcon} />
                        </InputLeftElement>
                        <Input onChange={handleInputChange} type='number' placeholder='შეიყვანეთ ბინის ნომერი' />
                    </InputGroup>
                </Stack>
            </div>
            {filteredData.map((e) => (
                <Link key={e} to={`${e}`}>
                    <Card maxW='sm' >
                        <CardBody>
                            <Image
                                src={apartmentImg}
                                alt='Green double couch with wooden legs'
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter sx={{ backgroundColor: 'black', color: 'white' }}>
                            <Stack>
                                <div>
                                    <h4>Apartment N{e}</h4>
                                </div>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

export default Apartment