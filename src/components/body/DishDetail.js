import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import CommentForm from "./CommentForm";
import LoadCommemts from "./LoadComments";

const DishDetail = props => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            <p>{props.dish.description}</p>
            <p>{props.dish.price}/-</p>
            <p>{props.dish.lavel}</p>
          </CardText>
          <hr />
          <LoadCommemts comments={props.comments} />
          <hr />
          <CommentForm dishId={props.dish.id} addComment={props.addComment} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
