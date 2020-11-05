import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Image } from 'components/bs';
import { UserItem, ProductItem, FlexRow } from 'components/custom';
import actions from 'redux/actions';
import ProductModal from 'modals/ProductModal';
import ProductForm from 'forms/ProductForm';
import { confirm } from 'utils/confirm';

import leftArrowImg from 'assets/left-arrow.svg';

function Detail() {
  const history = useHistory();
  const user = useSelector(state => state.user);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState();

  const handleClose = () => setShow(false);
  const showAddModal = () => {
    setShow(true);
    setIsAdd(true);
    setProductId(0);
    setProductName('');
    setProductCost();
  };
  const showEditModal = (id, name, cost) => () => {
    setShow(true);
    setIsAdd(false);
    setProductId(id);
    setProductName(name);
    setProductCost(cost);
  };

  const handleAddProduct = (name, cost) => {
    dispatch(actions.addProduct(name, cost));
  }

  const handleEditProduct = (id, name, cost) => {
    dispatch(actions.editProduct(id, name, cost));
  };

  const handleRemoveProduct = (id) => () => {
    confirm({
      title: 'Are you sure you want to delete this product?',
    })
      .then(() => {
        dispatch(actions.removeProduct(id));
      })
      .catch(() => {});
  }

  useEffect(() => {
    const ccNumber = history.location.pathname.split('/')[2];
    dispatch(actions.readUser(ccNumber));
  }, []);

  if (!user) return null;

  return (
    <div>
      <FlexRow className="p-3 border-bottom">
        <Image
          src={leftArrowImg}
          width={20}
          onClick={() => history.push('/')}
        />
        <h3 className="d-inline pl-4">
          {user.first_name} {user.last_name}
        </h3>
      </FlexRow>

      <section className="px-3">
        <UserItem
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
          ccNumber={user.cc_number}
          ccType={user.cc_type}
          currency={user.currency}
          total={user.total}
          isProduct
          className="my-3"
        />
      </section>

      <section className="px-3">
        <FlexRow className="justify-content-between pt-3 pb-1">
          <h3 className="pl-3">Products</h3>
          <Button variant="success" onClick={showAddModal}>
            Add
          </Button>
        </FlexRow>
        {products &&
          products.map((item) => (
            <ProductItem
              key={item.id}
              className="my-2"
              name={item.name}
              cost={item.cost}
              handleEdit={showEditModal(item.id, item.name, item.cost)}
              handleRemove={handleRemoveProduct(item.id)}
            />
          ))}
      </section>

      <ProductModal show={show} onHide={handleClose}>
        <ProductForm
          id={productId}
          name={productName}
          cost={productCost}
          isAdd={isAdd}
          handleAddProduct={handleAddProduct}
          handleEditProduct={handleEditProduct}
          handleClose={handleClose}
        />
      </ProductModal>
    </div>
  );
}

export default Detail;
