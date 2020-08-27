export const getRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

const cardDescriptions = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const cardColors = [`black`, `yellow`, `blue`, `green`, `pink`];

export const cardMock = () => {
  return {
    description: getRandomArrayItem(cardDescriptions),
    color: getRandomArrayItem(cardColors),
    dueDate: null,
    isArchive: generateRandomBoolean(),
    isFavourite: generateRandomBoolean(),
    repeatingDays: {
      mo: generateRandomBoolean(),
      tu: generateRandomBoolean(),
      we: generateRandomBoolean(),
      th: generateRandomBoolean(),
      fr: generateRandomBoolean(),
      sa: generateRandomBoolean(),
      su: generateRandomBoolean()
    }
  };
};
