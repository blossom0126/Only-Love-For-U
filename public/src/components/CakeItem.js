import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class CakeItem extends Component {

  click() {
    this.props.getId(this.props.key);
  }

  render() {
    let {name, image, style, intro, id} = this.props;
    return (
        <div>
          <div className="text-center col-xs-6 col-md-3">
            <a href={'/cakeDetail/' + id} className="text-center thumbnail">
              <img src={image} title={intro}  />
            </a>
            <div>{name}</div>
            <div>{style}</div>
          </div>
        </div>
    );
  }
}

export default CakeItem;