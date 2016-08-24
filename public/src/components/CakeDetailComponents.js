/**
 * Created by hanyile on 16/8/18.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class CakeDetailComponent extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadPage(this.props.params.id);
  }


  render() {
    const {name, image, style, intro }  = this.props.CakeDetailReducers;
    const  id=this.props.CakeDetailReducers._id;
    return (
        <div>
          <p>{name}</p>
          <p>{intro}</p>
          <p>{style}</p>
          <img src={ '../' + image}></img>
       <Link to={'/orderlist/' + id}>
         <button className="btn btn-default">立即购买</button>
         </Link>
        </div>
    );
  }
}

export default CakeDetailComponent;