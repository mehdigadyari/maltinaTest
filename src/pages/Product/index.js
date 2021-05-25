import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Bitmap from '../../images/bitmap.png'
import useStyles from './index.styles'
import Item from '../../components/itemComment'

export default function Index() {
  const classes = useStyles()
  const [data, setData] = useState([])

  const getUserInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
  }
  useEffect(() => {
    getUserInfo()
  }, [])
  // console.log(data)
  return (
    <Container maxWidth="lg">
      <Grid className={classes.item} xs={12}>
        <img src={Bitmap} alt="Bitmap" className={classes.image} />

        <Typography className={classes.subTitle}>
          vero eaque aliquid doloribus et culpa{' '}
        </Typography>
        <div className={classes.sepDiv} />
        {data.map((i) => (
          <Item key={i.id} name={i.name} email={i.email} body={i.body} />
        ))}
      </Grid>
    </Container>
  )
}
