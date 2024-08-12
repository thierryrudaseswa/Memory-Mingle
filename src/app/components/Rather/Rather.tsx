import { useState, useEffect } from 'react';
import questions, { Question } from '../../data/ratherquestion';

interface Responses {
  [key: number]: string;
}

const Questionnaire: React.FC = () => {
  const [responses, setResponses] = useState<Responses>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handle checkbox change
  const handleCheckboxChange = (questionId: number, option: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedOptions = Object.entries(responses).map(([questionId, selectedOption]) => ({
      questionId: parseInt(questionId),
      selectedOption,
    }));

    try {
      await fetch("http://localhost:3000/backend/api/Questions/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedOptions),
      });

      setSubmitted(true);
      // Refresh responses after submission
      fetchResponses();
    } catch (error) {
      console.error('Error submitting responses:', error);
    }
  };

  // Fetch responses from the backend
  const fetchResponses = async () => {
    try {
      const res = await fetch("http://localhost:3000/backend/api/Questions/");
      const data = await res.json();
      // Convert the fetched data into a dictionary for easy lookup
      const fetchedResponses = data.reduce((acc: Responses, item: any) => {
        acc[item.questionId] = item.selectedOption;
        return acc;
      }, {});
      setResponses(fetchedResponses);
    } catch (error) {
      console.error('Error fetching responses:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchResponses();
  }, []);

  return (
    <div className='p-5 mt-5 rounded-2xl' style={{ background: "#020223" }}>
      <h1 className='grid justify-center items-start'>Happy Birthday Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {Object.entries(questions.reduce((acc, question) => {
          if (!acc[question.category]) {
            acc[question.category] = [];
          }
          acc[question.category].push(question);
          return acc;
        }, {} as { [key: string]: Question[] })).map(([category, questions]) => (
          <div key={category} className='mb-8 grid grid-cols-8 lg:grid'>
            <h2 className='p-2 m-2 flex items-center col-span-1 justify-center text-white rounded-full lg:col-span-2' style={{ background: "#0e0146" }}>{category}</h2>
            <div className="grid grid-cols-2 col-span-7 gap-4 lg:col-span-6">
              {questions.map((q: Question) => (
                <div key={q.id} className='rounded-2xl p-2 text-white' style={{ background: "#0e0146" }}>
                  <p className='p-2'>{q.question}</p>
                  <div className="flex justify-evenly">
                    {q.options.map((option) => (
                      <label key={option} className='flex items-center space-x-2'>
                        <input
                          type="radio"
                          name={`question-${q.id}`}
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
        <button type="submit" className='btn btn-primary mt-4'>Submit</button>
      </form>
      {submitted && <p className="text-white mt-4">Thank you for your responses!</p>}
    </div>
  );
};

export default Questionnaire;
