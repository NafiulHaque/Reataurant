import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {

    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: "0.7", }}
                    />

                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer", color: "white", fontSize: "25px" }}
                            onClick={props.DishSelect}
                        >{props.dish.name}

                        </CardTitle>

                    </CardImgOverlay>

                    {props.dish.description}

                    <h4>Price: {props.dish.price} Tk</h4>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;