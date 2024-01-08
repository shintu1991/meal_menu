import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const MenuItem = ({ item }) => {
    return (
        <Card className="menu-item">
            <CardImg src={item.strMealThumb} alt="meal" style={{ height: '20vw', width: '100%' }} />
            <CardBody>
                <CardTitle>{item.strMeal}</CardTitle>
            </CardBody>
        </Card>
    )
};

export default MenuItem;