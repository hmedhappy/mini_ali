import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function index({message,type,open,setopen}) {

    
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={()=>setopen(false)}>
                <Alert onClose={()=>setopen(false)} severity={type}>
                   {message}
                </Alert>
        </Snackbar>
    )
}
