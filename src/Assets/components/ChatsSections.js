import React, { useRef, useState } from 'react'
import './chatSection.css'
import sendArrowlogo from '../Icons/send_arrow.png'
import gptlogo from '../Icons/gpt_logo.png'
// import {InsertChats}  from '../Backend/Database/Datalogic';

export default function ChatsSections() {

  const [textareaHeight, setTextareaHeight] = useState('3rem');
  const [inputValue, setInputValue] = useState('');
  const [gptResponse, setGptResponse] = useState('How can I help you ');

  const [messages, setMessages] = useState([]);

  // setGptResponse(GPT())

  let textareaRef = useRef(null)
  const maxHeight = 150;

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = '3rem'
      const newHeight = Math.min(textarea.scrollHeight, maxHeight);
      setTextareaHeight(textarea.scrollHeight < newHeight ? 'auto' : `${newHeight}px`);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();

      setGptResponse(GPT())
      setMessages([...messages, { userVal: inputValue, gptResponse: gptResponse }]);

      Post_Data();

      setInputValue('');
      adjustTextareaHeight();
    }
  };

  //Generate random responses for initial version
  function GPT() {
    const responses = ['I am fine', 'I don\'t have feelings', 'How can I help you']

    let random = Math.floor(Math.random() * responses.length);

    return responses.at(random);
  }

  //Send data to server and then save into a mongodb
  const Post_Data = async () => {

    try {
      const res = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Corrected typo in "Content-Type"
        },
        body: JSON.stringify({
          query: inputValue,
          response: gptResponse,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <div className='Chat-container'>

      <div className="Chat-Display">

        {(messages.length !== 0) ? (
          messages.map(({ userVal, gptResponse }, index) =>
            <div key={index}>
              <div className="userChat">
                <span className="userImage">Z</span>
                <p className="userQuestion">{userVal}</p>
              </div>
              <div className="bootChat">
                <span className="bootImage">
                  <img src={gptlogo} alt="GPT Logo" />
                </span>
                <p className="bootResponse">
                  {gptResponse}
                </p>
              </div>
            </div>
          )) : (
          //Show message when there is no chats between user and gpt
          <div className='startupMessage'>
            <span>
              <img src={gptlogo} alt='GPT logo' />
            </span>
            <p>How can I help you today?</p>
          </div>
        )}

      </div>

      <div className="userInput" >
        <textarea
          id="message-box"
          placeholder='Send a message'
          ref={textareaRef}
          style={{
            height: textareaHeight,
          }}
          onInput={adjustTextareaHeight}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button>
          <img
            src={sendArrowlogo}
            alt='Arrow logo' />
        </button>
      </div>
      <footer id='gptFooter'>ChatGPT can make mistakes. Consider checking important information.</footer>

    </div >

  )
}
