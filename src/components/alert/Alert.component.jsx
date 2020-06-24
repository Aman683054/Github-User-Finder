import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alerts } = useContext(AlertContext);
  return (
    alerts !== null && (
      <div className={`alert alert -${alerts.type}`}>
        <i className='fas fa-info-circle'>{alerts.msg}</i>
      </div>
    )
  );
};

export default Alert;
