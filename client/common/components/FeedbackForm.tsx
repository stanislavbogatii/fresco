import React from 'react';

const FeedbackForm = () => {
  return (
    <form className="feedback-form">
      <strong className="feedback-form__title">
        Nu ai gasit inca raspunsurile pe care le cauti? Lasa-ne un mesaj si revenim in cel mai scurt
        timp.
      </strong>
      <label className="feedback-form__label">
        <span className="feedback-form__text">Nume si prenume</span>
        <input className="feedback-form__input input" type="text" required />
      </label>
      <label className="feedback-form__label">
        <span className="feedback-form__text">Adresa de email</span>
        <input className="feedback-form__input input" type="email" required />
      </label>
      <label className="feedback-form__label">
        <span className="feedback-form__text">Numar de telefon</span>
        <input className="feedback-form__input input" type="tel" required />
      </label>
      <textarea
        className="feedback-form__textarea input"
        placeholder="Mesajul tau pentru noi"
      ></textarea>
      <button className="feedback-form__btn btn" type="submit">
        Trimite
      </button>
    </form>
  );
};

export default FeedbackForm;
