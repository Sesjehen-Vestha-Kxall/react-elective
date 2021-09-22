import React from 'react';
import 'pages/Centered.css';

export function Car() {
  return (
    <div className='bg-dark'>
      <div className="card text-center bg-dark text-light">
        <div className="card-header bg-secondary"/>
        <div className="card-body">
          <h1 className="card-title">Current Activity</h1>
          <h5 className="card-text">> Car Form</h5>
        </div>
        <div className="card-footer text-muted bg-secondary"/>
      </div>

      <br/>

      <div className='col-sm-6 centered'>
        <form className='card' style={{ padding: '1.5rem' }}>
          <div className='form-group row'>
            <label htmlFor='car-model'
                   className='col-sm-2 col-form-label'>Car Model</label>
            <div className='col-sm-10'>
              <input type='text'
                     className='form-control'
                     id='car-model'
                     placeholder='Enter Model'/>
            </div>
          </div>
          <br/>
          <div className='form-group row'>
            <label htmlFor='car-brand'
                   className='col-sm-2 col-form-label'>Car Brand</label>
            <div className='col-sm-10'>
              <input type='text'
                     className='form-control'
                     id='car-brand'
                     placeholder='Enter Brand'/>
            </div>
          </div>
          <br/>
          <div class='form-group'>
            <label for='painting-color'>Painting Color</label>
            <select class='form-control'
                    id='painting-color'>
              <option>Select an Option</option>
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
              <option>White</option>
              <option>Black</option>
              <option>Orange</option>
              <option>Purple</option>
            </select>
          </div>
          <br/>
          <div className='form-group'>
            <label htmlFor='wheels'>Wheels</label>
            <select className='form-control'
                    id='wheels'>
              <option>Select an Option</option>
              <option>4</option>
              <option>6</option>
            </select>
          </div>
          <br/>
          <div className='form-group'>
            <label htmlFor='doors'>Doors</label>
            <select className='form-control'
                    id='doors'>
              <option>Select an Option</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <br/>
          <div className='form-group row'>
            <label htmlFor='engine'
                   className='col-sm-2 col-form-label'>Engine</label>
            <div className='col-sm-10'>
              <input type='text'
                     className='form-control'
                     id='engine'
                     placeholder='Enter Engine'/>
            </div>
          </div>
          <br/>
          <div class='form-group'>
            <label for='notes'>Notes</label>
            <textarea class='form-control'
                      id='notes' rows='3'/>
          </div>
          <button type='submit'
                  className='btn btn-primary centered'>Submit
          </button>
        </form>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}