import { Box, Card, CardActions, CardHeader, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create'
import { Delete } from '@mui/icons-material';
import Modal from '@mui/material/Modal'
import CreateIngredientCategoryForm from './CreateIngredientCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientCategory } from '../../component/State/Ingredients/Action';

const orders=[1,1,1,1,1,1];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const IngredientsCategoryTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {restaurant,ingredients}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(getIngredientCategory({id:restaurant.usersRestaurant.id,jwt}))
  },[])
  return (
    <Box>
         <Card className='mt-1'>
            <CardHeader
            action={
                <IconButton onClick={handleOpen} aria-label='settings'>
                <CreateIcon/>
                </IconButton>
            }
            title={"Ingredients Category"}
            sx={{pt:2,alignItems:"center"}}
            />
          
             <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>

            <TableCell align="left">id</TableCell>
            <TableCell align="left">name</TableCell>
     

         
  
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.category.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
             
             
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </Card>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientCategoryForm/>
  

        </Box>
      </Modal>
        
    </Box>
  )
}

export default IngredientsCategoryTable