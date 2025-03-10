import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TempUser() {
  const navigate = useNavigate();

  async function onInit() {
    await new Promise((res) => {
      setTimeout(() => {
        navigate('/user/1');
        res('success');
      }, 2000);
    });
  }

  useEffect(() => {
    onInit();
  }, []);

  return <div>Loading</div>;
}

export default TempUser;
