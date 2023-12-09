import { Card, CardBody, CardFooter, Divider, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, filter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './apartment.scss'
import apartmentImg from '../../assets/apartsImages/apartment.jpg'
import apartmentsHero from '../../assets/apartsImages/apartmentsHero.jpg'
import numIcon from '../../assets/icons/numberIcon.png'
import BackBtn from '../../ReusableComps/backbtn/BackBtn'
import { useTranslation } from 'react-i18next'
const Apartment = () => {
    let data = [
        {id :'1', address: "Chavch1a", sadarbazo: "1"},
        {id :'2', address: "Chavch2a", sadarbazo: "1"},
        {id :'3', address: "Chavch3a", sadarbazo: "1"},
        {id :'4', address: "Chavch4a", sadarbazo: "1"},
        {id :'5', address: "Chavch5a", sadarbazo: "1"},
        {id :'6', address: "Chavch6a", sadarbazo: "1"},
        {id :'7', address: "Chavch7a", sadarbazo: "1"},
        {id :'8', address: "Chavch8a", sadarbazo: "2"},
        {id :'9', address: "Chavch9a", sadarbazo: "2"},
        {id :'10', address: "Chavch10a", sadarbazo: "2"},
        {id :'11', address: "Chavch11a", sadarbazo: "2"},
        {id :'12', address: "Chavch12a", sadarbazo: "2"},
        {id :'13', address: "Chavch13a", sadarbazo: "2"},
        {id :'14', address: "Chavch14a", sadarbazo: "2"},
        {id :'15', address: "Chavch15a", sadarbazo: "2"},
        {id :'16', address: "Chavch16a", sadarbazo: "3"},
        {id :'17', address: "Chavch17a", sadarbazo: "3"},
        {id :'18', address: "Chavch18a", sadarbazo: "3"},
        {id :'19', address: "Chavch19a", sadarbazo: "3"},
        {id :'20', address: "Chavch20a", sadarbazo: "3"},
]

    const { name } = useParams()
    const { t } = useTranslation();
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
            <BackBtn />
            <div className="aparts_hero" style={{ backgroundImage: `url(${apartmentsHero})` }}>
            </div>
            <div className='search_aparts'>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <img width={20} src={numIcon} />
                        </InputLeftElement>
                        <Input onChange={handleInputChange} type='number' placeholder={t('enter')} />
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
                                    <h4>{t('apartment')} N{e.id}</h4>
                                    <div className="hovered">
                                        <p className='address'>{t('address')}: {e.address}</p>
                                        <p className='sadarbazo'>{t('entrance')} : {e.sadarbazo}</p>
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