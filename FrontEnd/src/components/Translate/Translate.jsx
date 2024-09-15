import React, { useState, useEffect } from 'react';
import { languages } from '../../assets/languages.js';
import Navbar from '../Navbar/Navbar.jsx';
import './Translate.css';

const Translate = () => {
  const [inputLanguage, setInputLanguage] = useState(languages[0].code);
  const [outputLanguage, setOutputLanguage] = useState(languages[1].code);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isDropdownActive, setIsDropdownActive] = useState({ input: false, output: false });
  const [inputChars, setInputChars] = useState(0);

  useEffect(() => {
    if (inputText.length > 0) {
      translateText();
    }
  }, [inputText, inputLanguage, outputLanguage]);

  const translateText = async () => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText)}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      const translatedText = json[0].map((item) => item[0]).join('');
      setOutputText(translatedText);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const handleDownload = () => {
    if (outputText) {
      const blob = new Blob([outputText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `translated-to-${outputLanguage}.txt`;
      link.click();
    }
  };

  const toggleDropdown = (type) => {
    setIsDropdownActive((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  const handleOptionSelect = (type, code) => {
    if (type === 'input') setInputLanguage(code);
    if (type === 'output') setOutputLanguage(code);
    setIsDropdownActive((prevState) => ({ ...prevState, [type]: false }));
  };

  return (
    <>
      <Navbar />
      <div className="translate-container">
        <div className="dropdown-container">
          <div
            className={`dropdown ${isDropdownActive.input ? 'active' : ''}`}
            onClick={() => toggleDropdown('input')}
          >
            <div className="selected">{inputLanguage}</div>
            {isDropdownActive.input && (
              <ul>
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="option"
                    onClick={() => handleOptionSelect('input', lang.code)}
                  >
                    {lang.name} ({lang.native})
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className={`dropdown ${isDropdownActive.output ? 'active' : ''}`}
            onClick={() => toggleDropdown('output')}
          >
            <div className="selected">{outputLanguage}</div>
            {isDropdownActive.output && (
              <ul>
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="option"
                    onClick={() => handleOptionSelect('output', lang.code)}
                  >
                    {lang.name} ({lang.native})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <textarea
          id="input-text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setInputChars(e.target.value.length);
          }}
          maxLength={5000}
          placeholder="Enter text to translate"
        />

        <textarea
          id="output-text"
          value={outputText}
          readOnly
          placeholder="Translated text will appear here"
        />

        <button id="download-btn" onClick={handleDownload}>
          Download Translated Text
        </button>

        <div className="char-count">Character Count: {inputChars}/5000</div>
      </div>
    </>
  );
};

export default Translate;
