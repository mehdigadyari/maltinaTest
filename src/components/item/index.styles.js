import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  item: {
    position: 'relative',
    width: 240,
    height: 260,
    backgroundColor: '#fff',
    borderColor: '#3d495caa',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    margin: -6,
    cursor: 'pointer'
  },
  image: {
    zIndex: 1,
    marginTop: 5,
    paddingBottom: 10,
    width: '70%',
    borderRadius: 5,
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.5)',
      transition: '0.5s'
    }
    // [theme.breakpoints.down('xs')]: {
    //   width: 150
    // }
  },
  title: { fontSize: 7 },
  body: { fontSize: 5 }
}))
