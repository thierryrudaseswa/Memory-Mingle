import { useState } from 'react';
import questions, { Question } from '../../data/ratherquestion';

interface Responses {
  [key: number]: string;
}

const Questionnaire: React.FC = () => {
  const [responses, setResponses] = useState<Responses>({});

  const handleCheckboxChange = (questionId: number, option: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const groupedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
  }, {} as { [key: string]: Question[] });

  return (
    <div className='p-5 bg-slate-500'> 
      <h1 className='grid justify-center items-start'> Happy Birthday Questionnaire</h1>
      <form>
        {Object.entries(groupedQuestions).map(([category, questions]) => (
          <div key={category} className='mb-8 grid grid-cols-8 '>
            <h2 className='p-2 bg-green-500 m-2 flex items-center col-span-1 justify-center'>{category}</h2>
            <div className="grid grid-cols-2  col-span-7 gap-4">
              {questions.map((q: Question) => (
                <div key={q.id} className='bg-slate-400 rounded-2xl p-2'>
                  <p className='p-2 bg-gray-200'>{q.question}</p>
                  <div className="bg-orange-400 flex justify-evenly">
                    {q.options.map((option) => (
                      <label key={option} className='flex items-center space-x-2'>
                        <input
                          type="checkbox"
                          checked={responses[q.id] === option}
                          onChange={() => handleCheckboxChange(q.id, option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Questionnaire;
