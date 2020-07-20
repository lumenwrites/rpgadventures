import React, { Component } from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"

import Subnav from "../components/CharacterSheet/Subnav"
import Image from "../components/CharacterSheet/Image"
import Stats from "../components/CharacterSheet/Stats"
import Section from "../components/CharacterSheet/Section"
import Description from "../components/CharacterSheet/Description"

/* Actions */
import { updateSheet, loadSheets } from "../actions/sheetActions"

class Sheet extends Component {
  componentDidMount() {
    var sheets = localStorage.getItem("sheets")
    if (sheets && sheets.length) {
      this.props.loadSheets(JSON.parse(sheets))
    }
  }

  render() {
    var { sheets, updateSheet } = this.props
    var sheet = sheets[0]
    var subnav = <Subnav/>
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
		  <Section title="Abilities" type="Ability" />
		  <Section title="Spells" type="Spell" />
              </div>
              <div className="col-2">
		  <Section title="Magic Items" type="Magic Item" />
		  <Section title="Equipment" type="Item" />
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
