import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Components/Jobs/Job'
import JobsPagination from './Components/Jobs/JobsPagination';
import SearchForm from './Components/Search/SearchForm';
import Navbar from './Components/Navbar/Navbar'
import TestJob from './Components/Jobs/TestJob'
import './index.css'
import { Grid } from "@material-ui/core";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


function App() {  
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (

      
    <div>


      {/* header component */}
      <div className="Hero">
        <Container>
        <div className="HeroGroup">
        <Navbar/>
        </div>
        <SearchForm params={params} onParamChange={handleParamChange} />
        </Container>
      </div>


    <Container className="my-4">


      {/* Test Cards */}
      {/* <Grid container spacing={4}>
        <TestJob/>
        <TestJob/>
        <TestJob/>
        </Grid> */}


    {/* Loading and Error*/}
      {loading &&     <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>}
      {error && <h3>Error. Too Many Request to the API.</h3>}



      {/* Job listing  */}
      <Grid container spacing={4}>
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
        </Grid>



      {/* Pagination */}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />      

    </Container>
    </div>
  )
}

export default App;
