import React, { Component, PropTypes } from 'react';

/**
 * dependencies
 */

import Modal, { Header, Body, Title } from 'react-bootstrap/lib/Modal';

import './ModalTask.style';


class ModalTask extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
  }

  close = () => {
    this.setState({showModal: false});
  }

  show = () => {
    this.setState({showModal: true});
  }

  render() {
    const { title, body } = this.props;

    return (
      <div>
        <button className='ModalTask-btn' onClick={this.show}>
            <i className="fa fa-question-circle-o" aria-hidden="true"></i>
        </button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Header closeButton>
            <Title>{title}</Title>
          </Header>
          <Body>{body}</Body>
        </Modal>

      </div>
    );
  }
}

export default ModalTask;
