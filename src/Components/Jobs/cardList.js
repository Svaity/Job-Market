import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const Content = () => {
  const getCoffeMakerCard = coffeMakerObj => {
    return (
          {/* <div className="card-deck">  
      <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="logo">
            <Avatar src={job.company_logo} className="mr-2 d-none d-md-block darkmode-ignore"/>
            </div>
          
          {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
          </div>
          <div>
            

            <Badge variant="secondary" className=" float-left mr-2">Fulltime</Badge>
            <Badge variant="secondary" className="float-left mr-2">New York</Badge>
            <Card.Subtitle className="text-muted mb-2 mt-2">
              16/3/1234
            </Card.Subtitle>
          </div>
          <div>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="secondary mb-2"
          >
            {open ? 'Hide Details' : 'Job Details'}
          </Button>
          <div>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="secondary"
          >
            {open ? 'Hide' : ' Apply Here  '}
          </Button>
          </div>
          </div>
        </div>
        <Card.Text>

        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card> */}
    {/* afdssd */}
    {/* <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img className="d-none d-md-block darkmode-ignore" height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card> */}
  );
};

export default Content;