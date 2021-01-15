import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Components/Jobs/Job'
import JobsPagination from './Components/Jobs/JobsPagination';
import SearchForm from './Components/Search/SearchForm';
import Navbar from './Components/Navbar/Navbar'
import TestJob from './Components/Jobs/TestJob'
// asdfasd
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
      <div className="Hero">

        <Container>
        <div className="HeroGroup">
        <Navbar/>
        </div>
        <SearchForm params={params} onParamChange={handleParamChange} />
        </Container>
      </div>
    <Container className="my-4">


      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

      {/* Loading */}
      {/* <Grid container spacing={4}>
        <TestJob/>
        <TestJob/>
        <TestJob/>
        </Grid> */}



      {loading &&     <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>}
      {error && <h3>Error. Too Many Request to the API.</h3>}
      <Grid container spacing={4}>
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
        </Grid>
      
      <div className="card-deck">
        <div>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>
      </div>
    </Container>
    </div>
  )
}

export default App;
