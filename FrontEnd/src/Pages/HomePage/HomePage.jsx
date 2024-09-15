import React , {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import chatbotImage from '../../assets/Chatbot.jpg';
import Faqimage from '../../assets/FAQ.jpg'
import About from '../../assets/Aboutus.jpg'
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.css'; 
import Footer from '../../components/Footer/Footer';
import translate from '../../assets/translate.png';



function HomePage() {
  const navigate = useNavigate();


  const goToChatbot = () => {
    navigate('/chatbot');
  };

 

  const goToFAQ = () => {
    navigate('/faq');
  };

  const goToTranslation = () => {
    navigate('/translate');
  };

  const goToAboutus = () => {
    navigate('/aboutus');
  };

  return (
    <div>
     <Navbar />
      <div className="home-container">
         <h1>Fruit.ai</h1>
         <h2>"Be Healthy!"</h2>
        <div className="button-container">
        <Card
            title="Chatbot"
            imageUrl={chatbotImage} // Use imported image
            onClick={goToChatbot}
          />
          <Card
            title="FAQ"
            imageUrl={Faqimage} // Use imported image
            onClick={goToFAQ}
          />
          <Card
            title="Translate"
            imageUrl={translate} // Use imported image
            onClick={goToTranslation}
          />
          <Card
            title="About Us"
            imageUrl={About} // Use imported image
            onClick={goToAboutus}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

