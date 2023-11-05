import React, { useState } from 'react'
import '../components/navbar.css'
import darkPanel from '../Icons/dark-panel.png'
import sunlogo from '../Icons/sun.png'
import moonlogo from '../Icons/moon.png'
import lightPanel from '../Icons/light-panel.png'
import Sidepanel from './Sidepanel'

function Header(props) {
    const [check, setCheck] = useState(false);

    const [checkPanel, setCheckPanel] = useState(false);
    const [showpanel, setShowpanel] = useState({
        'position': 'absolute',
        'top': '0',
        'left': '-280px'
    })


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

    
    function handleclick() {

        if (checkPanel) {
            setShowpanel({
                'position': 'absolute',
                'top': '0',
                'left': '0'
            })
            setCheckPanel(false)
            setPanelmode(lightPanel)
            
        }
        else {
            setShowpanel({
                'position': 'absolute',
                'top': '0',
                'left': '-280px'
            })
            setCheckPanel(true)
            setPanelmode(darkPanel)

        }

    }

    return (
        <>
            <input type="checkbox" checked={check} />
            <input type="checkbox" checked={checkPanel} />

            <div className='navbar' style={mode}>
                <img className='sidePanellogo' src={panelmode} onClick={handleclick} />
                <p style={mode}>{props.name}</p>
                <img className='darkMode' src={daymode} onClick={changeMode} />
            </div>
            <Sidepanel style={showpanel} />
        </>
    )
}

export default Header
