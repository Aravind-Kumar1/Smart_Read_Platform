// src/data/booksData.js

import atomic from '../../assets/Atomic.jpg';
import david from '../../assets/Atomic.jpg';
import subImage from '../../assets/Atomic.jpg';
import phyImage from '../../assets/Atomic.jpg';
import dieImage from '../../assets/Atomic.jpg';
import moImage from '../../assets/Atomic.jpg';

export const booksData = {
  popular: [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: atomic,
      publishedDate: '2022-01-01',
    },
    {
      id: 2,
      title: "Can't Hurt Me",
      author: 'David Goggins',
      cover: david,
      publishedDate: '2023-05-15',
    },
    {
        id: 7,
        title: "Can't Hurt Me",
        author: 'David Goggins',
        cover: david,
        publishedDate: '2023-05-15',
      },
      {
        id: 8,
        title: "Can't Hurt Me",
        author: 'David Goggins',
        cover: david,
        publishedDate: '2023-05-15',
      },
      {
        id: 15,
        title: "Can't Hurt Me",
        author: 'David Goggins',
        cover: david,
        publishedDate: '2023-05-15',
      },
      {
        id: 8,
        title: "Can't Hurt Me",
        author: 'David Goggins',
        cover: david,
        publishedDate: '2023-05-15',
      },
  ],
  entrepreneurship: [
    {
      id: 3,
      title: 'The Subtle Art Of Not Giving A F*ck',
      author: 'Mark Manson',
      cover: subImage,
      publishedDate: '2022-01-01',
    },
    {
      id: 4,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      cover: phyImage,
      publishedDate: '2022-01-01',
    },
    {
        id: 9,
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        cover: phyImage,
        publishedDate: '2022-01-01',
      },
      {
        id: 10,
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        cover: phyImage,
        publishedDate: '2022-01-01',
      },
  ],
  // Add more categories with books as needed
  health: [
    {
      id: 5,
      title: 'Who Will Cry When You Die',
      author: 'Robin Sharma',
      cover: dieImage,
      publishedDate: '2022-01-01',
    },
    {
      id: 6,
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      cover: moImage,
      publishedDate: '2022-01-01',
    },
    {
        id: 11,
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        cover: moImage,
        publishedDate: '2022-01-01',
      },
      {
        id: 12,
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        cover: moImage,
        publishedDate: '2022-01-01',
      },
  ],
};
