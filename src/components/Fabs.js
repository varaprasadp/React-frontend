import React from "react"
import Fab from "@material-ui/core/Fab"

export default function Fabs(props) {
  return <Fab color = {props.color} onClick = {props.onClick}> {props.value} </Fab>
}
