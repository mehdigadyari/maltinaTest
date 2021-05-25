import { Container, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './MasterLayout.styles'
import Item from '../components/item'

export default function MasterLayout() {
  const classes = useStyles()
  const [data, setData] = useState([])

  const getUserInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Paper>MaltinaTest</Paper>
        <Grid direction="row" xs={12}>
          <Grid className={classes.itemStyle} item xs={12}>
            {data.map((i) => (
              <Item key={i.id} title={i.title} body={i.body} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
