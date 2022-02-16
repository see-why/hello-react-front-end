import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMessages } from '../redux/greetings/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages());
  }, []);

  const { greetings } = useSelector((state) => state);
  return (
    <>
      Message:
      {' '}
      {greetings}
    </>
  );
};

export default Greeting;
