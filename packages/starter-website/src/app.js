import React from 'react'
import createReactChain from 'react-chain'
import bootstrapper from './middlewares/react-async-bootstrapper'
import asyncComponent from './middlewares/react-async-component'
import jobs from './middlewares/react-jobs'
import router from './middlewares/react-router'
import helmet from './middlewares/react-helmet'
import Layout from './components/Layout'

export default createReactChain()
  .chain(bootstrapper())
  .chain(asyncComponent())
  .chain(jobs())
  .chain(helmet())
  .chain(router())
  .chain(() => () => <Layout />)
