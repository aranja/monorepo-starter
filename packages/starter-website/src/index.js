import { startClient } from 'react-chain'
import app from './app'

startClient(app, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
