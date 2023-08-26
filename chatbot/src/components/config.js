import { createChatBotMessage} from 'react-chatbot-kit';
import StartBtn from "./Chatbot/StartBtn"
import AgeSelect from "./Chatbot/AgeSelect"
import Counter from './Chatbot/Counter';


const config = {
    botName: "Student Enroll System",
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
        widget: "startBtn"
    })],
 
    state: {
        checker: null,
        userData: {
            name: "",
            age: 0,
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "ageSelect",
            widgetFunc: (props) => <AgeSelect {...props} />,
        },
        {
            widgetName:"counter",
            widgetFunc:(props)=><Counter {...props}/>
        }
       
    ]
};

export default config;