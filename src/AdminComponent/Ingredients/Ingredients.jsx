import { Grid } from '@mui/material'
import React from 'react'
import IngredientsTable from './IngredientsTable'
import IngredientsCategoryTable from './IngredientsCategoryTable'

const Ingredients = () => {
  return (
    <div className='min-[424px]:w-[70vw] mx-auto p-4 px-2'>
      <Grid container spacing={2} >
        <Grid item xs={12} lg={8} className="p-2">
          <IngredientsTable/>

        </Grid>
        <Grid item xs={12} lg={4} className="p-2">
          <IngredientsCategoryTable/>

        </Grid>

      </Grid>


    </div>
  )
}

export default Ingredients