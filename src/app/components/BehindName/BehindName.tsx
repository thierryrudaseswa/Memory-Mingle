import React, { useState, useMemo } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import './RatingComponent.css'; // Import the CSS file

// Define a mapping of letters to words
const wordsMapping: { [key: string]: string[] } = {
  A: ['Appreciation', 'Affection'],
  B: ['Bravery', 'Bliss'],
  C: ['Compassion', 'Courage'],
  D: ['Delight', 'Devotion'],
  E: ['Empathy', 'Encouragement'],
  F: ['Forgiveness', 'Friendship'],
  G: ['Gratitude', 'Generosity'],
  H: ['Happiness', 'Harmony'],
  I: ['Inspiration', 'Integrity'],
  J: ['Joy', 'Justice'],
  K: ['Kindness', 'Kinship'],
  L: ['Love', 'Laughter'],
  M: ['Mercy', 'Mindfulness'],
  N: ['Nurturing', 'Nobility'],
  O: ['Optimism', 'Openness'],
  P: ['Patience', 'Peace'],
  Q: ['Quietude', 'Quality'],
  R: ['Respect', 'Resilience'],
  S: ['Serenity', 'Support'],
  T: ['Trust', 'Tranquility'],
  U: ['Understanding', 'Unity'],
  V: ['Virtue', 'Vitality'],
  W: ['Warmth', 'Wisdom'],
  X: ['Xenial', 'Xenodochy (hospitality)'],
  Y: ['Yearning', 'Youthfulness'],
  Z: ['Zeal', 'Zest'],
};

// Function to get the word for a letter based on its occurrence
const getLetterAndWord = (letter: string, count: number) => {
  const words = wordsMapping[letter] || [];
  return words[count % words.length];
};

const RatingComponent: React.FC<{ letter: string, word: string }> = ({ letter, word }) => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<number>(-1);

  const handleChange = (newValue: number | null) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <div className=" text-white
    ">
      <div className="grid grid-rows-2 justify-center items-center p-2 rounded-xl" style={{ background: "#0e0146" }}>
        <div className="row-span-1">
          <span>{letter}</span>: <span>{word}</span>
        </div>
        <div className="rate row-span-1">
          <Rating
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => handleChange(newValue)}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: '28px' }} />}
            icon={<StarIcon fontSize="inherit" style={{ fontSize: '28px' }} />}
          />
          {value !== null && (
            <Box sx={{ fontSize: '1.2rem' }}>
              {word}
            </Box>
          )}
        </div>
      </div>
    </div>
  );
};

const BehindName: React.FC<{ name: string }> = ({ name }) => {
  const upperCaseName = name.toUpperCase();

  // Generate unique words for each letter based on its occurrence
  const letterWordPairs = useMemo(() => {
    const letterCounts: { [key: string]: number } = {};
    return upperCaseName.split('').map(letter => {
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
      return { letter, word: getLetterAndWord(letter, letterCounts[letter] - 1) };
    });
  }, [upperCaseName]);

  return (
    <div className="p-4 text-white" style={{background:"#020223"}}>
      <div className="text-center mb-4" >TRULY NAME EXPLAINS</div>
      <div className="p-3 rounded-xl">
       
        <div className="flex justify-between flex-wrap gap-4 mt-4">
          {letterWordPairs.map(({ letter, word }, index) => (
            <RatingComponent key={index} letter={letter} word={word} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehindName;
