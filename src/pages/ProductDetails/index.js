import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const ProductDetails = ()=>{
  return(
    <div className="right-content w-100">

      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center justify-content-between mb-4 breadcrumbCard">
        <h5 className="mb-0">Product View</h5>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink component={Link} underline="hover" color="inherit" to="/" className="breadcrumb-link">
            <IoMdHome/>Dashboard
          </MuiLink>
          <Typography className="breadcrumb-current" component="span" sx={{ padding: '6px 10px', borderRadius: '16px' }}>
            Products
          </Typography>
          <Typography className="breadcrumb-current" component="span" sx={{ padding: '6px 10px', borderRadius: '16px' }}>
            Product View
          </Typography>
        </Breadcrumbs>
      </div>

      j

    </div>
  )
}

export default ProductDetails;