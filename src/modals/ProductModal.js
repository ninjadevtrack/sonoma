import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/bs';

const ProductModal = ({ onHide, show, children, ...rest }) => {
  return (
    <Modal size="sm" centered onHide={onHide} show={show} {...rest}>
      <Modal.Header closeButton className="text-capitalize">
        <Modal.Title>Add/Edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

ProductModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default ProductModal;
