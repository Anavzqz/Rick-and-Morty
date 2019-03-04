import React from 'react';
//import { Container, Row, Input, Spinner  } from 'reactstrap';

const Title = () => {
    return(
        <h1>
            Rick y Morty App
        </h1>
    )
}



/*class Title extends Component {

    render(){
        makeSearch = string =>{
        if (string === ""){
            <Characters />
        } else {
            let regex = new RegExp(string, 'i')
            let filtered = items.filter(r => regex.test(r.name));
        }
        return(
            <form>
                <div className="row">                    
                    <div className="form-group col-md-8">
                    <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"
          />
        </FormGroup>
                        <input className="form-control form-control-lg" type="search" placeholder="Search a character" 
                        onChange ={e => { makeSearch(e.target.value) } }
                        onClick ={e => { makeSearch(e.target.value) } }
                        onKeyPress={e => {
                                   if (e.key !== "Enter") return
                                   makeSearch(e.target.value)
                               }}/>
                    </div>
                </div>
            </form>
        );
    }
}
}*/
export default Title;