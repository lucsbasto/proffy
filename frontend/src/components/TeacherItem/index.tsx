import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="Avatar"
        />
        <div>
          <strong>Nome do Professor</strong>
          <span>Matéria</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate
        dolorum voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Beatae, consequuntur saepe. Accusamus modi, esse repellat magnam
        libero ab quos, pariatur magni aperiam dolores numquam? Consectetur
        harum voluptatem earum optio aperiam quo autem?
      </p>
      <footer>
        <p>
          Preço/hora
          <strong> R$ Preço</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};
export default TeacherItem;
