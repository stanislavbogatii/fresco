import React from 'react';

const RegisterForm = () => {
  return (
    <form className="register-form">
      <strong className="register-form__title">Detalii companie </strong>
      <label className="register-form__label">
        <span className="register-form__text">CUI *</span>
        <input
          className="register-form__input register-form__input--cui input"
          type="text"
          required
        />
        <strong className="register-form__title">Persoana de contact</strong>
      </label>
      <div className="register-form__items">
        <label className="register-form__label">
          <span className="register-form__text">Nume si prenume *</span>
          <input className="register-form__input input" type="text" required />
        </label>
        <label className="register-form__label">
          <span className="register-form__text">Numar de telefon *</span>
          <input className="register-form__input input" type="tel" required />
        </label>
        <label className="register-form__label">
          <span className="register-form__text">Adresa de email *</span>
          <input className="register-form__input input" type="email" required />
        </label>
        <label className="register-form__label">
          <span className="register-form__text">Confirma adresa de email *</span>
          <input className="register-form__input input" type="email" required />
        </label>
      </div>
      <label className="register-form__label-checkbox">
        <input className="register-form__input-checkbox checkbox" type="checkbox" required />
        <span className="register-form__checkbox"></span>
        <span className="register-form__checkbox-text">
          Da, vreau sa ma abonez la newsletter pentru a afla primul despre promotii si noutati
        </span>
      </label>
      <label className="register-form__label-checkbox">
        <input className="register-form__input-checkbox checkbox" type="checkbox" required />
        <span className="register-form__checkbox"></span>
        <span className="register-form__checkbox-text">
          Sunt de acord cu Termenii si conditiile si cu prelucrarea datelor cu caracter personal
          conform cu Politica de confidentialitate
        </span>
      </label>
      <button className="register-form__btn btn" type="submit">
        Creeaza cont
      </button>
    </form>
  );
};

export default RegisterForm;
