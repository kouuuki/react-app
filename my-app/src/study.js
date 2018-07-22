import React from "react"
import ReactDOM from "react-dom"

class Content extends React.Component{
  render(){
    return(
      <h1>コンテンツです。</h1>
    )
  }
}

ReactDOM.render(
  <Content />
  document.getElementById("app")
)
