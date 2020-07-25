import React, { Component } from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import blankNpc from "../../../json/premade-npcs/blank-npc.json"

import { downloadFile } from "../../utils"
/* Actions */
import { createNpc, loadNpcs, loadNpc } from "../../actions/npcsActions"

class Subnav extends Component {
  createNpc = (archetype) => {
    var randomId = Math.random().toString(36).substring(7)
    this.props.createNpc({ ...archetype, id: randomId })
  }

  openFile = e => {
    var file = e.target.files[0]
    if (!file) return
    if (!file.name.includes("json")) return

    var reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (e) => {
      /* Once reading has completed */
      var contents = e.target.result
      var json = JSON.parse(contents)
      console.log("Opened file", file.name, json)
      if (Array.isArray(json)) {
	/* Load a set of NPCs */
        this.props.loadNpcs(json)
      } else {
	/* Load a single NPC */
        this.props.loadNpc(json)
      }
    }
  }

  downloadNpcs = () => {
    var { npcs } = this.props
    downloadFile("npcs.json", JSON.stringify(npcs, null, 2))
  }

  render() {
    return (
      <div className="subnav">
	  <div className="wrapper">

	      <div className="dropdown">
		  <div className="menu-handle btn"
		       onClick={() => this.createNpc(blankNpc)}>
		      <FontAwesomeIcon icon={["fas", "plus-circle"]} />
		      Create
		  </div>
		  <div className="menu">
		      <div className="item btn"
			   onClick={() => this.createNpc(blankNpc)}>
			  Blank
		      </div>
		  </div>
	      </div>

	      <div className="btn" onClick={this.downloadNpcs}>
		  <FontAwesomeIcon icon={["fas", "download"]} />
		  Save
	      </div>

	      {/* Hidden html5 file input */}
	      <input
		type="file"
		id="file-input"
		accept=".json"
		ref={ref => (this.fileInput = ref)}
		onChange={this.openFile}
	      />
	      {/* Just triggers click on file input */}
	      <div className="btn" onClick={() => this.fileInput.click()}>
		  <FontAwesomeIcon icon={["fas", "upload"]} />
		  Open
	      </div>
	  </div>
      </div>
    )
}
}

export default connect(({ npcs }) => ({ npcs }), {createNpc, loadNpcs, loadNpc})(Subnav)
