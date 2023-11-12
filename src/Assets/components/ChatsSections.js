import React, { useState } from 'react'
import './chatSection.css'
import sendArrowlogo from '../Icons/send_arrow.png'
import gptlogo from '../Icons/gpt_logo.png'

export default function ChatsSections() {

  const [value, setValue] =  useState('Send a Message')
  function handleInputChange(e){
    setValue(e.target.value);
  }
  return (
    <div className='Chat-container'>
      <div className="Chat-Display">
        <div className="userChat">
          <span className="userImage">Z</span>
          <p className="userQuestion">How are you?</p>

        </div>

        <div className="bootChat">
          <span className="bootImage">
            <img
              src={gptlogo} />
          </span>
          <p className="bootResponse">
            I don't have direct access to specific images or their RGB values, including logos related to the OpenAI GPT API. If

            If you are referring to the GPT-3.5 Turbo logo, OpenAI may have specific guidelines on the use ofuthorized information.

          </p>
        </div>
      </div>

      <div className="userInput" >
      <input
        type="text"
        id="message-box"
        value={value}
        onChange={handleInputChange}
      />

        <button>
          <img
            src={sendArrowlogo} />
        </button>
      </div>
      <footer>ChatGPT can make mistakes. Consider checking important information.</footer>
    </div>
  )
}
