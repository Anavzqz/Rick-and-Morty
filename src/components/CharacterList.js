import React, { Component, Fragment } from 'react';
import Characters from './Characters';
import axios from 'axios';
import Details from './Details';


class CharacterList extends Component {
  constructor(){
    super();
    this.state = {
        items: [],
    }
}

componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(res =>{
        const characterData = res.data.results;
        this.setState({
           items: characterData,
        })
      }).catch(console.log('error'))
}
  render(){
    const { items } = this.state;
    console.log(items);
    return(
    <div>
    { 
      items.map(i => {
        return (
          <Fragment>
        <Characters 
        key = {i.id} 
        id = {i.id} 
        name = {i.name} 
        image = {i.image} 
        status = {i.status}/>
        <Details 
        key = {i.id} 
        id = {i.id} 
        name={i.name} 
        image = {i.image} 
        status = {i.status}
        species = {i.species}
        tipo = {i.type}
        gender= {i.gender}
        origin= {i.origin.name}
        />
        </Fragment>
        );
      })
    } 
    </div>
     );
  }
}

 export default CharacterList;
