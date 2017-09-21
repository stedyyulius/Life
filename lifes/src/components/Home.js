import React, { Component } from 'react'
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <div className="content">
        <VoiceRecognition />
        <VoicePlayer
           play
           text="React voice player demonstration"
         />
      </div>
    )
  }
}

export default Home
