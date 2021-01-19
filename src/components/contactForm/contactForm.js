import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputName = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.handleDeleteContactFromFormState();
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
    const contactItem = { id: uuidv4(), name, number };

    if (name === '' || number === '') {
      return;
    }

    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already is contact`);
      return;
    } else {
      this.setState({
        contacts: [...contacts, contactItem],
      });
    }

    this.props.onSubmitForm([...contacts, contactItem]);
    this.resetInput();
  };

  handleDeleteContactFromFormState = () => {
    const newContactsFromAppState = this.props.UpdateContacts;
    this.setState({ contacts: newContactsFromAppState });
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className={s.form}>
        <label className={s.lable}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputName}
          ></input>
        </label>

        <label className={s.lable}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputName}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
