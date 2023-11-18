import React from 'react'
import './main.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Main = () => {
    const apartments = [
        { id:1, name: 'Alliance', description: 'description', rate: '★★★★★', imgSrc:'https://alliance.ge/static/media/kH2mgqOnyfwcl8g8R7O02MrHhwRdfgeSXAmSUpIN.png' },
        { id:2, name: 'saxeli', description: 'description', rate: '★★★★', imgSrc:'https://alliance.ge/static/media/kH2mgqOnyfwcl8g8R7O02MrHhwRdfgeSXAmSUpIN.png' },
        { id:3, name: 'DarBuilding', description: 'description', rate: '★★★', imgSrc:'https://darbuilding.ge/projects/dar-tower/1.jpg' }
    ]
    const { t } = useTranslation()
    return (
        <div className='main'>
            <div className="hero">
                <div className='hero_content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem in a odit vero. Illum dolorum recusandae vitae sequi veniam pariatur vero?</p>
                    <button className='hero_button'>
                        {t('explore')}
                    </button>
                </div>
            </div>
            <h1>Apartments</h1>
            <hr />
            <div className="apartments">
                {apartments.map((apartment) => (
                    <Card maxW='sm' key={apartment.id}>
                        <CardBody>
                            <Image
                                src={apartment.imgSrc}
                                alt='Green double couch with wooden legs'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{apartment.name}</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {apartment.rate}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Link to={`/${apartment.name}`}>
                                    <Button variant='solid' colorScheme='blue'>
                                        See More
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Main