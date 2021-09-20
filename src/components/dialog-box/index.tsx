import React from 'react'

/**
 *
 * @description DialogBox component
 * @param children
 * @example
 * return (
 * <DialogBox>
 *  <h1>DialogBox</h1>
 * </DialogBox>
 */
export const DialogBox: React.FC = ({ children, ...props }) => {
  return (
    <div className="flex justify-center w-full" {...props}>
      <div className="bg-white bg-opacity-20 rounded-2xl p-6 w-4/5 shadow-2xl backdrop-filter backdrop-blur-xl relative">
        {children}
      </div>
    </div>
  )
}
