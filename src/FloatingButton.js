import React, { useState } from 'react';
import floatingimg from "./assets/floatingimg.png";
import Chatlogo from "./assets/Chatlogo.png";
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";


const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setMessages([]);
        setInput('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages((prev) => [...prev, userMessage]);

            const botResponse = await fakeChatbotAPI(input);
            setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
            setInput('');
        }
    };

    const fakeChatbotAPI = (message) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Bot: You said "${message}"`);
            }, 1000);
        });
    };

    return (
        <div>
           <div
    className={`fixed bottom-6 right-6 floating-button-custom cursor-pointer transition-transform duration-300 ${isOpen ? 'transform scale-110' : ''}`}
    onClick={handleClick}
>
    <img className='' src={floatingimg} alt="Floating Button" />
</div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 chatbot-custom-box">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-80 transform transition-transform duration-300 relative p-0">
                        <div className='flex chatbot-form-custom' >
                        <img src={Chatlogo}/>
                        <h2 className="text-lg font-bold m-0 text-left">LiveChat</h2>
                        </div>
                        <div className="h-64 overflow-y-auto p-2 ">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                                >
                                    <span
                                        className={`inline-block rounded px-3 py-1 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                        <button
                                    type="button"
                                    onClick={handleClose}
                                    className=" p-2 pt-3 absolute top-0 right-0"
                                >
                                  <IoClose />
                                </button>
                            <div className='relative flex m-3' >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="border rounded w-full p-2 mb-0"
                                placeholder="Type your message..."
                            />
                            <div className="flex justify-between">
                           
                                <button
                                    type="submit"
                                    className=" text-gray-400 rounded p-2 "
                                >
                                <IoIosSend />
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
