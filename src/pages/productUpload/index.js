import { Breadcrumbs, Typography, Link as MuiLink, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const ProductUpload =()=>{
  return(
    <div className="right-content w-100">

      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center justify-content-between mb-4 breadcrumbCard">
        <h5 className="mb-0">Product Upload</h5>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} to="/" underline="hover" color="inherit" className="breadcrumb-link">
            <IoMdHome />Dashboard
          </MuiLink>
          <MuiLink component={Link} to="/products" underline="hover" color="inherit" className="breadcrumb-link">
            Products
          </MuiLink>
          <Typography className="breadcrumb-current" component="span" sx={{ padding: '6px 10px', borderRadius: '16px' }}>
            Product Upload
          </Typography>
        </Breadcrumbs>
      </div>
      
    </div>
  )
}

export default ProductUpload;