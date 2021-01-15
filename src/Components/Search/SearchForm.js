import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import {FormControlLabel, Switch} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

export default function SearchForm({ params, onParamChange }) {
  return (
    <div className="form">
    <Form className="mt-4">
      <Form.Row className="align-items-end">
        <Form.Group className="col-7" as={Col}>
          <Form.Control class="fa fa-search" onChange={onParamChange} value={params.title} name="description" type="text" placeholder="Search"/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" placeholder="Location"/>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          {/* <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" /> */}
          <FormControlLabel className="mb-2"
    control={<Switch checked={params.full_time} onChange={onParamChange} />}
    label="Fulltime"
  />
  <Button variant="secondary">Search</Button>
        </Form.Group>
        
      </Form.Row>
    </Form>
    </div>
  )
}
