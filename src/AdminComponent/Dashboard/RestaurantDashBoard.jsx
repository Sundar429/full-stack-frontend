import { Grid } from '@mui/material'
import React from 'react'
import MenuTable from '../Menu/MenuTable'
import OrderTable from '../Orders/OrderTable'

const RestaurantDashBoard = () => {
  return (
    <div className="min-[424px]:w-[70vw] mx-auto p-4">

      <Grid container spacing={2} >
        <Grid item xs={12} lg={6} className="p-2">
          <MenuTable />

        </Grid>
        <Grid item xs={12} lg={6} className="p-2">
          <OrderTable />

        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDashBoard