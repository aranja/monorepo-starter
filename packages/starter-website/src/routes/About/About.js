import React from 'react'
import Helmet from 'react-helmet'
import { withJob } from 'react-jobs'

const AsyncDetails = ({ jobResult }) => (
  <div>
    <Helmet>
      <title>About</title>
    </Helmet>
    I&quot;m async! My data is: {jobResult}
  </div>
)

export default withJob({
  work: () =>
    new Promise(resolve => setTimeout(() => resolve('DELAYED DATA'), 200)),
})(AsyncDetails)
