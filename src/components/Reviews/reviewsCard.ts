export const reviews = [
  {
    content: 'Baaardzo super ścianka , dziękuję za współpracę \u{1FAF6}',
    author: 'Anetta Ostalczyk',
  },
  {
    content:
      'Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły \u{1F970} ale sam klimat i dekoracja robiła meegaaa wrażenie! ',
    author: 'Aleksandra Murawska',
  },
  {
    content:
      'Ścianka  była piękna, bardzo delikatna, Jeszcze raz bardzo dziękuję ) ',
    author: 'Katia Maksymiw',
  },
];

export interface ReviewContent {
  id: number;
  content: string;
  author: string;
}

export const generateReviewCards = (): ReviewContent[] => {
  return reviews.map((review, index) => ({
    id: index + 1,
    content: review.content,
    author: review.author,
  }));
};
