import React, { useState, createContext } from 'react'

interface LoadingProviderProps {
  isLoading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingProviderProps>(
  {} as LoadingProviderProps
)

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading: loading, setLoading }}>
      {loading && (
        <>
          <div className="w-full h-full fixed top-0 left-0 z-40 bg-black opacity-50 transition-opacity"></div>
          <div className="fixed w-full h-full float z-50 items-center flex justify-center">
            <img
              src="/gifs/cupertino_activity_indicator.gif"
              width="30"
              height="30"
            />
          </div>
        </>
      )}
      {children}
    </LoadingContext.Provider>
  )
}
