import React from 'react'
import Card from '../components/UI-interfaces/Card'

const PageOne = () => {
  return (
    <div>
      <h1
        style={{ fontSize: '22px', marginLeft: '24px', marginBottom: '22px' }}
      >
        {' '}
        Page Top
      </h1>
      <Card>
        <h5>Here to give a</h5>
        <p>Impression of my style</p>
        <br />
        With routing
      </Card>
      <div></div>
    </div>
  )
}

export default PageOne
