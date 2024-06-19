import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import './Contactform.css';
const Contantform = () => {
    const send = (event) => {
        console.log(event);

    }
    const oncall = () => {
        console.log('call');
    }
    const onmsg = () => {
        console.log('msg');
    }

    return (
        <div className="contact">
        <div  className="contactinside">
        <div className="msg-call">
            <button onClick={onmsg} className ="button"><MdMessage />  message</button>
            <button onClick={oncall}
             className="button"><IoMdCall />   call</button>
        </div>
        <div className="form">
            <form send={send}>
                <input type="text" placeholder="Name" />    
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" />
                <button>Send</button>
            </form>
        </div>
        </div>
        <div className="contactpic"><img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/></div>
        </div>
       
    )   
}
export default Contantform; 