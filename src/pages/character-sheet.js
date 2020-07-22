import React, { Component } from "react"
import { connect } from "react-redux"

import ReactTooltip from 'react-tooltip'

import Layout from "../components/layout"

import Subnav from "../components/CharacterSheet/Subnav"
import Image from "../components/CharacterSheet/Image"
import Stats from "../components/CharacterSheet/Stats"
import Section from "../components/CharacterSheet/Section"
import Description from "../components/CharacterSheet/Description"

import abilities from '../../json/powers/abilities.json'
import spells from '../../json/powers/spells.json'
import magicItems from '../../json/powers/magicItems.json'
import equipment from '../../json/powers/equipment.json'

/* Actions */
import { updateSheet, loadSheets } from "../actions/sheetActions"

class Sheet extends Component {
  componentDidMount() {
    var sheets = localStorage.getItem("sheets")
    if (sheets && sheets.length) {
      this.props.loadSheets(JSON.parse(sheets))
    }
    //ReactTooltip.rebuild()
  }

  
  render() {
    var { sheets, updateSheet } = this.props
    var sheet = sheets[0]
    const isSSR = typeof window === "undefined"
    if (!isSSR) { document.title = sheet.name + " | Character Sheet" } 
    var subnav = <Subnav/>
    //ReactTooltip.rebuild()
    return (
      <Layout subnav={subnav}>
          <article className="character-sheet" id="character-sheet">
              <input
		type="text"
		className="character-name"
		placeholder="Character's Name"
		value={sheet.name}
		onChange={e => updateSheet({ ...sheet, name: e.target.value })}
              />
              <div className="clearfix" />
              <Image />
              <Stats />
              <div className="col-1">
		  <Section title="Abilities" singular="Ability" powers={abilities}
			   section="abilities"/>
		  <Section title="Spells" singular="Spell" powers={spells}
			   section="spells" />
              </div>
              <div className="col-2">
		  <Section title="Magic Items" singular="Item" powers={magicItems}
			   section="magicItems"/>
		  <Section title="Equipment" singular="Item" powers={equipment}
			   section="equipment" /> 
              </div>

              <div className="clearfix" />

              <hr />
              <div className="col-1">
		  <Description type={0} />
		  <Description type={2} />
              </div>
              <div className="col-2">
		  <Description type={1} />

		  <Description type={3} />
              </div>
              <div className="clearfix" />
          </article>
      </Layout>
    )
  }
}

export default connect(({ sheets }) => ({ sheets }), {
  updateSheet,
  loadSheets,
})(Sheet)
