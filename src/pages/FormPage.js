import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormPage extends React.Component {

  constructor() {
    super();
    this.state={
      url:'',
      description:''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    this.props.addPhoto(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <Form onSubmit={(e)=>this.handleSubmit(e)}>
        <FormGroup>
          <Label for="url">Url</Label>
          <Input type="text" name="url" id="url" onChange={(e)=>this.handleInputChange(e)} placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" onChange={(e)=>this.handleInputChange(e)} placeholder="Insert Description" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
