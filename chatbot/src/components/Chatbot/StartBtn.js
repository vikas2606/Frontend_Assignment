import React from 'react'
import { createClientMessage ,setState} from 'react-chatbot-kit';


export default function StartBtn(props) {

    const initialAction = () => {
        const message=createClientMessage("Got it!")
        props.actions.updateState(message)
        props.actions.initialAction();
        console.log(props)

    }

    return (
        <div>
            <button className='start-btn' onClick={() => initialAction()}>Got it!</button>
        </div >
    )
}
