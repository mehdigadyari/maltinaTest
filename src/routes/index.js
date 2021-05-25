import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/MasterLayout'
import Product from '../pages/Product'

export default function index() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Product">
        <Product />
      </Route>
    </Switch>
  )
}
