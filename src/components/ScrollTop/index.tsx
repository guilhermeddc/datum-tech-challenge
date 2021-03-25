import {useScrollTrigger, Zoom} from '@material-ui/core';
import React, {useCallback} from 'react';

import useStyles from './styles';

interface IProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ScrollTop: React.FC<IProps> = (props) => {
  const {root} = useStyles();
  const {children, window} = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  }, []);

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={root}>
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
