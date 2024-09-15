import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Navbar from '../Navbar/Navbar';

// Define chatbot steps
const steps = [
  {
    id: '1',
    message: 'Hello! Welcome to Fruit.ai! How can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'suggest', label: 'Suggest a fruit', trigger: 'suggest-fruit' },
      { value: 'details', label: 'Get details about a fruit', trigger: 'fruit-details' },
      { value: 'health', label: 'Health benefits of fruits', trigger: 'fruit-benefits' },
    ],
  },
  {
    id: 'suggest-fruit',
    message: 'How about trying an Apple? Would you like more details or another suggestion?',
    trigger: 'suggest-options',
  },
  {
    id: 'suggest-options',
    options: [
      { value: 'more', label: 'Give me another suggestion', trigger: 'suggest-another-fruit' },
      { value: 'details', label: 'More details about Apple', trigger: 'apple-details' },
    ],
  },
  {
    id: 'suggest-another-fruit',
    message: 'How about trying a Banana this time? Would you like more details?',
    trigger: 'banana-details',
  },
  {
    id: 'fruit-details',
    message: 'Which fruit do you want details about?',
    trigger: 'fruit-choice',
  },
  {
    id: 'fruit-choice',
    options: [
      { value: 'apple', label: 'Apple', trigger: 'apple-details' },
      { value: 'banana', label: 'Banana', trigger: 'banana-details' },
      { value: 'orange', label: 'Orange', trigger: 'orange-details' },
      { value: 'grapes', label: 'Grapes', trigger: 'grapes-details' },
    ],
  },
  {
    id: 'apple-details',
    message: 'Apples are rich in fiber and Vitamin C. They are great for digestion and heart health.',
    trigger: 'more-options',
  },
  {
    id: 'banana-details',
    message: 'Bananas are great for energy and are high in potassium. They also help regulate blood sugar levels.',
    trigger: 'more-options',
  },
  {
    id: 'orange-details',
    message: 'Oranges are packed with Vitamin C and support immune health. They are great for hydration too!',
    trigger: 'more-options',
  },
  {
    id: 'grapes-details',
    message: 'Grapes are rich in antioxidants and help reduce inflammation. They’re great for heart health.',
    trigger: 'more-options',
  },
  {
    id: 'fruit-benefits',
    message: 'Fruits are rich in vitamins and minerals. Which fruit benefit would you like to know about?',
    trigger: 'fruit-choice',
  },
  {
    id: 'more-options',
    options: [
      { value: 'more-info', label: 'Want more info?', trigger: 'fruit-details' },
      { value: 'end', label: 'No, I am good.', trigger: 'end' },
    ],
  },
  {
    id: 'end',
    message: 'Thank you for using Fruit.ai! Let me know if you need more help.',
    end: true,
  },
];


// Custom chatbot theme
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#4CAF50',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#4CAF50',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4CAF50',
};

function ChatbotPage() {
  return (
    <>
    <Navbar/>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
    </>
  );
}

export default ChatbotPage;


