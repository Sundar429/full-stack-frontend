import React from 'react'
import { CardActions, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <div>

            <Card className="min-[900px]:w-[20vw] min-[350px]:w-[10vw] " sx={{ width: 345 }}>
                <CardMedia sx={{ height: 345 }} image='https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600' />
                <CardContent>
                    <Typography variant="h5" >
                        South Indian Fast Food

                    </Typography>
                    <Typography variant="body2" >
                        50% off on your first order

                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"chennai"}</p>
                        <p className="text-sm text-blue-500">January 24,2024 12:00 AM</p>
                        <p className="text-sm text-red-500">January 25,2024 12:00 AM</p>

                    </div>
                </CardContent>
                {false && <CardActions>
                    <IconButton >
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}

export default EventCard