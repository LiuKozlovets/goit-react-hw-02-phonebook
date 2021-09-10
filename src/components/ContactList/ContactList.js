import React from "react";
import PropTypes from "prop-types";
import s from "./style.module.css";

class ContactList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.records.map((contact) => (
            <li key={contact.number}>
              {contact.name} {contact.number}
              <button
                className={s.delete}
                onClick={() => this.props.onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
