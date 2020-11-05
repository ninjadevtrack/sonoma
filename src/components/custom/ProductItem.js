import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'components/bs';
import FlexRow from './FlexRow';

const ProductItem = ({
  name,
  cost,
  handleEdit,
  handleRemove,
  ...rest
}) => (
  <Card {...rest}>
    <Card.Body>
      <FlexRow className="justify-content-between">
        <Card.Text className="font-weight-bold">{name}</Card.Text>
        <Card.Text>{cost}</Card.Text>
        <FlexRow>
          <Button variant="primary" className="mr-2" onClick={handleEdit}>Edit</Button>
          <Button variant="warning" onClick={handleRemove}>Remove</Button>
        </FlexRow>
      </FlexRow>
    </Card.Body>
  </Card>
);

ProductItem.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.number,
  handleEdit: PropTypes.func,
  handleRemove: PropTypes.func,
};

ProductItem.defaultProps = {
  name: '',
  cost: 0,
  handleEdit: () => {},
  handleRemove: () => {},
};

export default ProductItem;
