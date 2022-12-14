import './todo-list-item.css';
import React, { Component } from 'react';

export default class TodoListItem extends Component {

render() {
  const { label, onDeleted, done, important, onToggleDone, onToggleImportant} = this.props;

  let classNames = "todo-list-item"
  if (done) {
    classNames += " done"
  }
  if (important) {
    classNames +=' important'
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}>
        {label}
      </span>
      <div className='buttons'>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </span>
  )
}
}
