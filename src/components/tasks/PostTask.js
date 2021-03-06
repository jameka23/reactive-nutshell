import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../modules/APICaller"


export default class TaskEdit extends Component {
    state = {
        taskName: "",
        targetDate: "",
        isComplete: false
    }


    // handle the field change when the input box is edited
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleSubmit = event => {
        // prevent the page from going to another page
        event.preventDefault()
        const newTask = {
            userId: parseInt(this.props.activeUser),
            taskName: this.state.taskName,
            targetDate: this.state.targetDate,
            isComplete: this.state.isComplete
        }
        API.postOne("tasks", newTask)
        .then(()=> {
            this.props.refreshTask()
        })

    }


    render(){
        return (
            <Form>
                <FormGroup>
                    <Label for="taskName">Task</Label>
                    <Input 
                    type="text" 
                    required
                    id="taskName"
                    onChange={this.handleFieldChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="targetDate">URL</Label>
                    <Input 
                    type="date" 
                    required
                    id="targetDate"
                    onChange={this.handleFieldChange}
                    placeholder="Enter a task"
                    />
                </FormGroup>
                <Button color="primary"
                    onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }

}