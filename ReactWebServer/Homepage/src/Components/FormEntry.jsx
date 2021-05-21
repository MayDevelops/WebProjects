import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {addComment} from "../Data/asyncActions";

export const FormEntry = () => {
    const [username, setUserName] = useState('');
    const [userComment, setUserComment] = useState('')

    const dispatch = useDispatch();

    const handleAddComment = () => {
        dispatch(addComment("ADD",username, userComment));
    }



        if(username !== '' && userComment !== '') {
            return (
            <div>
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
                <h1>{username} {userComment}</h1>
                <button onClick={handleAddComment}>SUBMIT NAMES BIT</button>
            </div>

            );
    } else {
            return (
                <div>
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
