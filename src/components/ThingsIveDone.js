import React from 'react'

const ThingsIveDone = (props) => {
    console.log(props)
return <h1>This thing {props.match.params.id}</h1>
}

export default ThingsIveDone;