import React, {Component} from 'react';
import {Link} from 'react-router';

class Personal extends Component {
    // componentWillMount() {
    //     this.props.personal();
    // }

    render() {
        let user = this.props.loginusername;
        return (


                        <div className="container">
                            <div className="aside-nav">
                                <h1>Hi {user}</h1>

                                {/*<ul class="nav nav-tabs" role="tablist">*/}
                                    {/*<li role="presentation" class="active"><a href='/PersonalInfo'>Home</a></li>*/}
                                    {/*<li role="presentation"><a href='/personalCollection'>Profile</a></li>*/}
                                    {/*<li role="presentation"><a href="#">Messages</a></li>*/}
                                {/*</ul>*/}



                                <ul className="nav nav-pills nav-stacked" role="tablist">
                                    <li><Link to='/PersonalInfo'> 个人信息</Link></li>
                                    <li><Link to='/personalCollection'> 个人收藏</Link></li>
                                    <li><Link to="#"> 个人订单</Link></li>
                                    <li><Link to="#"> 个人show</Link></li>
                                </ul>
                            </div>
                            {/*<ul className="nav navbar-nav" style={{marginLeft:'60px'}}>*/}
                                {/*<li><Link className="loginands" to='/'>******</Link></li>*/}
                                {/*<li><Link className="loginands" to="/">******</Link></li>*/}
                            {/*</ul>*/}
                        </div>
        )
    }
}

export default Personal;
