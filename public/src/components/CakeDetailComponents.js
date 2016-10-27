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
        const {name, image, style, intro, size, price, infore, inforc}  = this.props.CakeDetailReducers;
        const id = this.props.CakeDetailReducers._id;
        return (
            <div>
                <div className="cakecomcui">
                    <div className="welcome-section">
                        <div className="container">
                            <div className="about-grid ">
                                <div className="col-md-8 about-text">
                                    <div className="col-md-4 about-img">
                                        <img src={ '../' + image} className="img-responsive zoom-img img-rounded"
                                             title={inforc}/>
                                    </div>
                                    <div style={{marginTop: '20px', marginLeft: '480px'}}>
                                        <h3 style={{color: '#b0916a'}}>CakeDetail--{style}</h3>
                                        <p>蛋糕名称：{name}</p>
                                        <p>蛋糕风味：{style}</p>
                                        <p>蛋糕简介：{intro}</p>
                                        <p>蛋糕价格：{price}</p>
                                        <p>蛋糕尺寸：{size}</p>
                                        <p>蛋糕心语：{infore}</p>
                                    </div>
                                    <div style={{marginTop: '20px', marginLeft: '600px'}}>
                                        <Link to={'/orderlist/' + id}>
                                            <button className="btn btn-info">立即购买</button>
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to='/personalCollection/'>
                                        <button className="btn btn-info">点击收藏</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CakeDetailComponent;