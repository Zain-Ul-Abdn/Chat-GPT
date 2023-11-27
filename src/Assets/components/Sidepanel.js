import '../components/Sidepanel.css'
import messagelogo from '../Icons/message.png'
import logoutlogo from '../Icons/logout.png'
import { useEffect } from 'react';
import { useState } from 'react';

function Sidepanel(props) {

  const [user_query, setUser_query] = useState([])
  const date = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gpt/getChat');
        const jsonData = await response.json();
        setUser_query(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="container" style={props.style}>
      <p>Recent History</p>

      <div className="date">Previous {date.getDate()} Days</div>
      <div className="messageSection">


        {user_query.map(data =>
          <div key={data.id} className='messages'>
            <img src={messagelogo} alt='messagelogo' />
            <p> {data.userChat} </p>
          </div>
        )}


      </div>
      <div className='userProfile'>
        <span className='namelogo'>Z</span>
        <span className='name'>Zain</span>
        <img src={logoutlogo} alt='logout' />
      </div>
    </div>
  )
}

export default Sidepanel
