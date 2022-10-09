import React from 'react';
import { AuthContext } from '../../../context/auth.context';
import Exit from './Exit/Exit';
import NotAuth from './NotAuth/NotAuth';

function Entrance() {
  const {isAuth, name} = React.useContext(AuthContext);

  return (
    <>
      {isAuth ? <Exit name={name}/> : <NotAuth />}
    </>
  );
}

export default Entrance;