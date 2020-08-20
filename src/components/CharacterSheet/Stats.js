import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* Actions */
import { updateSheet } from '../../actions/sheetActions'


class Stats extends Component {
  update = (value, key)=> {
    var sheet = this.props.sheets[0]
    sheet = {...sheet}
    if (parseInt(value) > 12) return
    sheet[key] = parseInt(value)
    this.props.updateSheet(sheet)
  }
  render() {
    var sheet = this.props.sheets[0]
    var memoryCount = sheet.abilities.length + sheet.spells.length
    var itemCount = sheet.magicItems.length + sheet.equipment.length
    //console.log(sheet)
    return (
      <div className="stats">
	  <div className="stat">
	      <div className="title">
		  Health
	      </div>
	      <div className="inputs-wrapper">
		  <input type="number"
			 className="value"
			 data-tip="Current Health"
			 value={sheet.currentHealth}
			 onChange={(e)=>
			   this.update(e.target.value,
				       "currentHealth")}/>
		  {/* 		  / 
		      <input type="number"
		      className="value"
		      data-tip="Max Health"
		      value={sheet.maxHealth}
		      onChange={(e)=>
		      this.update(e.target.value,
		      "maxHealth")}/>
		    */}
	      </div>
	  </div>

	  <div className="stat">
	      <div className="title">
		  Energy
	      </div>
	      <div className="inputs-wrapper">
		  <input type="number"
			 className="value"
		  	 data-tip="Current Energy"
			 value={sheet.currentEnergy}
			 onChange={(e)=>
			   this.update(e.target.value,
				       "currentEnergy")}/>
		  {/* 		  / 
		      <input type="number"
		      className="value"
		      data-tip="Max Energy"
		      value={sheet.maxEnergy}
		      onChange={(e)=>
		      this.update(e.target.value,
		      "maxEnergy")}/>
		    */}
	      </div>
	  </div>
	  
	  <div className="stat">
	      <div className="title">
		  Experience
	      </div>
	      <input type="number"
		     className="value"
		     value={sheet.experience}
		     onChange={(e)=>
		       this.update(e.target.value,
				   "experience")}/>
	  </div>
      </div>
    )
  }
}

export default connect(({sheets})=>({sheets}), { updateSheet })(Stats)
