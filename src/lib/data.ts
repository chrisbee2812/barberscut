import type { Service, Barber } from './types';

export const services: Service[] = [
  {
    name: 'Classic Haircut',
    description: 'A timeless haircut using scissors and clippers, finished with a straight razor neck shave.',
    price: '$40',
  },
  {
    name: 'Beard Trim',
    description: 'Shape and clean up your beard, lining it up with a trimmer and finishing with a razor.',
    price: '$25',
  },
  {
    name: 'Hot Towel Shave',
    description: 'A luxurious traditional straight razor shave with hot towels, pre-shave oil, and rich lather.',
    price: '$45',
  },
  {
    name: 'Buzz Cut',
    description: 'A simple, one-length clipper cut all over for a clean, low-maintenance look.',
    price: '$25',
  },
  {
    name: 'Haircut & Beard Trim',
    description: 'The full package. Get a fresh haircut and a perfectly sculpted beard in one session.',
    price: '$60',
  },
  {
    name: 'Kids Cut (Under 12)',
    description: 'A patient and stylish haircut for the little gentleman.',
    price: '$30',
  },
];

export const barbers: Barber[] = [
  {
    name: 'Alex "The Ace" Johnson',
    specialty: 'Master of Classic Fades',
    bio: 'With over 10 years of experience, Alex combines traditional techniques with a modern eye for detail. He believes every haircut is a piece of art.',
    imageId: 'barber-alex',
  },
  {
    name: 'Ben "The Blade" Carter',
    specialty: 'Beard Sculpting & Hot Shaves',
    bio: 'Ben is the go-to guy for immaculate beard work. His precision and steady hand make for the sharpest lines and smoothest shaves in town.',
    imageId: 'barber-ben',
  },
  {
    name: 'Chris "The Chairman" Davis',
    specialty: 'Modern Styles & Scissor Work',
    bio: 'Chris stays on the cutting edge of hair trends. If you\'re looking for a contemporary look or a perfectly textured scissor cut, Chris is your barber.',
    imageId: 'barber-chris',
  },
];
