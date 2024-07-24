'use client'
import React, { useState } from 'react';

const Closer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const qaPairs = [
    {
      question: "What kind of books, movies, or music do you find most inspiring, and why?",
      answer: "Anything with superheroes. Saving the world while looking cool? Sign me up! Plus, I get to live vicariously through their adventures.",
    },
    {
      question: "Who has been the most influential person in your life, and what lessons have you learned from them?",
      answer: "My dog, Max. He’s taught me the art of napping, the joy of endless snacks, and that sometimes a wagging tail is the best answer.",
    },
    {
      question: "What are some goals or dreams you have for the future, and what steps are you taking or planning to take to achieve them?",
      answer: "To travel the world and eat at least one weird food in each country. Step one: get a passport. Step two: embrace the weird and wonderful!",
    },
    {
      question: "What’s an experience or challenge that you’ve faced that taught you an important life lesson?",
      answer: "Burned my eyebrows off in a BBQ mishap. Lesson: always respect the grill! Now I have a healthy fear of open flames and a funny story to tell.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Happy Birthday!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Birthdays are not just about celebrating another year of life; they’re also a wonderful opportunity to share more about yourself.
        As we commemorate your special day, let's dive into what makes you unique and interesting.
        Remember, "Today you are you, that is truer than true. There is no one alive who is youer than you." – Dr. Seuss
      </p>
      <div id="accordion-nested-parent" data-accordion="collapse">
        {qaPairs.map((qaPair, index) => (
          <div key={index} className="mb-4 border border-gray-200 dark:border-gray-700">
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{qaPair.question}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
            </h2>
            {activeIndex === index && (
              <div
                id={`accordion-collapse-body-${index}`}
                className="p-5 text-gray-600 dark:text-gray-400"
                aria-labelledby={`accordion-collapse-heading-${index}`}
              >
                <p>{qaPair.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Closer;
