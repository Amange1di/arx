import React from "react";
import "./academy.scss";

export const Academy = () => {
  return (
    <div className="academy">
      <div className="container">
      <h1 className="title">НАУКА И УЧЁНЫЙ СОВЕТ ИСЛАМСКОЙ АКАДЕМИИ</h1>
      <p className="description">
        Исламская академия является центром научных исследований, где традиционные исламские знания сочетаются с современными методами анализа и изучения.
      </p>
      <h2 className="subtitle">Учёный совет</h2>
      <p className="text">
        Учёный совет Академии – это коллегиальный орган, который определяет научно-образовательную стратегию, разрабатывает программы и контролирует их качество.
      </p>
      <h2 className="subtitle">Основные задачи Совета:</h2>
      <ul className="list">
        <li>Развитие научных исследований в области исламских наук</li>
        <li>Организация конференций, симпозиумов и семинаров</li>
        <li>Поддержка научных публикаций и академических проектов</li>
        <li>Развитие международного сотрудничества с ведущими исламскими учебными заведениями</li>
      </ul>
      <h2 className="subtitle">Направления научной деятельности</h2>
      <ul className="list">
        <li>Исламское богословие и право (фикх)</li>
        <li>Исследование Корана и хадисов</li>
        <li>История и философия ислама</li>
        <li>Межрелигиозный диалог и современная исламская мысль</li>
      </ul>
      <h2 className="subtitle">Контакты:</h2>
      <p className="contact">+7 (XXX) XXX-XX-XX</p>
      {/* <p className="contact"></p> */}
      <a href="contact">admission@academy.com</a>
      </div>
    </div>
  );
};

export default Academy;
