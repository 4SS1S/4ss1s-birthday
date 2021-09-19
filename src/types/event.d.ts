declare module 'event' {
  export interface EventProps {
    id: number
    location: string
    title: string
    description: string
    start: Date
    end: Date
    lat: number
    lng: number
  }
}
