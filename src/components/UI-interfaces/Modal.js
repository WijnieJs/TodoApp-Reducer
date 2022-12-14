import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../../components/Forms/Button'
import './Modal.css'

const modal = (props) =>
  ReactDOM.createPortal(
    <div className="modal">
      <header className="modal__header">
        <h1>{props.title}</h1>
      </header>
      <div className="modal__content">{props.children}</div>
      <div className="modal__actions">
        <Button
          design={props.noActionText ? 'success' : 'danger'}
          mode={props.noActionText ? 'raised' : 'flat'}
          onClick={props.onCancelModal}
        >
          {props.noActionText ? props.noActionText : ' Cancel'}
        </Button>
        <Button
          mode="raised"
          onClick={props.onAcceptModal}
          disabled={!props.acceptEnabled}
          loading={props.isLoading}
        >
          {props.actionText ? props.actionText : ' Accept'}
        </Button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  )

export default modal
