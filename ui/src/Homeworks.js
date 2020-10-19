import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { Col, Row, Table,Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';



class Homeworks extends Component {

  // {
  //   "id": 100,
  //   "deadline": "2019-06-16T17:00:00Z",
  //   "description": "New York Business Trip",
  //   "location": "New York",
  //   "lesson": {
  //   "id": 1,
  //   "name": "Travel"
  //   }
  //   },


    emptyItem = {
        title : '' ,
        deadline : new Date(),
        id:104,
        subject : '',
        lesson : {id:1 , name:'Chemistry'}
    }

    
    constructor(props){
      super(props)

      this.state = { 
        isLoading :false,
        Lessons:[],
        Homeworks : [],
        date :new Date(),
        item : this.emptyItem
       }

       this.handleSubmit= this.handleSubmit.bind(this);
       this.handleChange= this.handleChange.bind(this);
       this.handleDateChange= this.handleDateChange.bind(this);

    } 

    async handleSubmit(event){
     
      const item = this.state.item;
    

      await fetch(`/api/homeworks`, {
        method : 'POST',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(item),
      });
      
      event.preventDefault();
      this.props.history.push("/homeworks");
    }


    handleChange(event){
      const target= event.target;
      const value= target.value;
      const name = target.name;
      let item={...this.state.item};
      item[name] = value;
      this.setState({item});
      console.log(item);
    }


    handleDateChange(date){
      let item={...this.state.item};
      item.deadline= date;
      this.setState({item});
    
    }






    async remove(id){
        await fetch(`/api/homeworks/${id}` , {
          method: 'DELETE' ,
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }

        }).then(() => {
          let updatedHomeworks = [...this.state.Homeworks].filter(i => i.id !== id);
          this.setState({Homeworks : updatedHomeworks});
        });

    }


    async componentDidMount() {
 
     

        const response= await fetch('/api/lessons');
        const body= await response.json();
        this.setState({Lessons : body , isLoading :false});


        const responseExp= await fetch('/api/homeworks');
        const bodyExp = await responseExp.json();
        this.setState({Homeworks : bodyExp , isLoading :false});
        console.log(bodyExp);

    }

    



    render() { 
        const title =<h3>Add Homework</h3>;
        const {Lessons} =this.state;
        const {Homeworks,isLoading} = this.state;


        if (isLoading)
            return(<div>Loading....</div>)
        


        let optionList  =
                Lessons.map( (lesson) =>
                    <option value={lesson.id} key={lesson.id}>
                                {lesson.name} 
                    </option>
                )
        
        let rows = 
          Homeworks.map( homework =>
            <tbody>
              <tr key={homework.id}>
                <td>{homework.lesson.name}</td>
                <td>{homework.title}</td>
                <td><Moment date={homework.deadline} format="DD/MM/YYYY"/></td>
                <td rowspan="2"><Button size="sm" color="danger" onClick={() => this.remove(homework.id)}>Delete</Button></td>
              </tr>
              <tr>
                <td colspan="3">{homework.subject}</td>
              </tr>
            </tbody>
        )

        return (
            <div>
                <AppNav/>
                <Container >
                    {title}
                    <Form row onSubmit={this.handleSubmit}>
                    <Row form>
                    <Col >
                    <FormGroup >
                        <Label for="description">Homework Title</Label>
                        <Input type="description" name="description" id="description" 
                            onChange={this.handleChange} autoComplete="name"/>
                      </FormGroup>
                    </Col>

                    <Col xs="auto" >
                        <FormGroup>
                        <Label for="city">Deadline</Label>
                        <br></br>
                        <DatePicker    selected={this.state.item.deadline}  onChange={this.handleDateChange} />
                        </FormGroup>
                    </Col>

                    <Col xs="auto">
                    <FormGroup>
                        <Label for="lesson" >Lesson</Label>
                        <br></br>
                        <select onChange={this.handleChange}>
                                {optionList}
                        </select>
                        </FormGroup>
                    </Col>
                    </Row>

                    <FormGroup >
                        <Label for="location">Subject of homework:</Label>
                        <Input type="textarea" name="location" id="location" onChange={this.handleChange}/>
                    </FormGroup>

                    </Form>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup> 
                </Container>
          {''}
              <Container>
                <h3>Homework List</h3>
                <Table className="mt-4">
                <thead>
                  <tr>
                    <th colspan="3">Homework Description</th>
                    <th width="10%">Action</th>
                  </tr>
                </thead>
                  {rows}
                </Table>
              </Container>
        </div>
        );
    }
}

 
export default Homeworks;
