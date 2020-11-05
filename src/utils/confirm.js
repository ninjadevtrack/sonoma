import React from 'react';
import PropTypes from 'prop-types';
import { confirmable, createConfirmation } from 'react-confirm';
import { Modal, Row, Col, Button } from 'components/bs';

const ConfirmModal = ({
  title,
  okLabel,
  cancelLabel,
  show,
  proceed,
  dismiss,
  cancel,
  enableEscape,
}) => (
  <Modal
    show={show}
    onHide={dismiss}
    backdrop={enableEscape ? true : 'static'}
    dialogClassName="confirm-modal"
  >
    <Modal.Header closeButton>{title}</Modal.Header>
    <Row className="d-flex justify-content-between p-4">
      <Col>
        <Button variant="dark" className="w-100 p-lg-2 p-md-2" onClick={cancel}>
          {cancelLabel}
        </Button>
      </Col>
      <Col>
        <Button className="w-100 p-lg-2 p-md-2" onClick={proceed}>
          {okLabel}
        </Button>
      </Col>
    </Row>
  </Modal>
);

ConfirmModal.defaultProps = {
  proceed: () => undefined,
  cancel: () => undefined,
  dismiss: () => undefined,
  okLabel: 'Confirm',
  cancelLabel: 'Cancel',
  show: false,
  enableEscape: true,
};

ConfirmModal.propTypes = {
  proceed: PropTypes.func, // called when ok button is clicked.
  cancel: PropTypes.func, // called when cancel button is clicked.
  dismiss: PropTypes.func, // called when backdrop is clicked or escaped.

  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool,
  enableEscape: PropTypes.bool,
};

export const confirm = createConfirmation(confirmable(ConfirmModal));
