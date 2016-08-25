/**
 * Created by jae on 16-8-16.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
class PersonCenter extends Component {
  render() { let use=this.props.loginusername;
    return (
       
        <div>
          <div className="about-section person">
            <div className="col-md-7 ab-text">
              <h2>Hi!{use}</h2>
              <br/>
              <h4>Welcome To <span>PersonCenter</span></h4>
              
              </div>
            </div>
        </div>

    );
  }
}

export default PersonCenter;