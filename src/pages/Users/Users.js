import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'components/bs';
import { UserItem } from 'components/custom';
import actions from 'redux/actions';

function Users() {
  const allUsers = useSelector(state => state.users);
  const dispatch = useDispatch();

  // Read all users at initial loading.
  useEffect(() => {
    dispatch(actions.loadAllUsers());
  }, []);

  // search user by cc number
  const searchUsers = (e) => {
    const ccNumber = e.target.value;

    if (ccNumber === '') {
      dispatch(actions.loadAllUsers());
      return;
    };

    dispatch(actions.searchUser(ccNumber));
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <input
          type="text"
          onChange={searchUsers}
          placeholder="Search by cc number"
          className="mb-4 py-2 px-3"
        />
      </div>

      <Row>
        {allUsers && allUsers.length ? (
          allUsers.map((user) => (
            <Col md={6} lg={4} key={user.id}>
              <UserItem
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
                ccNumber={user.cc_number}
                ccType={user.cc_type}
                className="my-2"
              />
            </Col>
          ))
        ) : (
          <h3 className="w-100 text-center">There are no result</h3>
        )}
      </Row>
    </>
  );
}

export default Users;
