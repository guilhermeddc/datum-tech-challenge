import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: -theme.spacing(16),
      padding: theme.spacing(4),
    },
    media: {
      height: '70vh',
    },
  }),
);

export default useStyles;
