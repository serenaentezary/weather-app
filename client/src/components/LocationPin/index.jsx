import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ onClick, text }) => {
  return (
    <div className="pin" onClick={() => onClick(text)}>
      <Icon icon={locationIcon} className="pin-icon" />
      {text && <p className="pin-text" onClick={() => onClick(text)}>{text}</p>}
    </div>
  )
}

export default LocationPin;
