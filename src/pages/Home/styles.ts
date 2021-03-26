import {Theme} from '@material-ui/core';
import {makeStyles, createStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(12),
    },
    margin: {},
  }),
);

export default useStyles;
