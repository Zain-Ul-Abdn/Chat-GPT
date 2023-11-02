import React, { useState } from 'react'
import '../components/navbar.css'
import darkPanel from '../Icons/dark-panel.png'
import sunlogo from '../Icons/sun.png'
import moonlogo from '../Icons/moon.png'
import lightPanel from '../Icons/light-panel.png'


function Header(props) {
    const [check, setCheck] = useState(false);

    const [mode, setMode] = useState({
        'color': 'Black',
        'backgroundColor': 'White'

    })
    const [panelmode, setPanelmode] = useState(darkPanel)
    const [daymode, setDaymode] = useState(moonlogo)

    function changeMode() {
        if (!check) {
            setCheck(true)
            setMode({
                'color': 'Black',
                'backgroundColor': 'White'
            })
            setDaymode(moonlogo)
            setPanelmode(darkPanel)
        }
        else {
            setCheck(false)
            setMode({
                'color': 'white',
                'backgroundColor': '#323233'
            })
            setDaymode(sunlogo)
            setPanelmode(lightPanel)
            
        }
    }

    return (
        <div className='navbar' style={mode}>
            <input type="checkbox" checked={check} />
            <img className='sidePanellogo' src={panelmode} />
            <p style={mode}>{props.name}</p>
            <img className='darkMode' src={daymode} onClick={changeMode} />
        </div>
    )
}

export default Header
