import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      display: 'none',
    },
  }),
);

export default useStyles;
