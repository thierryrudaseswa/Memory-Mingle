"use client";
import Image from "next/image";
import { useState, ChangeEvent } from "react";


interface guessdAge {
  person :{
    age:number;
    agetext:string;
  }
}

const Guess: React.FC<guessdAge>= ({person}) => {
  const [guess, setGuess] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const correctAge = person.age // Assuming the correct age is 28

  const handleGuess = () => {
    console.log("handleGuess called");
    const guessedAge = parseInt(guess);
    console.log("guessedAge:", guessedAge);
    console.log(correctAge)
    if (guessedAge === correctAge) {
      setFeedback("Correct! You guessed the right age.");
    } else {
      setFeedback("Nice try, but that's not it. Keep guessing!");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleInputChange called");
    console.log("Input value:", e.target.value);
    setGuess(e.target.value);
  };

  return (
    <div className=" p-4 mt-4" style={{ background: "#020223" }}>
      <div className="text-white text-2xl mb-4 flex justify-center items-center bg-black h-20">Guess The Age</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 grid justify-center">
          <div className="relative h-96 w-96 rounded-3xl overflow-hidden lg:w-60">
            <Image
              src="/Image/thierry28.jpeg"
              alt="Thierry's Photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-2 text-white p-4">
          <p className="mb-4">
          {person.agetext}
          </p>
          <div className="mb-4">
            <input
              type="number"
              value={guess}
              onChange={handleInputChange}
              className="p-2 border rounded text-black"
              placeholder="Enter your guess"
            />
            <button
              onClick={handleGuess}
              className="p-2 bg-blue-500 text-white rounded ml-2"
            >
              Submit Guess
            </button>
          </div>
          {feedback && <p className="text-lg">{feedback}</p>}
        </div>
      </div>
    </div>
  );
};

export default Guess;
