"use client"

import React from 'react'

// ** 3rd Party Imports
import QRCode from 'react-qr-code';


type Props = {
  value : string
}

const QRCodeDisplay = ({value}: Props) => {

  return <QRCode 
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value} />

}

export default QRCodeDisplay