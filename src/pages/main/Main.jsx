import React, { useEffect } from 'react'
import './main.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Element, Link as LinkScroll } from 'react-scroll'
import heroImg from '../../assets/banners/mainHero.jpg'
import almare from '../../assets/apartsImages/almare1.jpg'
const Main = () => {
    const Scroll = require('react-scroll')
    const scroll = Scroll.animateScroll
    useEffect(() => {
        scroll.scrollToTop()
    })
    const apartments = [
        { id: 1, name: 'Alliance', description: 'description', rate: '★★★★★', imgSrc: 'https://alliance.ge/static/media/kH2mgqOnyfwcl8g8R7O02MrHhwRdfgeSXAmSUpIN.png' },
        { id: 2, name: 'Almare', description: 'description', rate: '★★★★★', imgSrc: almare },
        { id: 3, name: 'DarBuilding', description: 'description', rate: '★★★', imgSrc: 'https://darbuilding.ge/projects/dar-tower/1.jpg' }
    ]
    const { t } = useTranslation()
    return (
        <div className='main'>
            <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className='hero_content'>
                    <p>იცხოვრეთ უკეთეს გარემოში, იმაზე უფრო კომფორტულად ვიდრე ოდესმე წარმოგედგინათ!</p>
                    <LinkScroll
                        to='apartments'
                        className='hero_button'
                        smooth={true}
                    >
                        {t('explore')}
                    </LinkScroll>
                </div>
            </div>
            <Element name='apartments'>
                <h1>{t('apartments')}</h1>
                <hr />
                <div className="apartments">
                    {apartments.map((apartment) => (
                        <Card className='cardOfMain' maxW='sm' key={apartment.id}>
                            <CardBody>
                                <div
                                    src={apartment.imgSrc}
                                    style={{ backgroundImage: `url(${apartment.imgSrc})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: 400 }}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{apartment.name}</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                    <Text color='yellow.500' fontSize='2xl'>
                                        {apartment.rate}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Link to={`/${apartment.name}`}>
                                        <Button variant='solid' className='card_button'>
                                            {t('view')}
                                        </Button>
                                    </Link>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Element>
        </div>
    )
}

export default Main