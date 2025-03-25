import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Левый блок */}
        <div className="about-left-block"></div>

        {/* Правый блок */}
        <div className="about-right-block">
          {/* Заголовок */}
          <h2 className="about-title">Надежная юридическая компания</h2>

          {/* Два горизонтальных блока */}
          <div className="about-horizontal-blocks">
            {/* Левый блок с описанием */}
            <div className="about-description-block">
              <p>
                Мы знаем, как важно чувствовать уверенность в завтрашнем дне. Наша команда экспертов готова взять на себя ваши проблемы и провести вас через все этапы пути к финансовой стабильности.
              </p>
              <p>
                Каждое дело рассматривается индивидуально, с глубоким знанием всех аспектов законодательства о банкротстве.
              </p>
              <p>
               Профессиональный опыт и внимание к деталям позволяют находить решения, которые помогают клиентам преодолеть финансовые трудности и обрести долгожданную финансовую свободу
              </p>
            </div>

            {/* Правый блок со статистикой */}
            <div className="about-stats-block">
              {/* Карточка с профилем */}
              <div className="profile-card">
              <div className="profile-info">
                <h3>ссылка на успешные дела</h3>
                <p>Здесь вы можете найти сведения о нашей деятельности и опыте</p>
                </div>
                <div className="profile-logo">
                       <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="40" cy="40" r="40" fill="#FFFFFF"/>

 
  <g stroke="#BA3D3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
    
    <line x1="30" y1="15" x2="30" y2="32"/>

    <line x1="18" y1="20" x2="42" y2="20"/>

    
    <line x1="22" y1="20" x2="20" y2="28"/>
    <line x1="24" y1="20" x2="26" y2="28"/>
    <path d="M20 28 Q23 31 26 28" stroke="#BA3D3B" fill="none"/>

    <line x1="38" y1="20" x2="36" y2="28"/>
    <line x1="40" y1="20" x2="42" y2="28"/>
    <path d="M36 28 Q39 31 42 28" stroke="#BA3D3B" fill="none"/>

    <line x1="24" y1="34" x2="36" y2="34"/>
    <line x1="22" y1="37" x2="38" y2="37"/>
    <line x1="20" y1="40" x2="40" y2="40"/>
  </g>
</svg>
              </div>
            </div>
              {/* Блок со статистикой */}
              <div className="profile-stats">
                <div className="stat-item-about">
                  <strong>10+</strong>
                  <span>лет в сфере оказания услуг по банкротству</span>
                </div>
                <div className="stat-item-about">
                  <strong>500+</strong>
                  <span>млн. рублей долгов граждан уже списано</span>
                </div>
                <div className="stat-item-about">
                  <strong>300+</strong>
                  <span>дел завершено полным списанием долгов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
