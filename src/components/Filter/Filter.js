import React from "react";
import PropTypes from "prop-types";
import s from "./style.module.css";

class Filter extends React.Component {
  render() {
    return (
      <>
        <label className={s.label}>Find contact by name</label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
          name="filter"
        />
      </>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
