import React from "react";
import "./AboutMe.css";
import foto from "../../images/hprfg08qNYA.jpg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__info">
          <h3 className="aboutMe__name">Роман</h3>
          <p className="aboutMe__profession">Веб-разработчик, 27 лет</p>
          <p className="aboutMe__description">Я родился и живу в Волгограде.Учился в ВолГТУ,на факультете автоматизированных систем, транспорта и вооружени.После университета по воле обстоятельств пошёл работать совершенно в другую сферу.Через несколько лет я всё таки решил устроиться в айти сферу,потому что меня всегда тянуло к компьютерам,но для устройства на работу требуются более глубокие знания определённой технологии,поэтому я и поступил в Я.Практикум</p>
          <div className="aboutMe__link-container">
            <a href="https://vk.com/id168431987" className="aboutMe__link" target="blank">Vkontake</a>
            <a href="https://github.com/Roman17-github" className="aboutMe__link">Github</a>
          </div>
        </div>
        <img className="aboutMe__foto" src={foto} alt="фото" />
      </div>
    </section>
  )
}

export default AboutMe;