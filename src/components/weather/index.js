import React from "react"

export const Weather = props => {
  const { name, weather } = props.api

  return (
    <div>
      <h1>{name}</h1>
      <div>{weather[0].icon}</div>
    </div>
  )
}