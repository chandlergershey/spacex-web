import React from 'react';
import Modal from 'react-modal';
import { Texture } from 'three';

class ModalComponent extends React.Component {
  render(){
    return (
      <Modal isOpen={false}>
        <h2>
          Modal title
        </h2>
        <p>Modal body</p>
      </Modal>
    )
  }
}

export default ModalComponent;