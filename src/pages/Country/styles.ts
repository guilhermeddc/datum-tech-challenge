import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: -theme.spacing(16),
      padding: theme.spacing(4),

      '@media (max-width: 600px)': {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
      },
    },
    title: {
      '@media (max-width: 600px)': {
        fontSize: 24,
      },
    },
    media: {
      height: '70vh',

      '@media (max-width: 600px)': {
        height: '50vh',
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      maxWidth: theme.spacing(100),
      margin: theme.spacing(4),
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default useStyles;
