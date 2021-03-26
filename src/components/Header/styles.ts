import {Theme} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 300,
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      opacity: 0.1,
      transition: 'opacity 0.7s',
      height: theme.spacing(12),
      borderRadius: 4,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '&:hover': {
        opacity: 1,
      },
    },
    grid: {
      width: '100%',
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }),
);

export default useStyles;
