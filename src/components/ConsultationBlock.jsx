import "./ConsultationBlock.css";
import ContactForm from "./ContactForm";


const ConsultationBlock = () => {
  

  return (
    <section className="consultation-container" id="consultation-container">
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
              <p>Узнайте ключевые этапы и нюансы банкротства, требования закона и способы пройти процедуру быстро и без рисков. Получите экспертную консультацию и точные рекомендации для оптимального решения вашей финансовой ситуации.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">❓</div>
            <div>
              <h3>Ответы</h3>
              <p>Узнайте, как пройти банкротство физических лиц быстро и безопасно. Получите консультацию экспертов и ответы на важные вопросы для оптимального решения вашей финансовой ситуации.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">💡</div>
            <div>
              <h3>Советы</h3>
              <p>Получите профессиональную юридическую поддержку: разберём вашу ситуацию, составим чёткий план действий и обеспечим контроль на каждом этапе банкротства.</p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">🎯</div>
            <div>
              <h3>Понимание</h3>
              <p>Определим, подходит ли вам банкротство, какие последствия оно влечёт и как затронет ваших родственников. Поможем выбрать лучшее время для начала процедуры, чтобы минимизировать риски и добиться оптимального результата.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="consultation-right">
        <div className="consultation-contact-img">
      </div>
      <div className="consultation-contact-form">

      <h2>
      Закажи бесплатную консультацию
      </h2>
      <ContactForm/>
      </div>
      </div>
    </section>
  );
};

export default ConsultationBlock;
