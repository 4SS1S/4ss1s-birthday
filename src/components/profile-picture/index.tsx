import { User } from 'next-auth'
import React from 'react'

export interface ProfilePictureProps {
  user: User
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ user }) => {
  return (
    <img
      src={user?.image || ''}
      alt={user?.name || ''}
      className="rounded-full w-24 h-24"
    />
  )
}
