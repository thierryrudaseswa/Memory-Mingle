  export interface Question {
    id: number;
    question: string;
    options: string[];
    category: string;
  }

  const questions: Question[] = [
    { id: 1, question: "Would you prefer music or a movie?", options: ["Music", "Movie"], category: "Preferences" },
    { id: 2, question: "Would you prefer chocolate or vanilla?", options: ["Chocolate", "Vanilla"], category: "Preferences" },
    { id: 3, question: "Would you prefer cats or dogs?", options: ["Cats", "Dogs"], category: "Preferences" },
    { id: 4, question: "Would you prefer tea or coffee?", options: ["Tea", "Coffee"], category: "Preferences" },
    
    
    { id: 5, question: "Would you prefer a beach vacation or a mountain retreat?", options: ["Beach Vacation", "Mountain Retreat"], category: "Lifestyle" },
    { id: 6, question: "Would you prefer summer or winter?", options: ["Summer", "Winter"], category: "Lifestyle" },
    { id: 7, question: "Would you prefer city life or country life?", options: ["City Life", "Country Life"], category: "Lifestyle" },
    { id: 8, question: "Would you prefer to plan things out or be spontaneous?", options: ["Plan Things Out", "Be Spontaneous"], category: "Lifestyle" },
    

    { id: 9, question: "Would you prefer a drink or food?", options: ["Drink", "Food"], category: "Food & Drink" },
    { id: 10, question: "Would you prefer pizza or burgers?", options: ["Pizza", "Burgers"], category: "Food & Drink" },
    { id: 11, question: "Would you prefer sushi or pasta?", options: ["Sushi", "Pasta"], category: "Food & Drink" },
    { id: 12, question: "Would you prefer ice cream or cake?", options: ["Ice Cream", "Cake"], category: "Food & Drink" },
  

    { id: 13, question: "Would you prefer to read a book or watch TV?", options: ["Read a Book", "Watch TV"], category: "Activities" },
    { id: 14, question: "Would you prefer to go shopping or go hiking?", options: ["Shopping", "Hiking"], category: "Activities" },
    { id: 15, question: "Would you prefer to play sports or watch sports?", options: ["Play Sports", "Watch Sports"], category: "Activities" },
    { id: 16, question: "Would you prefer to dance or to sing?", options: ["Dance", "Sing"], category: "Activities" },

  ];

  export default questions;
