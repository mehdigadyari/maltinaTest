import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  item: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderColor: '#3d495caa',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    marginTop: 50
  },
  image: {
    zIndex: 1,
    paddingBottom: 0,
    width: 200,
    // height: 200,
    borderRadius: 5
  },
  sepDiv: {
    backgroundColor: '#d6d6d6',
    width: '80%',
    height: 1.5,
    marginBottom: 10,
    borderBlock: '1px'
  },
  subTitle: {
    fontSize: 10,
    padding: 10,
    paddingBottom: 20
  }
}))
