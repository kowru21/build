import Popup from "./Popup" // Импорт готового компонента Popup
import "./ConsultationBlock.css";
import ContactForm from "./ContactForm";


const ConsultationBlock = () => {
  

  return (
    <section className="consultation-container">
      <div className="consultation-text">
        <h2>
          Что вам даст <br />
          <span className="highlight">бесплатная консультация?</span>
        </h2>

        <div className="consultation-features">
          <div className="feature">
            <div className="icon">📖</div>
            <div>
              <h3>Знания</h3>
              <p>Вы узнаете, как проходит процедура банкротства физических лиц.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">❓</div>
            <div>
              <h3>Ответы</h3>
              <p>Анализируем вашу ситуацию, выявляем особенности и подбираем стратегию.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">💡</div>
            <div>
              <h3>Советы</h3>
              <p>Точные рекомендации от арбитражного управляющего.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">🎯</div>
            <div>
              <h3>Понимание</h3>
              <p>Вы поймете, подходит ли процедура банкротства именно вам.</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm/>
    </section>
  );
};

export default ConsultationBlock;
