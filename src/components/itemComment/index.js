import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Btmn from '../../images/btmn.png'
import useStyles from './index.styles'

export default function Index({ name, email, body }) {
  const classes = useStyles()

  return (
    <div className={classes.subDiv}>
      <Grid item xs={2}>
        <img src={Btmn} alt="Btmn" className={classes.imageBtmn} />
      </Grid>
      <Grid className={classes.txtGrid} item xs={10}>
        <Typography className={classes.nameStyle}> {name} </Typography>
        <Typography className={classes.emailStyle}> {email} </Typography>
        <Typography className={classes.bodyStyle}> {body} </Typography>
      </Grid>
    </div>
  )
}
