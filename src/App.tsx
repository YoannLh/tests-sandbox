import { useState } from 'react' //

export default function App() {
  return (
    <div>
      <Button />
    </div>
  )
}

export function Button() {
  const [buttonLabel, setButtonLabel] = useState('Se connecter')
  return (
    <button
      style={{ border: '1px solid white' }}
      onClick={() => {
        setButtonLabel('Chargement...')
      }}
    >
      {buttonLabel}
    </button>
  )
}
