import React, { ReactNode, createContext, useState } from 'react'

type Props = {
  children: ReactNode
}

interface ModeType {
  mode: boolean,
  toggleMode: () => void
}

export const WrapperContextProvider = createContext<ModeType>({
  mode: false,
  toggleMode: () => {}
})

const WrapperContext = ({children}: Props) => {
  const [mode, setMode] = useState(false)

  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <WrapperContextProvider.Provider value={{
      mode,
      toggleMode
    }}>
      {children}
    </WrapperContextProvider.Provider>
  )
}

export default WrapperContext
