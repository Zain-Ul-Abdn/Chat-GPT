import { useContext, useEffect, useState } from 'react'
import '../components/Sidepanel.css'
import messagelogo from '../Icons/message.png'
import logoutlogo from '../Icons/logout.png'
function Sidepanel(props) {

  const [panelStyle, setPanelStyle] = useState({
    'position': 'absolute',
    'top': '0',
    'left': '-280px'
  })

  useEffect(() => {
    if (true) {
      setPanelStyle({
        'position': 'absolute',
        'top': '0',
        'left': '0'
      })
    }
    else {
      setPanelStyle({
        'position': 'absolute',
        'top': '0',
        'left': '-280px'
      })
    }


  }, [])

  let questions = [];
    for (let index = 0; index < 5; index++) {
      questions.push("Your question placed here")
  
    }
      
  console.log(questions)
  const date = new Date();
 
  return (
    <div className="container" style={panelStyle}>
      <p>Recent History</p>
      <div className="date">Previous {date.getDate()} Days</div>

      <div className="messageSection">
        {questions.map(data => 
           <div className='messages'>
            <img src={messagelogo} />
             <p> {data} </p>
          </div>
        )}

          <div className='messages'>
            <img src={messagelogo} />
             <p> Question after Map functions here </p>
          </div>

      </div>
      <div className='userProfile'>
        <span className='namelogo'>Z</span>
        <span className='name'>Zain</span>
        <img src={logoutlogo} />
      </div>
    </div>
  )
}

export default Sidepanel
