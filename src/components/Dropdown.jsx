import { useState } from 'react'
import '../scss/_Dropdown.scss'
import arrowUp from '../assets/images/icon-arrow-up.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'

function Dropdown({ content }) {
  const [dropdownStatus, setDropdownStatus] = useState(false)
  const [title, itemList] = content
  const items = itemList.map((item) => <Item content={item} />)
  function handleOnClick() {
    setDropdownStatus(!dropdownStatus)
  }

  return (
    <div className='dropdown-item'>
        {!!itemList.length ? (
          <h4 onClick={handleOnClick}>
            {title}
            {dropdownStatus ? (
              <img src={arrowUp} alt='arrow pointing up' />
            ) : (
              <img src={arrowDown} alt='arrow pointing down' />
            )}
          </h4>
        ) : (
          <h4>
            <a href='#'>{title}</a>
          </h4>
        )}
        <ul className={!dropdownStatus ? 'hide-background' : undefined}>{dropdownStatus && items}</ul>
    </div>
  )
}

function Item({ content }) {
  let [icon, title] = content
  return (
    <div className='list-item'>
      <li>
        {icon && <img src={icon} alt={`${title} logo`} />}
    <span><a href='#'>{title}</a></span>
      </li>
    </div>
  )
}

export default Dropdown
