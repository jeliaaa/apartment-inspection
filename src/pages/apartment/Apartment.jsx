import { Card, CardBody, CardFooter, Divider, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './apartment.scss'
const Apartment = () => {
    const { name } = useParams()
    return (
        <div className='apartment'>
            {[1, 2, 3, 4, 5,6, 7, 8, 9, 10].map((e) => (
                <Link key={e} to={`${e}`}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={'https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/apartment-icon.png'}
                                alt='Green double couch with wooden legs'
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter sx={{ backgroundColor: 'blue', color: 'white' }}>
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