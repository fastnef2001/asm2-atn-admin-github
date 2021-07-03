import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 50,
    paddingTop: '70%',
    backgroundColor: 'rgba(222, 102, 128, 1)',
    borderRadius: '30px',
    marginTop: '35px'
    
    
    
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '30px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgba(231, 145, 171)',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 0px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
