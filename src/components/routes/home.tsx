import React from 'react';
import Customer from '../common/Customer';
import { CustomerClass } from '../common/CustomerClass';

function Home() {
  return (
    <React.Fragment>
    <div className="container mt-3">
      <div className="gird">
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">App Component</p>
            <button className="btn btn-success btn-sm"><i className="fa fa-book"/>Read more</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Customer name={'Rajin'} age={23} title={'enginer'}/>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <CustomerClass name={'Rajin'} age={25} title={'enginer'}/>
          </div>

        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Home;
