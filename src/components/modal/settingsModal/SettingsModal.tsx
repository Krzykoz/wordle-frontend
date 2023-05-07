import React, { Dispatch, SetStateAction } from 'react';
import '../Modal.css';

export const SettingsModal = ({
  closeModal,
  setUserToken,
  userToken,
}: {
  closeModal: (value: boolean) => void;
  setUserToken: Dispatch<SetStateAction<string | null>>;
  userToken: string | null;
}) => {
  const handleLogin = async (event: any) => {
    event.preventDefault();
    const token = event.target[0].value;
    const response = await fetch('http://localhost:8080/api/v1/users/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log({ response });
    localStorage.setItem('userToken', token);
    setUserToken(token);
    closeModal(false);
  };

  const handleRegister = (event: any) => {
    event.preventDefault();
    const token = event.target[0].value;
    localStorage.setItem('userToken', token);
    setUserToken(token);
    closeModal(false);
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='title'>
          <h1>Settings</h1>
        </div>
        {userToken ? (
          <div className='body'>You are logged in</div>
        ) : (
          <>
            <p>Login</p>
            <form onSubmit={handleLogin}>
              <input type='text' placeholder='Token' />
              <input type='submit' value='Login' />
            </form>

            <p>Register</p>
            <form onSubmit={handleRegister}>
              <input type='text' placeholder='email' />
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
              <input type='submit' value='Register' />
            </form>
          </>
        )}
        <div className='footer'>
          <button id='closeBtn' onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
