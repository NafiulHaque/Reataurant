import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';
import LoadCommemts from "./LoadComments"

const DishDetail = props =>{
    console.log(props.dish.comments[0].author);
    return(
        <div>
            <Card style={{ marginTop:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{ textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>
                        <p>{props.dish.lavel}</p>
                        </CardText>
                        <hr/>
                        <LoadCommemts comments={props.dish.comments}/>

                </CardBody>
            </Card>
            
        </div>
    );
}

export default DishDetail;