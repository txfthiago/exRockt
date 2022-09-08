import React from "react";
import { useState, useEffect } from "react";
import "./card.scss"


function Card({classe}) {
  const [gitHub, SetGitHub] = useState([]);

  
  useEffect(() => {
    fetch("https://api.github.com/users/txfthiago")
      .then((response) => response.json())
      .then((data) => SetGitHub(data));
  }, []);

  return (
    <main className={`card${classe}`}>
      
      <section className="card__content"> 
      <h1 className="content__title">{gitHub.login}</h1>
       <img className="card__content__picture" src={gitHub.avatar_url}/>
       <article className="card__content__data">
        <ul>
          <li>
            Seguidores: 
            {gitHub.followers}
          </li>
          <li>
            Seguindo: 
            {gitHub.following}
          </li>
          <li>
            Repositórios: 
            {gitHub.public_repos}
          </li>
        </ul>
       </article>


      </section>
     
    </main>
  );
}

export default Card;
