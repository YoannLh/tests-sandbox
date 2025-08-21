import { useState } from 'react'

export function Button() {
  const [buttonLabel, setButtonLabel] = useState('Se connecter')
  return (
    <button
      style={{ margin: 'auto', border: '1px solid white' }}
      onClick={() => {
        setButtonLabel('Chargement...')
      }}
    >
      {buttonLabel}
    </button>
  )
}
