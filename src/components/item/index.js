import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import Bitmap from '../../images/bitmap.png'
import useStyles from './index.styles'

export default function Index({ title, body }) {
  const classes = useStyles()
  const history = useHistory()
  function handleClick() {
    history.push('/Product')
  }
  return (
    <Button onClick={handleClick}>
      <div className={classes.item}>
        <Typography className={classes.title}> {title} </Typography>
        <img src={Bitmap} alt="Bitmap" className={classes.image} />
        <Typography className={classes.body}>{body}</Typography>
      </div>
    </Button>
  )
}
