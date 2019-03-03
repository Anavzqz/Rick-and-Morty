import React from 'react';
import { Link } from 'react-router-dom';

//import CharacterList from './CharacterList';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

const Characters = (props) => {

        console.log(props);
        let statusLife;
        props.status !== "Alive" ? statusLife = "1": statusLife = "0"
        return(

          <Card>
            <CardImg style={{filter: "grayscale("+statusLife+")"}} top width="50%" src={props.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{props.name}</CardTitle>
                    <CardText>ID: {props.id}</CardText>
                    <Link to = { '/characterList/'+props.id} ><Button color="success" >See more</Button></Link>
                </CardBody>
                    </Card>
                )
       /* return(
            <CharacterList characterdata={characterData} />
        );
        */
}

export default Characters;