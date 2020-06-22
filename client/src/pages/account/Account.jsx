import React, { useContext } from 'react';

import { Button } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import LogoutButton from '../../components/buttons/LogoutButton';
import BottomNav from '../../components/navs/BottomNav';
import CartButton from '../../components/buttons/CartButton';

import './account.css';

const Account = ({ history }) => {
  const { user } = useContext(UserContext);

  const testArr = [
    {
      name: 'Payment cards',
      state: false
    },
    {
      name: 'Purchase history',
      state: false
    },
    {
      name: 'Account setting',
      state: false
    },
    {
      name: 'About this app',
      state: false
    }
  ];

  const handleDrawerState = (drawer) => {
    switch (drawer) {
      case [0]:
        testArr[drawer].state = !testArr[drawer].state;
        break;
      default:
        break;
    }
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <div>
          <h4>On-the-Go</h4>
          <h3>Hello, {user.firstName}</h3>
          <p>{user.email}</p>
        </div>
        <div>
          <CartButton />
        </div>
      </div>

      <div>
        {testArr?.map((item, key) => {
          return (
            <div className="account-menu-drawers" key={item.name}>
              <Button
                id="drawers"
                onClick={() => {
                  handleDrawerState(key);
                }}
              >
                {item.name}
              </Button>
            </div>
          );
        })}

        {testArr[0].state}
        {testArr[1].state}
        {testArr[2].state}

        <LogoutButton />
      </div>

      <BottomNav />
    </div>
  );
};

export default Account;
