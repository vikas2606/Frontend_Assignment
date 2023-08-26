import React from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge } from './store/store';

const MessageParser = ({ children, actions }) => {

    const dispatch = useDispatch()


    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "name") {
            actions.afterNameMessage();
            children.props.state.userData.name = message;
            dispatch(setName(message))
            console.log(message)
        } else if (checker === "age") {
            dispatch(setAge(message))
            actions.afterAgeMessage();


            console.log(message, checker)

        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
