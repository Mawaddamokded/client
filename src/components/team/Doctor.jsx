function Doctor({ docteur }) {
    const MAX_LENGTH = 100;
    return (
        <div className="card single-team mt-5" style={{ width: "18rem", height: "35rem" }}>
    

        <div className="team-img">
          
        <img src={docteur.photo} alt="Team "/>
            <div className="team-info">
                <h3 className="title"><a href="#docteur">{docteur.nom_doc} {docteur.prenom_doc}</a></h3>
                <p className="post">{docteur.nom_spec}</p>
            </div>
        </div>
      
        <div className="team-desc">
        <div>
      {docteur.description.length > MAX_LENGTH ?
      (
      <div>
        {`${docteur.description.substring(0, MAX_LENGTH)}...`}<a href="#details">Lire la suite</a>
      </div>
      ) :
      <p>{docteur.description}</p>
      }
      </div>
        </div>
        <footer className="social-info d-flex justify-content-around " >
      
            <li><a href={docteur.google_link}> <i className="fas fa-envelope-open" ></i></a></li>
            <li><a href={docteur.facebook_link}><i className="fab fa-facebook-f"></i></a></li>
            <li><a href={docteur.twitter_link}><i className="fab fa-twitter"></i></a></li>
        </footer>
      </div> 

    );
}

export default Doctor;
