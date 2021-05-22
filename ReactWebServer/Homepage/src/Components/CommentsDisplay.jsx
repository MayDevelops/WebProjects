import React, {Component} from 'react';
import './CommentsDisplay.css';
import {connect} from 'react-redux';

class CommentsDisplay extends Component {
    render() {
        let comments = this.props.comments;
        let loopJS = ''
        let i;
        let comicNumber = this.props.num;
        for (i = 0; i < comments.length; i++) {
            if (comicNumber === comments[i].comicNum) {
                loopJS += '<ul>';
                loopJS += '<li>';
                loopJS += comments[i].userName + ' - ';
                loopJS += comments[i].userComment;
                loopJS += '<i>' + ' - ' + comments[i].time + '</i>'
                loopJS += '</li>';
                loopJS += '</ul>';

            }

        }
        if (loopJS === '') {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div className="comments">
                    <div dangerouslySetInnerHTML={{__html: loopJS}}></div>
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        num: state.num,
        comments: state.comments,
    };
};

export default connect(mapStateToProps, null)(CommentsDisplay);
