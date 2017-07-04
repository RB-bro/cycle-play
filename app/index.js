import xs from 'xstream'
import {run} from '@cycle/run'
import {makeDOMDriver, div} from '@cycle/dom'

import styles from './styles/main.styl'
const APP = '#app'
function main (responses) ::
  const sinks = ::
    DOM: xs.periodic(1000).map @
      i => div @ ` ${i} Seconds elapsed`

  return sinks


const drivers = @{}
  DOM:makeDOMDriver @ APP


run @ main, drivers

