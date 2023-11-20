import React, { useEffect, useRef, useState } from 'react'
import './chatSection.css'
import sendArrowlogo from '../Icons/send_arrow.png'
import gptlogo from '../Icons/gpt_logo.png'

export default function ChatsSections() {

  const [textareaHeight, setTextareaHeight] = useState('3rem');
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

  let messages = []

  let obj = { userVal: 'How are you?', gptResponse: 'I don\'t have feelings' };
  messages.push(obj)

  return (
    <div className='Chat-container'>

      <div className="Chat-Display">
        {messages.map(({ userVal, gptResponse }, index) =>
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
        )}

      </div>

      <div className="userInput" >
        <textarea
          id="message-box"
          // rows="1"
          placeholder='Send a message'
          ref={textareaRef}
          style={{
            height: textareaHeight,
          }}
          onInput={adjustTextareaHeight}
        />

        <button>
          <img
            src={sendArrowlogo} />
        </button>
      </div>
      <footer id='gptFooter'>ChatGPT can make mistakes. Consider checking important information.</footer>

    </div >


  )

}
