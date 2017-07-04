import React, { Component }
from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';
import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {

    constructor(props) {
        super(props);
        this.postNewComment = this.postNewComment.bind(this);

        this.state = {
            comments: {
            },
            isLoggedIn: false,
            user: {}
        };
        this.refComments = this.props.base.syncState('comments', {
            context: this,
            state: 'comments'
        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                this.setState({isLoggedIn: true, user});
            } else {
                this.setState({isLoggedIn: false, user: {}});
            }
        }.bind(this));
    }

    postNewComment(comment) {
        comment.user = {
            uid: this.state.user.uid,
            name: this.state.user.displayName
        };
        const comments = {...this.state.comments};
        const timestamp = Date.now();
        comments[`comm-${timestamp}`] = comment;
        this.setState({
            comments: comments
        });
    }

    auth() {
// Sign in using a popup.
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        firebase.auth().signInWithPopup(provider).then(function (result) {
//// This gives you a Facebook Access Token.
//            var token = result.credential.accessToken;
//            console.log('token ', token);
//            // The signed-in user info.
//            var user = result.user;
//            console.log('user ', user);
        });
    }

    unauth() {
        firebase.auth().signOut().then(function () {

        }, function (error) {
            console.log('erro ao deslogar. ', error);
        });
    }

    render() {
        return (
                <div className="container">
                    {
                        this.state.isLoggedIn &&
                                    <div>
                                        <img src={this.state.user.photoURL} alt="foto de perfil"/>
                                        &nbsp; &nbsp;<label>{this.state.user.displayName}</label>
                                        &nbsp; &nbsp;<button className="btn btn-primary" onClick={() => this.unauth()}>Sair</button>
                                        <hr/>
                                        <NewComment postNewComment={this.postNewComment}/>
                                    </div>
                    }
                    {
                        !this.state.isLoggedIn &&
                                    <div className="alert alert-info">
                                        <button onClick={() => this.auth()}>
                                            Entre com o Facebook para comentar
                                        </button>
                                    </div>
                    }
                    <br/>
                    <Comments comments={this.state.comments}/>
                </div>
                );
    }
}
;
export default App;
