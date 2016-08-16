/**
 * Created by jae on 16-8-14.
 */
import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import CakeItem from './CakeItem';

class Cake extends Component {
  render() {
    const {cake}=this.props;
    return (
        <div className="row">
          {
            cake.map((v, k)=> (
                <CakeItem key={k}
                          name={v.name}
                          image={v.image}
                          price={v.price}
                          intro={v.intro}
                          infor={v.infor}
                          size={v.size}
                          style={v.style}
                />
            ))
          }
        </div>
    );
  }
}

export default Cake;
