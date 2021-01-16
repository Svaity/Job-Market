
import { Card, Badge, Button, Collapse, Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Modal, Avatar, IconButton, CardMedia, CardHeader, CardContent, Typography, CardActions } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import React, { useState } from 'react';
import './TestJob.css'
import { Paper } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';



const company_logo = "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkNWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b3ab086151f1ec4f116e29055e1befcc189d9fc6/Copy%20of%20Pensa_logo_boxed.jpg"
const description = "asdkfbkajsdfkjasdfkkjasdfbjk asdkjfhkas df kj f adjsklf kjsdf "
function TestJob() {
    
const [open, setOpen] = useState(false)
    return (
        <Grid item xs={12} sm={6} md={4}>
             <Card onClick={() => setOpen(prevOpen => !prevOpen)}>
      <CardHeader
        avatar={<Avatar src={company_logo} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title="Company asdfasdf asdf asf asdfasdf asdfsadf asdfsdf "
        subheader="asdfasdf asdfsadf adsfsadfsad fasddfsadf asdfsadfsdf "
      />
      <CardContent>
        <Typography variant="body" component="p">
          asdfasdfsdf
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>


    <Dialog open={open} maxWidth="md"  style={{backgroundColor: 'transparent'}}  PaperProps={{
    style: {
      backgroundColor: 'pink',
      boxShadow: 'none',
    }}}>
            <DialogTitle>
              
                <div style={{ display: 'flex' }} >
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                      <div display="d-flex">
                    {/* {job.title}-<span>{job.company}</span> */}
                    </div>
                    </Typography>
                    <Button
                        variant="secondary"
                        onClick={()=>{setOpen(false)}}>
                        Apply
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
            <div className="mt-4">
            <ReactMarkdown source={description} />
          </div>
            </DialogContent>
            
</Dialog>


<div><Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="secondary mb-2"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>

          </div>

{/* {description} */}

                {/* <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
              <div className="logo">
              <Avatar src={company_logo} className="mr-2 d-none d-md-block darkmode-ignore"/>
              </div>
          
          Software Engineer - <span className="text-muted font-weight-light">Google</span>
          </div>
          <div>
            

            <Badge variant="secondary" className="mr-2">Fulltime</Badge>
            <Badge variant="secondary" className="mr-2">New York</Badge>
            <Card.Subtitle className="mb-2 mt-2">
              Posted: <div className="small">16/3/1234</div>
            </Card.Subtitle>
          </div>
          
          <div>
            
          <div><Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="secondary mb-2"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>

          </div>
          </div>
        </div>
        <Card.Text>

        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source="asdfasfasd" />
          </div>
        </Collapse>
      </Card.Body>
    </Card>  */}
    {/* // <Card>
    //   <CardHeader
    //     avatar={<Avatar src={avatarUrl} />}
    //     action={
    //       <IconButton aria-label="settings">
    //         <ShareIcon />
    //       </IconButton>
    //     }
    //     title={title}
    //     subheader={subtitle}
    //   />
    //   <CardMedia style={{ height: "150px" }} image={imageUrl} />
    //   <CardContent>
    //     <Typography variant="body2" component="p">
    //       {description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">BUY NOW</Button>
    //     <Button size="small">OFFER</Button>
    //   </CardActions>
    // </Card> */}
        </Grid>
    )
}

export default TestJob
