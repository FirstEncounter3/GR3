import React, {useEffect, useState} from 'react'

import './InfoBoard.css'

const InfoBoard = () => {
  const [dots, setDots] = useState('...')
  const [color, setColor] = useState('#28B463')

  useEffect(() => {
    const interval = setInterval(() => {
        setDots(prevDots => {
            if (prevDots.length < 3) {
                return prevDots + '.';
            } else {
                return '';
            }
        });
        setColor(prevColor => {
            if (prevColor === '#28B463') {
                return '#4F75FF';
            } else {
                return '#28B463';
            }
        });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className='info-board'><span style={{color: color}}>●</span> Listen{dots}</span>
  )
}

export default InfoBoard;