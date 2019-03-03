import React, { Component } from 'react';
import Characters from './Characters';
import axios from 'axios';


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
        return <Characters key = {i.id} id = {i.id} name={i.name} image = {i.image} status = {i.status}/>
      })
    } 
    </div>
     );
  }
}
        


    
 export default CharacterList;
