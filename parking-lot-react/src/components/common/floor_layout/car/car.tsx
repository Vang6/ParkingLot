import React, { useEffect, useState } from 'react';

const Car = (props: {
  occupied: boolean;
  face: string;
  positionId: string;
  onClick?: (e: any) => void;
}) => {
  const [styleObj, setStyleObject] = useState<React.CSSProperties>({});
  const [wStyleObj, setWStyleObject] = useState<React.CSSProperties>({
    display: 'inline-block',
    width: `${0}px`,
    height: `${0}px`,
    position: 'relative',
    margin: '10px',
  });
  const [transformValue, setTransformValue] = useState<React.CSSProperties>({});

  useEffect(() => {
    const wx = '21px';
    const lx = '50px';
    const s: React.CSSProperties = {
      position: 'absolute',
      width: '0px',
      left: '0px',
      display: 'block',
      overflow: 'hidden',
      cursor: props.occupied ? 'not-allowed' : 'pointer',
    };

    switch (props.face) {
      case 'top':
        s.width = wx;
        s.height = lx;
        break;

      case 'left':
        s.width = lx;
        s.height = wx;
        setTransformValue({ transform: 'translate(6px, -10px)' });
        break;

      case 'right':
        s.width = lx;
        s.height = wx;
        setTransformValue({ transform: 'translate(6px, -20px)' });
        break;

      case 'bottom':
        s.width = wx;
        s.height = lx;
        break;
    }

    setStyleObject(s);
    setWStyleObject({
      margin: '5px',
      display: 'inline-block',
      width: `${s.width}`,
      height: `${s.height}`,
      position: 'relative',
    });
  }, [props.face, props.occupied]);

  return (
    <div style={wStyleObj}>
      <div style={styleObj}>
        <div
          style={transformValue}
          className={`car-wrapper ${props.face && `facing-${props.face}`}`}
        >
          <div className={`car ${props.occupied ? 'occupied' : 'free'}`}>
            <div className="model"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Car;
