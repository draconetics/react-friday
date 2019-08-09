import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormPage extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }


  render() {
    return (
      <Form onSubmit={(e)=>this.handleSubmit(e)}>
        <FormGroup>
          <Label for="url">Url</Label>
          <Input type="text" name="url" id="url" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" placeholder="Insert Description" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
