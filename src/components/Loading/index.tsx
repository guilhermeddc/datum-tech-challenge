import React from 'react';
import ReactLoading from 'react-loading';

import useStyles from './styles';

interface ILoading {
  type?:
    | 'blank'
    | 'balls'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes'
    | undefined;
  color?: string;
  active?: boolean;
}

const Loading: React.FC<ILoading> = ({
  type = 'spinningBubbles',
  active = false,
}) => {
  const {root, disabled} = useStyles();

  return (
    <div className={active ? root : disabled}>
      <ReactLoading type={type} height={'10%'} width={'10%'} />
    </div>
  );
};

export default Loading;
