import React, { Component } from "react"
import { connect } from "react-redux"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from "../components/elements/modal"
import { toggleModal } from "../actions/utils"

class Comp extends Component {
  render() {
    return (
      <div>
        <div
          onClick={() => {
            this.props.toggleModal("test-modal")
          }}
        >
          Test
          <FontAwesomeIcon icon={["fas", "plus-circle"]}/>
        </div>

        <Modal name="test-modal" className="cards-modal wide">
          <h1>Test</h1>
        </Modal>
      </div>
    )
  }
}

export default connect(({}) => ({}), { toggleModal })(Comp)
