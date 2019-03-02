import React, { Component } from 'react';
import axios from 'axios';

class Characters extends Component{

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
        .then(result =>{
            console.log(result.data.results);
        }).catch(console.log)
    }

    render(){
        return(
            <h1>Rick and Morty</h1>
        );
    }
}
export default Characters;