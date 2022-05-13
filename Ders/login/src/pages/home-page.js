import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { logout } from '../store/user/userActions';

const HomePage = () => {

  const {userState, dispatchUser } = useStore();

  const {user , isUserLogin}=userState;
const handleLogout=() => {
  dispatchUser(logout);
}


  return (
    <div className="text-center mt-5">
      <h1>Welcome {user.firstName}</h1>

      {isUserLogin ? (
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      ) : (
        <Button variant="success" as={Link} to="/login">
          Login
        </Button>
      )}
    </div>
  );
}

export default HomePage;