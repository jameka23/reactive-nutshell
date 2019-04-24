/*
This component will list all the articles and the user friend's articles. It is has 2 child components
- TheArticle.js which will render the article's
- Friendsl
*/

import React, { Component } from 'react'
import { Card, CardBody , Button} from 'reactstrap';
import TheArticle from './TheArticle'
import ArticleManager from '../../modules/ArticleManager'
import FriendsArticle from './FriendsArticle'
import './articles.css'


export default class ArticlesList extends Component {
   
    state = {
        userArticles: [],
        friendsArticles: [],
        friends:[1,2]
    }
    
    componentDidMount() {

        ArticleManager.all()
        .then( allArticlesArray => {
            // console.log(this.props.activeUser)
            const userArticles = allArticlesArray.filter(articleElement => articleElement.userId === parseInt(this.props.activeUser))

            const friendsArticles = allArticlesArray.filter(articleElement => this.state.friends.find(friend => parseInt(friend) === articleElement.userId))
            // console.log("The current user is: ",this.props.activeUser, "and their articles include: ",userArticles, "and the friends articles are: ", friendsArticles)

            this.setState({
                userArticles: userArticles,
                friendsArticles: friendsArticles
            })
        })
    }
 

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <Button color="success"
                            onClick={() => {
                                {
                                    this.props.history.push('/news/new')
                                }
                            }}
                            >Add Article</Button>
                        <div className="users__articles">
                            {
                                this.state.userArticles.map(article =>
                                <TheArticle key={article.id} {...this.props} {...this.props.deleteArticle} TheArticle={article} />    
                                )
                            }
                        </div>
                    </CardBody>
                    <CardBody className="friends__articles">
                            {
                                this.state.friendsArticles.map(article => 
                                <FriendsArticle key={article.id} TheArticle={article} />    
                                )
                            }
                    </CardBody>
                </Card>
            </div>
        )
    }
}