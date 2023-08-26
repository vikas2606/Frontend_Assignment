import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Enter your name');

        updateState(message, "name")

    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Enter your age.", {
            widget: "ageSelect"
        })
        updateState(message, "age")
    }
    const afterAgeMessage = () => {
        const message=createChatBotMessage("Thank you. In 5 seconds, bot will exit",{
            widget:"counter"
        })
        updateState(message);
    }; 



    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {

                        afterNameMessage,
                        initialAction,
                        afterAgeMessage,
                        updateState
                    },
                });
            })}
            
        </div>
    );
};

export default ActionProvider;