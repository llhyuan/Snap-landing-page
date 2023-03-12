import '../scss/_Header.scss'
import Dropdown from '../components/Dropdown'
import { useState } from 'react'

import logo from '../assets/images/logo.svg'
import menu_show from '../assets/images/icon-menu.svg'
import menu_hide from '../assets/images/icon-close-menu.svg'

import icon_todo from '../assets/images/icon-todo.svg'
import icon_cal from '../assets/images/icon-calendar.svg'
import icon_reminder from '../assets/images/icon-reminders.svg'
import icon_planning from '../assets/images/icon-planning.svg'

const DROPDOWNS = {
  Features: [
    [icon_todo, 'Todo List'],
    [icon_cal, 'Calender'],
    [icon_reminder, 'Reminders'],
    [icon_planning, 'Planning'],
  ],
  Company: [
    [null, 'History'],
    [null, 'Our story'],
    [null, 'Blog'],
  ],
  Careers: [],
  About: [],
}

function Header() {
  const [menuStatus, toggleMenuStatus] = useState(false)
  const dropdowns = Object.entries(DROPDOWNS).map((dropdown) => (
    <Dropdown key={dropdown[0]} content={dropdown} />
  ))
  return (
    <nav className='nav-container'>
      <img className='logo' src={logo} alt='logo' />
      {!menuStatus ? (
        <img
          className='show-menu menu__mobile'
          src={menu_show}
          alt='show menu'
          onClick={() => {
            toggleMenuStatus(!menuStatus)
          }}
        />
      ) : (
        <div className='menu'>
          <img
            className='hide-menu'
            src={menu_hide}
            alt='hide menu'
            onClick={() => {
              toggleMenuStatus(!menuStatus)
            }}
          />
          {dropdowns}
          <div className='login'>
            <a href='#'>Login</a>
            <a href='#'>Register</a>
          </div>
        </div>
      )}
      <div className='menu__desktop'>
        <div className='menu-items'>{dropdowns}</div>
        <div className='login__desktop'>
          <a href='#'>Login</a>
          <a href='#'>Register</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
