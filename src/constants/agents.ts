import review2 from '../assets/images/agent-review-2.png';
import review1 from '../assets/images/agent-review-1.png';

export type ReviewType = {
  reviewer: string;
  image: string;
  review: string;
  rating: number;
  id: number;
};

export type agentType = {
  id: number;
  name: string;
  email: string;
  address: string;
  about: string;
  reviews: ReviewType[];
};

export const defaultAgentDetails = {
  id: 0,
  name: 'Abass & Co Ltd.',
  email: 'abass@gmail.com',
  address: '23, Micheal Cole Street, Lekki Phase 1, Lagos State',
  about:
    'Lorem ipsum dolor sit amet consectetur. Pulvinar sapien odio faucibus urna purus. Semper sapien sit suspendisse massa consequat fermentum. Eget magna quam arcu nisl est bibendum feugiat ultrices. Purus eget a mattis ullamcorper neque nec eget. Consequat dolor egestas mattis enim in. Ipsum a enim.',
  reviews: [
    {
      id: 1,
      reviewer: 'John Doe',
      image: review1,
      review:
        'Lorem ipsum dolor sit amet consectetur. Pulvinar sapien odio faucibus urna purus. Semper sapien sit suspendisse.',
      rating: 5,
    },
    {
      id: 2,
      reviewer: 'Jessica Ann',
      image: review2,
      review:
        'Mollitia, corrupti pariatur harum repellat voluptatem quam, eveniet incidunt optio eligendi animi reprehenderit.',
      rating: 4,
    },
    {
      id: 3,
      reviewer: 'John Doe',
      image: review1,
      review:
        'Lorem ipsum dolor sit amet consectetur. Pulvinar sapien odio faucibus urna purus. Semper sapien sit suspendisse.',
      rating: 5,
    },
    {
      id: 4,
      reviewer: 'Jessica Ann',
      image: review2,
      review:
        'Mollitia, corrupti pariatur harum repellat voluptatem quam, eveniet incidunt optio eligendi animi reprehenderit.',
      rating: 4,
    },
  ],
};
