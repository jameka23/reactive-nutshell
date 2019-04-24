import React, { Component } from 'react'
import { CardText, CardTitle, Button } from 'reactstrap';

export default class TheArticle extends Component {

    render() {
        return(
            <React.Fragment key={this.props.TheArticle.id}>
                <CardTitle>
                    {this.props.TheArticle.title}
                </CardTitle>
                <CardText>
                    {this.props.TheArticle.synopsis}
                </CardText>
                <Button color="primary">Edit</Button>
                <Button color="danger">Delete</Button>
            </React.Fragment>
        )
    }
}