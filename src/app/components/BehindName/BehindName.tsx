import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: number]: string } = {
  0.5: 'Useless',
  1: 'Poor',
  1.5: 'Poor+',
  2: 'Ok',
  2.5: 'Ok+',
  3: 'Good',
  3.5: 'Good+',
  4: 'Very Good',
  4.5: 'Excellent',
  5: 'Tremendous',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const RatingComponent: React.FC = () => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<number>(-1);

  return (
  <div className="">
      <div className="grid grid-rows-2 bg-white justify-center items-center p-2 rounded-xl">
      <div className="row-span-1">
        <span>T</span>: <span>Tremendous</span>
      </div>
      <div className="rate row-span-1">
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>
    </div>
    
  </div>
  );
};

const BehindName: React.FC = () => {
  return (
    <div className="bg-slate-500 p-4">
      <div className="text-white text-center mb-4">TRULY NAME EXPLAINS</div>
      <div className="bg-yellow-300 p-3 rounded-xl">
        <div className="flex justify-between flex-wrap gap-4">
          <RatingComponent />
          <RatingComponent />
          <RatingComponent />
          <RatingComponent />
          <RatingComponent />
        </div>
      </div>
    </div>
  );
};

export default BehindName;
