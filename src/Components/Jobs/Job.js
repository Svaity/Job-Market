import React, { useState } from 'react'
import { Container, Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import './TestJob.css'
import { Avatar, IconButton, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';



export default function Job({ job }) {
  const [open, setOpen] = useState(false)

    return (
      <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => setOpen(prevOpen => !prevOpen)}>
    <CardHeader
      avatar={<Avatar className= "logo" src={job.company_logo} />}
      action={
        <IconButton aria-label="settings">

        </IconButton>
      }
      title={job.title}
      subheader={job.company}
    />
    <CardContent>
      <Typography variant="body" component="p">
      </Typography>
      <Badge variant="secondary" className="mr-2">{job.type}</Badge>
      <Badge variant="secondary">{job.location}</Badge>
    </CardContent>




    <Dialog open={open} maxWidth="md"   style={{backgroundColor: 'transparent'}} PaperProps={{
    style: {
      backgroundColor: '#404040',
      boxShadow: 'none',
      color: "white",
    }}}>
   
            <DialogTitle>
              
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                      <div display="d-flex">
                    {job.title}-<span>{job.company}</span>
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
            <ReactMarkdown source={job.description} />
          </div>
            </DialogContent>
            
</Dialog>

  </Card>
  </Grid>


  )
}

