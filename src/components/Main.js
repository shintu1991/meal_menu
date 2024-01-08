import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';
import { Container, Col, Row} from 'reactstrap';

const Main = () => {

    const[menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res) =>{
            //console.log(res.data);
            setMenuItem(res.data.meals)
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    return (
        <section>
            <div className='page-title'><h4>Latest Meals</h4></div>
            <div className='meal-list'>
                <Container fluid>
                    <Row className='menu-list'>
                        {menuItem.map(
                            item => (
                                <Col sm={4}>
                                    <MenuItem item={item} key={item.idMeal} />
                                </Col>
                )
                  )}
                         </Row>
                </Container>
            </div>
        </section>
    )
};

export default Main;