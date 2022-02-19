import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="AboutProject">
      <h2 className="AboutProject__title">О проекте</h2>
      <div className="AboutProject__info">
        <div className="AboutProject__container">
          <p className="AboutProject__heading">Дипломный проект включал 5 этапов</p>
          <p className="AboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="AboutProject__container">
          <p className="AboutProject__heading">На выполнение диплома ушло 5 недель</p>
          <p className="AboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="AboutProject__panel">
        <h2 className="AboutProject__scale AboutProject__scale_backend">1 неделя</h2>
        <h2 className="AboutProject__scale AboutProject__scale_frontend">4 недели</h2>
        <p className="AboutProject__scale_tech">Back-end</p>
        <p className="AboutProject__scale_tech">Front-end</p>
     </div>
    </section>
  )
}

export default AboutProject;