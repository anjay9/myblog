import React, { useEffect } from 'react';

function Admin(props) {
  useEffect(() => {
    checkIfLogged();
  }, []);

  return (
    <div>Admin Panel</div>
  );
}

export default Admin;
