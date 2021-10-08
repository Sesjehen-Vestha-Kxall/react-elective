import {useEffect, useState} from 'react';
import axios                 from 'axios';
import {Link}                from 'react-router-dom';


axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export function Service() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios.get('/character').then(res => {
      setCharacterList(res.data.results);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="album py-5 bg-dark">
      <div className="container">
        <div className="row">
          {characterList.map(it => {
            return (
              <div className="col-md-3 d-flex align-items-stretch ">
                <div className="card text-white bg-dark border-light mb-4 box-shadow">
                  <img src={`${it.image}`} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-title">Name: {it.name}</p>
                    <p className="card-text">Status: {it.status}</p>
                    <p className="card-text">Species: {it.species}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to={`/rick-service/${it.id}`}
                              type="button"
                              className="btn btn-sm btn-outline-light">View</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*
<div>
  <ul>
    {characterList.map(it => {
      return (
        <li>
          <Link to={`/rick-service/${it.id}`}> {it.name} </Link>
        </li>
      );
    })}
  </ul>
</div>
*/