import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import {Link} from 'react-router';
class CakeItem extends Component {

  click() {
    this.props.getId(this.props.key);
  }

  render() {
    let {name, image, style, intro, id} = this.props;

    return (
        <div>
          <div className="text-center col-xs-6 col-md-3">
            <Link to={'/cakeDetail/' + id} className="text-center thumbnail">
              <img src={image} title={intro}  />
            </Link>
            <div>{name}</div>
            <div>{style}</div>
          </div>
        </div>
    );
  }
}

export default CakeItem;