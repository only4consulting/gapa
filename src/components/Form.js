import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Message, Button, Input, Label } from 'semantic-ui-react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.email);
    this.setState({
      name: '',
      email: ''
    });
  }

  render() {
    const text = `Mensaje de texto`

    return (
      <Form success onSubmit={this.handleSubmit}>
        <Message success header='Título del mensaje' content={text} />
        <Form.Field required>
          <Label>Nombre</Label>
          <Input maxLength="45" placeholder='Nombre y apellido' value={this.state.name} type='text' onChange={name => this.setState({ name: name.target.value })} required />
        </Form.Field>
        <Form.Field required>
          <Label>Email</Label>
          <Input maxLength="45" placeholder='usuario@mail.com' value={this.state.email} type='email' onChange={email => this.setState({ email: email.target.value })} required />
        </Form.Field>
        <p><Button type="reset" onClick={this.props.onCancel}>Cancelar</Button> <Button type="submit">Enviar!</Button></p>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    testAction: state.appReducer.testAction
  }
}

export default connect(mapStateToProps, null)(Form);