// List here all the icons available in the app
import {
  Basket,
  Book,
  Cross,
  Map,
  MapMarker,
  Message,
  Pen,
  Plus,
  Sixdots,
  User,
} from '@assets/icons'

export const IconsList = {
  basket: Basket,
  book: Book,
  cross: Cross,
  mapMarker: MapMarker,
  message: Message,
  pen: Pen,
  plus: Plus,
  user: User,
  sixdots: Sixdots,
  map: Map,
}

export type IconsName = keyof typeof IconsList
