import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';



export function MovieCard({data}) {
  
  return (
    <Card style={{ width: '10rem', backgroundColor:"black", borderRadius:"0%" }}>
      <Card.Img variant="top" src={data.imgUrl} />
      <Card.Body>
        <Card.Title style={{  color:"#0882e5" }}>Movie Title:</Card.Title>
        <Card.Title style={{  color:"white" }}>{data.name}</Card.Title>
        <Card.Text style={{  color:"#0882e5" }}>
          Description:
        </Card.Text>
        <Card.Text style={{  color:"white" }}>
          {data.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{  backgroundColor:"grey", color:"white" }} >Rating: {data.rating}</ListGroup.Item>
      </ListGroup>
      <Button style={{borderRadius:"0%"}} variant="primary">Watch Movie</Button>
    </Card>
  );
}

MovieCard.propTypes={
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number
}