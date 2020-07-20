import React, { Component } from "react"
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import blankNpc from "../../../json/premade-npcs/blank-npc.json"
import Wizard from "../../../json/premade-characters/Wizard.json"
import Warrior from "../../../json/premade-characters/Warrior.json"
import Ranger from "../../../json/premade-characters/Ranger.json"
import Ninja from "../../../json/premade-characters/Ninja.json"
import Druid from "../../../json/premade-characters/Druid.json"
import Charmer from "../../../json/premade-characters/Charmer.json"

import { downloadFile } from "../../utils"
/* Actions */
import { createNpc } from "../../actions/npcsActions"

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
    reader.onload = function (e) {
      /* Once reading has completed */
      var contents = e.target.result
      var json = JSON.parse(contents)
      console.log("Opened file", file.name, json)
      if (Array.isArray(json)) {
        this.props.loadNpcs(json)
      } else {
        this.props.loadNpc(json)
      }
      //this.props.loadTreeFile(tree)
    }.bind(this)
  }

  downloadNpcs = () => {
    var { npcs } = this.props
    downloadFile("npcs.json", JSON.stringify(npcs))
  }

  render() {
    return (
      <div className="subnav">
          <div className="wrapper">

              <div className="dropdown">
		  <div className="menu-handle btn">
		      <FontAwesomeIcon icon={["fas", "plus-circle"]} />
		      Create
		  </div>
		  <div className="menu">
		      <div
			className="item btn"
			onClick={() => this.createNpc(blankNpc)}
		      >
			  Blank
		      </div>
		      <div
			className="item btn"
			onClick={() => this.createNpc(Wizard)}
		      >
			  Wizard
		      </div>
		      <div
			className="item btn"
			onClick={() => this.createNpc(Warrior)}
		      >
			  Warrior
		      </div>
		      <div
			className="item btn"
			onClick={() => this.createNpc(Ranger)}
		      >
			  Ranger
		      </div>
		      <div className="item btn" onClick={() => this.createNpc(Ninja)}>
			  Ninja
		      </div>
		      <div className="item btn" onClick={() => this.createNpc(Druid)}>
			  Druid
		      </div>
		      <div
			className="item btn"
			onClick={() => this.createNpc(Charmer)}
		      >
			  Charmer
		      </div>
		  </div>
              </div>

              <div className="btn" onClick={this.downloadNpcs}>
		  <FontAwesomeIcon icon={["fas", "download"]} />
		  Save
              </div>
              <div className="btn" onClick={this.downloadNpcs}>
		  <FontAwesomeIcon icon={["fas", "upload"]} />
		  Open
              </div>
          </div>
      </div>
    )
  }
}

export default connect(({ npcs }) => ({ npcs }), {createNpc})(Subnav)
