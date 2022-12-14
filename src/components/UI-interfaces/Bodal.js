import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import Backdrop from './Backdrop'
import './Bodal.css'

const ModalOverlay = (props) => {
  const content = (
    <div className={`bodal ${props.className}`} style={props.style}>
      <header className={`bodal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`bodal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`bodal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('bodal-hook'))
}

const Bodal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="bodal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  )
}

export default Bodal
