import React from "react";
import PropTypes from "prop-types";
import s from "./style.module.css";

class ContactsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
    this.addContact = this.addContact.bind(this);
  }

  handleChange(field) {
    return (event) =>
      this.setState({ ...this.state, [field]: event.target.value });
  }

  addContact() {
    if (this.props.onAddContact(this.state)) {
      this.setState({ name: "", number: "" });
    }
  }

  render() {
    return (
      <>
        <label className={s.label}>Name</label>
        <input
          value={this.state.name}
          onChange={this.handleChange("name")}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label className={s.label}>Number</label>
        <input
          value={this.state.number}
          onChange={this.handleChange("number")}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.submit} onClick={this.addContact}>
          Add contact
        </button>
      </>
    );
  }
}

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
