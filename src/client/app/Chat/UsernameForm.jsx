import React from 'react'
import {Modal, Form, InputGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'


class UsernameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      showModal: true
    }

    this.reopenIfNotReady = this.reopenIfNotReady.bind(this);
    this.open = this.open.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.submitUsername = this.submitUsername.bind(this);
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
  }

  close() {
    this.setState({showModal: false})
  }

  reopenIfNotReady() {
    if (this.state.showModal) {
      this.open()
    }
  }

  open() {
    this.setState({showModal: true})
  }

  submitOnEnter(e) {
    e = e || event
    if (e.keycode === 13) {
      this.submitUsername(e)
    }
  }

  submitUsername(e)  {
    e.preventDefault();
    if (this.state.text === '') {
      return
    }
    this.setState({showModal: false})
    this.props.handleUsernameForm({ username: this.state.text })
  }

  usernameChangeHandler(e) {
    this.state.text = e.target.value;
  }

  render() {
    return (
      <div className="user-modal">
        <Modal show={this.state.showModal} onHide={this.reopenIfNotReady}>
          <Modal.Header>
            <Modal.Title>Enter a username to chat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitUsername}>
                <FormControl
                  type="text"
                  placeholder="Enter username"
                  onChange={this.usernameChangeHandler}
                  onKeyUp={this.submitOnEnter}
                />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submitUsername} bsStyle="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>


    )
  }
}

export default UsernameForm
