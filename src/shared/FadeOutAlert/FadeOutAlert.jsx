import React, { useState, useEffect } from 'react';
import './styles.css';

const useFade = () => {
  const [show, remove] = useState(true);
  const [isVisible, setVisible] = useState(show);

  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  const style = { animation: `${show ? "fadeIn" : "fadeOut"} 0.7s` };

  const fadeProps = {
    style,
    onAnimationEnd
  };

  return [isVisible, remove, fadeProps];
};

const FadeOutAlert = ({ textValue }) => {
  const [isVisible, remove, fadeProps] = useFade();

  return <>
    {
      isVisible &&
      <div className='alert_message' {...fadeProps}>
        {textValue}
        <span
          className='close_button'
          onClick={() => remove(!isVisible)}
        >
          &times;
        </span>
      </div>
    }
  </>;
};

export default FadeOutAlert;
