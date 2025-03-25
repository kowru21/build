import React, { useState, useEffect } from "react"; // Добавляем useState и useEffect
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ConsultationBlock from "./components/ConsultationBlock";
import Popup from "./components/Popup"; // Импортируем Popup
import BankruptcyCalculator   from "./components/BankruptcyCalculator";
import InfoBlock   from "./components/InfoBlock";
import ProcessBlock   from "./components/ProcessBlock";
import ResultsBlock   from "./components/ResultsBlock";
import FAQBlock   from "./components/FAQBlock";
import Footer  from "./components/Footer";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Состояние для управления попапом

  // Автоматическое открытие попапа через 10 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true); // Открываем попап через 10 секунд
    }, 7000); // 10000 миллисекунд = 10 секунд

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []); // Пустой массив зависимостей, чтобы эффект сработал только один раз

  // Функция для закрытия попапа
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <AboutSection />
        <ConsultationBlock />
        <BankruptcyCalculator />
        <InfoBlock/>
        <ProcessBlock/>
        <ResultsBlock/>
        <FAQBlock/>
        <Footer/>
        {/* Рендерим Popup, если isPopupOpen === true */}
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
    </Router>
  );
}

export default App;