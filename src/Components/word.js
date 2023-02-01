import { dictionary } from "./dictionary";

// I imported the dictionary in here, and I'm splitting the words, and creating a function to select random words.
const dictionaryArray = dictionary.split("\n");
const getRandomWord = () => {
    return dictionaryArray[
        Math.floor(Math.random() * dictionaryArray.length)
    ].toUpperCase();
};

export { dictionary, getRandomWord };
