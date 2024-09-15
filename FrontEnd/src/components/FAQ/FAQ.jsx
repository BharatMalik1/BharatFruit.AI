import React, { useState, useEffect } from 'react';
import './FAQ.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

const FAQ = () => {

  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  useEffect(() => {
    axios.get('http://localhost:4000/api/faqs')
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error("There was an error fetching the FAQs!", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  const addFaq = () => {
    axios.post('http://localhost:4000/api/faqs', newFaq)
      .then((response) => setFaqs([...faqs, response.data]))
      .catch((error) => console.error("Error adding FAQ", error));
  };

  const updateFaq = (id) => {
    const updatedQuestion = prompt('Enter the new question:');
    if (updatedQuestion === null || updatedQuestion.trim() === '') return;

    const updatedAnswer = prompt('Enter the new answer:');
    if (updatedAnswer === null || updatedAnswer.trim() === '') return; 

    const updatedFaq = {
      question: updatedQuestion,
      answer: updatedAnswer
    };

    axios.put(`http://localhost:4000/api/faqs/${id}`, updatedFaq)
      .then((response) => {
        const updatedFaqs = faqs.map((faq) =>
          faq._id === id ? response.data : faq
        );
        setFaqs(updatedFaqs);
      })
      .catch((error) => console.error("Error updating FAQ", error));
  };

  const deleteFaq = (id) => {
    axios.delete(`http://localhost:4000/api/faqs/${id}`)
      .then(() => setFaqs(faqs.filter(faq => faq._id !== id)))
      .catch((error) => console.error("Error deleting FAQ", error));
  };


  return (
    <>
    <Navbar/>
    <div className='body-faq'>
        
        <h1>FA'Q</h1>
        <br />
        <div className="accordian">
            <div className="question">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nihil.</p>
            </div>
        </div>
        <div className="accordian">
            <div className="question">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo perspiciatis aliquam.</p>
            </div>
        </div>
        <div className="accordian">
            <div className="question">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique dignissimos suscipit odio.</p>
            </div>
        </div>
        <div className="accordian">
            <div className="question">
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div className="answer">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo eius vel placeat quos? Dolore?</p>
            </div>
        </div>
        <div className="accordian">
            <div className="question">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
            </div>
            <div className="answer">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet facere perspiciatis?
            </div>
        </div>
      
    </div>

    <div className="heading">
      <h1>YOU CAN WRITE AND UPDATE YOUR FAQ HERE</h1>
    </div>

    <div>

      <div className="faq-form">
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={newFaq.question}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="answer"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={handleInputChange}
        />
        <button onClick={addFaq}>Add FAQ</button>
      </div>
      <ul className='delete-update'>
        {faqs && Array.isArray(faqs) && faqs.map((faq) => (
          <li key={faq._id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
            <button onClick={() => deleteFaq(faq._id)}>Delete</button>
            <button onClick={() => updateFaq(faq._id, { ...faq, question: "Updated Question" })}>UPDATE</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default FAQ
