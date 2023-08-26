import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { setName,setAge } from '../store/store';

export default function AgeSelect(props) {

    const dispatch=useDispatch();

    const ageOptions = [];
    for (let age = 18; age <= 45; age++) {
        ageOptions.push(
            <option key={age} value={age}>
                {age}
            </option>
        );
    }

    const handleAgeChange = (event) => {
        const selectedAge = parseInt(event.target.value);
        const message=createClientMessage(selectedAge)
        props.actions.updateState(message)
        dispatch(setAge(selectedAge))
        props.actions.afterAgeMessage()
        props.state.userData.age=selectedAge
        console.log(selectedAge,props);
    };

    return (
        <div>
            <select className='start-btn' id="age" onChange={handleAgeChange}>
                {ageOptions}
            </select>
        </div>
    );
}
