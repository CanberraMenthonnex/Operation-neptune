import {
  Book,
  Cross,
  MapMarker,
  Message,
  Pen,
  Plus,
  User,
} from '../../../assets/icons'

export const IconsList = {
  book: Book,
  cross: Cross,
  mapMarker: MapMarker,
  message: Message,
  pen: Pen,
  plus: Plus,
  user: User,
}

export type IconsName = keyof typeof IconsList
