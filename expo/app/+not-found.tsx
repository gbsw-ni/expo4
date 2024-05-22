import { Redirect } from 'expo-router'
//import React = require('react')
import React from 'react'

export default function NotFoundScreen() {
  return <Redirect href={'/start'} />
}
