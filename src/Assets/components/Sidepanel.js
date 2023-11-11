import '../components/Sidepanel.css'
import messagelogo from '../Icons/message.png'
import logoutlogo from '../Icons/logout.png'

function Sidepanel(props) {

  let questions = [];
  for (let index = 0; index < 20; index++) {
    questions.push("Your question placed here")

  }

  const date = new Date();

  return (
    <div className="container" style={props.style}>
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
