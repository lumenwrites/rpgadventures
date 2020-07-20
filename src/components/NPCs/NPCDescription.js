import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextareaAutosize from 'react-textarea-autosize'

import { updateNpc } from "../../actions/npcsActions"

class NPCDescription extends Component {
  state = {
    editImage: false
  }
  
  toggleEdit = () => {
    this.setState({editImage:!this.state.editImage})
  }
  update = (value) => {
    var { npc, updateNpc } = this.props
    this.props.updateNpc({...npc, ...value})
  }

  render() {
    var { npc } = this.props

    return (
      <>
	  { this.state.editImage ?
	    (<div className="image-url">
		<input type="text"
		       placeholder="Image Url"
		       value={npc.image}
		       onChange={(e)=>this.update({image:e.target.value})}/>
		<FontAwesomeIcon className="icon"
				 icon={["fas", "check-circle"]}
				 onClick={this.toggleEdit}/>
	    </div>) : (
	      <div
	      className="character-image"
	      style={{ backgroundImage: 'url("' + npc.image + '")' }}
	      onClick={this.toggleEdit}
	      />) }
	  <textarea
	    className="character-description"
	    placeholder="Description, Personality, Goals, Motivations."
	    value={npc.description}
	    onChange={(e)=>this.update({description:e.target.value})} />
	  {/* <div className="character-description">{npc.description}</div> */}
      </>
    )
  }
}
export default connect(({ }) => ({ }), { updateNpc })(NPCDescription)
