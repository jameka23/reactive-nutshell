// Authors: Billy Mathison
// Page renders

import React, { Component } from "react"
import { Button, Input } from "reactstrap"



export default class MessageIndividual extends Component {
    state = {
        message: "",
    }

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    render() {
        if (this.props.beingEdited === true) {
            return <React.Fragment>
                <div key={this.props.message.id}>
                    <Input
                        id={this.props.message.id}
                        value={this.props.message.message}
                    />
                    <Button
                        id={this.props.message.id}
                        onClick={this.props.handleEditMessage}
                    >
                        Save
                </Button>
                </div>
            </React.Fragment>
        }
        else if (this.props.message.userId === this.props.activeUser) {
            return (
                <React.Fragment>
                    <div key={this.props.message.id}>
                        {this.props.message.message} {this.props.users.find(user => user.id === this.props.message.userId).userName}
                        <Button
                            id={this.props.message.id}
                            onClick={this.props.handleEditMessage}
                        >
                            Edit
                        </Button>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div key={this.props.message.id}>
                        {this.props.message.message} {this.props.users.find(user => user.id === this.props.message.userId).userName}
                    </div>
                </React.Fragment>
            )
        }

    }
}