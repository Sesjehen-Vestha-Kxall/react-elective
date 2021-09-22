import React       from 'react';
import {useParams} from 'react-router-dom';
import './Detail.css'


export function CarDetail() {
  let {id} = useParams();

  id = id ?? 'XXX-XXX';

  return (
    <div>
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading"><strong>Car Detail</strong></h1>
          <p class="lead text-muted">The following is the list of cars.</p>
        </div>
      </section>

      <div class="album py-5 bg-dark">
        <div class="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card text-white bg-dark border-light mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">Model: {id}</p>
                  <p className="card-text">Brand: XXX-XXX</p>
                  <p className="card-text">Color: XXX-XXX</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-light">View</button>
                      <button type="button" className="btn btn-sm btn-outline-light">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-dark border-light mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">Model: XXX-XXX</p>
                  <p className="card-text">Brand: XXX-XXX</p>
                  <p className="card-text">Color: XXX-XXX</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-light">View</button>
                      <button type="button" className="btn btn-sm btn-outline-light">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-dark border-light mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">Model: XXX-XXX</p>
                  <p className="card-text">Brand: XXX-XXX</p>
                  <p className="card-text">Color: XXX-XXX</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-light">View</button>
                      <button type="button" className="btn btn-sm btn-outline-light">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card text-white bg-dark border-light mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">Model: XXX-XXX</p>
                  <p className="card-text">Brand: XXX-XXX</p>
                  <p className="card-text">Color: XXX-XXX</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-light">View</button>
                      <button type="button" className="btn btn-sm btn-outline-light">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-dark border-light mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">Model: XXX-XXX</p>
                  <p className="card-text">Brand: XXX-XXX</p>
                  <p className="card-text">Color: XXX-XXX</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-light">View</button>
                      <button type="button" className="btn btn-sm btn-outline-light">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-dark border-light mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text">Model: XXX-XXX</p>
                  <p className="card-text">Brand: XXX-XXX</p>
                  <p className="card-text">Color: XXX-XXX</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-light">View</button>
                      <button type="button" className="btn btn-sm btn-outline-light">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}