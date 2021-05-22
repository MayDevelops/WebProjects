import React, {useState} from 'react';
import './FormEntry.css';
import {connect, useDispatch} from "react-redux";
import {addComment} from "../Data/asyncActions";

export const FormEntry = () => {
    const [username, setUserName] = useState('');
    const [userComment, setUserComment] = useState('')

    const dispatch = useDispatch();

    const handleAddComment = () => {
        dispatch(addComment("ADD", username, userComment));
        setUserComment('');
        cancelCourse();
    }

    const cancelCourse = () => {
        document.getElementById("form").reset();
    }


    if (username !== '' && userComment !== '') {
        return (
            <div className="formWrapper">
                <form>
                    <label>
                        Name:
                        <input onChange={event => setUserName(event.target.value)}/>
                    </label>
                </form>
                <form id="form">
                    <label>
                        Comment:
                        <input onChange={event => setUserComment(event.target.value)}/>
                    </label>
                </form>
                <button className="bottomFormSpacer" onClick={handleAddComment}>Submit Comment</button>
            </div>

        );
    } else {
        return (
            <div className="formWrapper">
                <form>
                    <label>
                        Name:
                        <input onChange={event => setUserName(event.target.value)}/>
                    </label>
                </form>
                <form>
                    <label>
                        Comment:
                        <input onChange={event => setUserComment(event.target.value)}/>
                    </label>
                </form>
            </div>
        );
    }


};

const mapStateToProps = state => ({
    comments: state.comments
});

export const a = connect(mapStateToProps)(FormEntry);
