import {useEffect, useState} from 'react';
import {useParams}           from 'react-router-dom';
import axios                 from 'axios';


export function RickDetail() {
  let {id} = useParams();

  const [character, setCharacter] = useState({});
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    // first request: return an specific character
    axios
      .get(`/character/${id}`)
      .then(r1 => {
        setCharacter(r1.data);
        // creates an string with format '_,_,_,_' to make a single api request
        let tmp = r1.data?.episode.map(x => x.split('/').at(-1)).join(',');
        // second request: returns the episodes as json objects
        axios
          .get(`/episode/${tmp}`)
          .then(r2 => {
            // sometimes data is a single object, so we need to put it in an array
            // so that it be an iterable object with a forEach function
            setEpisodeList([].concat(r2.data));
            throw new DOMException(); // ends immediately this response handling
          }).catch(ignored => {});
      });
  }, [id]);

  return (
    <div className="centered">
      <div className="card mb-3">
        <div className="row">
          <div className="col-sm-5">
            <img src={`${character.image}`} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <h5 className="card-title">Character Name: {character.name}</h5>
              <p className="card-text">
                Status: {character.status}
                <br/>
                Species: {character.species}
                <br/>
                Type: {character.type !== '' ? character.type : 'N/A'}
                <br/>
                Gender: {character.gender}
                <br/>
                Origin: {character.origin?.name}
                <br/>
                Location: {character.location?.name}
              </p>
              <p className="card-text"><small className="text-muted">Created
                at: {character.created}</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="centered">
        <h4 className="centered">
          Episode List
        </h4>
      </div>
      <div className="album py-5">
        <div className="container">
          <div className="row">
            {episodeList.map(e => (
              <div className="col-md-3 d-flex align-items-stretch">
                <div className="card text-white bg-dark border-light mb-4 box-shadow">
                  <div className="card-header"><strong>Ep:</strong> {e.name}</div>
                  <div className="card-body">
                    <p className="card-title">Code: {e.episode}</p>
                    <p className="card-text">Aired: {e.air_date}</p>
                    <p className="card-text">Created: {e.created}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
