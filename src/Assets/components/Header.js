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

    const [panellogoPosition, setPanellogoPosition] = useState({
        'transform': 'translateX(-1px)'

    })

    const [panelmode, setPanelmode] = useState(darkPanel)
    const [daymode, setDaymode] = useState(moonlogo)
    //For SidePanel component
    const [isPanelHide, setIsPanelHide] = useState(false);
    const [panelStyle, setPanelStyle] = useState({
        top: '0',
        left: '0',
    });


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

    useEffect(() => {
        if (isPanelHide) {
            setPanelStyle({
                top: '0',
                left: '0',
            });
        } else {
            setPanelStyle({
                top: '0',
                left: '-280px',
            });
        }

    }, [isPanelHide]);

    const changeMode = () =>
        (check) ? setCheck(false) : setCheck(true);


    const handleclick = () => {
        setIsPanelHide((prevIsPanelHide) => !prevIsPanelHide);
        if (!isPanelHide) {
            setPanellogoPosition({
                'transform': 'translateX(12rem)'
            })
            setPanelmode(lightPanel)
        }
        else {
            (check) ? setPanelmode(lightPanel) : setPanelmode(darkPanel);
            setPanellogoPosition({
                'transform': 'translateX(-1px)'
            })
        
        }
    };


    return (
        <>
            <input type="checkbox" checked={check} />
            <div className='navbar' style={mode}>
                <img
                    className='sidePanellogo'
                    src={panelmode}
                    onClick={handleclick}
                    style={panellogoPosition} />

                <p style={mode}>{props.name}</p>
                <img
                    className='darkMode'
                    src={daymode}
                    onClick={changeMode}
                />
            </div>
            <Sidepanel style={panelStyle} />
        </>
    )
}

export default Header
