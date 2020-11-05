import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'components/bs';

const UserItem = ({
  firstName,
  lastName,
  email,
  ccNumber,
  ccType,
  isProduct,
  total,
  currency,
  ...rest
}) => (
  <Card {...rest}>
    <Card.Body>
      {!isProduct && (
        <>
          <Card.Title>{firstName}</Card.Title>
          <Card.Title>{lastName}</Card.Title>
        </>
      )}
      <div className="d-flex justify-content-between">
        <div className="py-3">
          <Card.Subtitle>{email}</Card.Subtitle>
          <Card.Text>{ccNumber}</Card.Text>
          <Card.Text>{ccType}</Card.Text>
        </div>
        {isProduct && (
          <div className="text-center pt-2">
            <h1>{total}</h1>
            <h5>{currency}</h5>
          </div>
        )}
      </div>
      {!isProduct && (
        <Button variant="primary" className="w-100">
          <Card.Link href={`/user/${ccNumber}`} className="d-block w-100 text-uppercase">
            Details
          </Card.Link>
        </Button>
      )}
    </Card.Body>
  </Card>
);

UserItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  ccNumber: PropTypes.string,
  ccType: PropTypes.string,
  total: PropTypes.number,
  currency: PropTypes.string,
  isProduct: PropTypes.bool,
};

UserItem.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  ccNumber: '',
  ccType: '',
  total: 0,
  currency: '',
  isProduct: false,
};

export default UserItem;
