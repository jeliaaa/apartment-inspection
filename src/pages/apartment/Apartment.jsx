import { Card, CardBody, CardFooter, Divider, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, filter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './apartment.scss'
import apartmentImg from '../../assets/apartsImages/apartment.jpg'
import apartmentsHero from '../../assets/apartsImages/apartmentsHero.jpg'
import numIcon from '../../assets/icons/numberIcon.png'
const Apartment = () => {
    let data = [
        {id :'1', address: "Chavch1a", sadarbazo: "ravi"},
        {id :'2', address: "Chavch2a", sadarbazo: "ravi"},
        {id :'3', address: "Chavch3a", sadarbazo: "ravi"},
        {id :'4', address: "Chavch4a", sadarbazo: "ravi"},
        {id :'5', address: "Chavch5a", sadarbazo: "ravi"},
        {id :'6', address: "Chavch6a", sadarbazo: "ravi"},
        {id :'7', address: "Chavch7a", sadarbazo: "ravi"},
        {id :'8', address: "Chavch8a", sadarbazo: "ravi"},
        {id :'9', address: "Chavch9a", sadarbazo: "ravi"},
        {id :'10', address: "Chavch10a", sadarbazo: "ravi"},
        {id :'11', address: "Chavch11a", sadarbazo: "ravi"},
        {id :'12', address: "Chavch12a", sadarbazo: "ravi"},
        {id :'13', address: "Chavch13a", sadarbazo: "ravi"},
        {id :'14', address: "Chavch14a", sadarbazo: "ravi"},
        {id :'15', address: "Chavch15a", sadarbazo: "ravi"},
        {id :'16', address: "Chavch16a", sadarbazo: "ravi"},
        {id :'17', address: "Chavch17a", sadarbazo: "ravi"},
        {id :'18', address: "Chavch18a", sadarbazo: "ravi"},
        {id :'19', address: "Chavch19a", sadarbazo: "ravi"},
        {id :'20', address: "Chavch20a", sadarbazo: "ravi"},
]

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
            item.id === searchTerm
        )

        if (searchTerm === '') {
            setFilteredData(data);
        } else {
            setFilteredData(filteredData);
        }
    };

    return (
        <div className='apartment'>
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
                <Link key={e.id} to={`${e.id}`}>
                    <Card maxW='sm' >
                        <CardBody className='card-white'>
                            <Image
                                src={apartmentImg}
                                alt='Green double couch with wooden legs'
                            />

                        </CardBody>
                        <Divider />
                        <CardFooter sx={{ backgroundColor: 'black', color: 'white' }}>
                            <Stack>
                                <div>
                                    <h4>Apartment N{e.id}</h4>
                                    <div className="hovered">
                                        <p className='address'>address: {e.address}</p>
                                        <p className='sadarbazo'>sadarbazo: {e.sadarbazo}</p>
                                    </div>
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