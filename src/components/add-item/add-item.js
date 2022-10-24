import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
  state = {
    label: '',
  };

  onChangeInput = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onChangeInput}
          placeholder="write todo"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    );
  }
}
