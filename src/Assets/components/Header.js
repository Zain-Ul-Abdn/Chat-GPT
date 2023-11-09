import React, { useState, useEffect } from 'react'
import '../components/navbar.css'
import darkPanel from '../Icons/dark-panel.png'
import sunlogo from '../Icons/sun.png'
import moonlogo from '../Icons/moon.png'
import lightPanel from '../Icons/light-panel.png'
import Sidepanel from './Sidepanel'

function Header(props) {
    const [check, setCheck] = useState(false);
    const [mode, setMode] = useState({
        'color': 'Black',
        'backgroundColor': 'White'

    })
    const [panelmode, setPanelmode] = useState(darkPanel)
    const [daymode, setDaymode] = useState(moonlogo)

    //For SidePanel component
    let IsPanelHide = false;

    useEffect(() => {
        if (check) {
            setMode({
                'color': 'white',
                'backgroundColor': '#323233'
            })
            setDaymode(sunlogo)
            setPanelmode(lightPanel)

        }
        else {
            setMode({
                'color': 'Black',
                'backgroundColor': 'White'
            })
            setDaymode(moonlogo)
            setPanelmode(darkPanel)
        }
    }, [check])

    const changeMode = () =>
        (check) ? setCheck(false) : setCheck(true);


    function handleclick() {
        IsPanelHide = (!IsPanelHide) ? true : false;
        // console.log(IsPanelHide)
    }

    return (
        <>
            <input type="checkbox" checked={check} />
            <div className='navbar' style={mode}>
                <img
                    className='sidePanellogo'
                    src={panelmode}
                    onClick={handleclick} />

                <p style={mode}>{props.name}</p>
                <img
                    className='darkMode'
                    src={daymode}
                    onClick={changeMode}
                />
            </div>
            <Sidepanel hide={IsPanelHide} />
        </>
    )
}

export default Header