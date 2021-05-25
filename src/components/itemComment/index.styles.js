import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  subDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'row',
    marginBottom: 10
  },
  txtGrid: {
    marginTop: 10
  },
  imageBtmn: {
    zIndex: 1,
    marginTop: 5,
    paddingBottom: 10,
    width: 70,
    // height: 100,
    borderRadius: 5
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: 'bolder'
  },
  emailStyle: {
    fontSize: 16,
    color: '#0068c5'
  },
  bodyStyle: { fontSize: 12 }
}))
