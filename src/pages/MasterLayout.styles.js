import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    position: 'absolute',
    width: '100%',
    minHeight: '100vh',
    // height: 365,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}))
