import React from 'react';
import '../Modal.css';

export const SettingsModal = ({
  closeModal,
  userToken,
}: {
  closeModal: (value: boolean) => void;
  userToken: string;
}) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='title'>
          <h1>Settings</h1>
        </div>
        <div className='body'>
          <p>Tu będą ustawienia</p>
        </div>
        <div className='footer'>
          <button id='closeBtn' onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
