import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextareaAutosize from 'react-textarea-autosize'

//import spells from '../../../json/spells.json'


class NPCCard extends Component {
    state = {
	showStats: false
    }
    renderPowers = ()=>{
	var {npc} = this.props
	if (!npc.powers) return
	return npc.powers.map((p,i)=> (
	    <div className="power" key={i}>
		<div className="title">
		    {p.title}
		    <div className="level">{p.level}</div>
		</div>
		<div className="description">{p.description}</div>
	    </div>
	))
    }
    render() {
	var { npc } = this.props
	return (
	    <div className="npc">
		{this.state.showStats ?
		 <div className="show-stats"
		      onClick={() => {this.setState({showStats:false})}}>
		     <FontAwesomeIcon icon={["fas", "user"]}/>
		 </div>
		:
		 <div className="show-stats"
		      onClick={() => {this.setState({showStats:true})}}>
		     <FontAwesomeIcon icon={["fas", "chart-line"]}/>
		 </div>
		}
		<div className="name">
		    <h1>{npc.name}</h1>
		</div>
		{this.state.showStats ?
		 <div className="sheet">
		     <div className="stats">
			 <div className="stat">
			     <div className="title">Health</div>
			     <input type="number"
				    className="value"
				    value={10}
				    onChange={(e)=>{}}/>
			 </div>
			 <div className="stat">
			     <div className="title">Energy</div>
			     <input type="number"
				    className="value"
				    value={10}
				    onChange={(e)=>{}}/>
			 </div>
			 <div className="stat">
			     <div className="title">Attack</div>
			     <input type="number"
				    className="value"
				    value={10}
				    onChange={(e)=>{}}/>
			 </div>
		     </div>
		     <div className="powers">
			 {this.renderPowers()}
		     </div>
		 </div>
		:
		 <>
		     <div className="character-image"
			  style={{backgroundImage:'url("'+npc.image+'")'}}
			  onClick={()=> this.setState({adding: true})}/>
		     <div className="character-description">
			 {npc.description}
		     </div>
		 </>
		}
		

	    </div>
	)
    }
}

export default NPCCard

