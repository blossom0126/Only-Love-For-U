import React ,{Component} from 'react';
 //import {Link} from 'react-router';
class personalCollect extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

        this.props.loadCollection(this.props.CakeDetailReducers._id);
    }
    render(){

        const {name,image,size,price,intro} = this.props.CakeDetailReducers;
        //    const id = this.props.CakeDetailReducers._id;
            return (
                <div className="cakeWelcome">
                    <div className="collection_cake">
                        <div className="container">
                            <table className="table table-hover">
                                <caption>如果您有看到喜欢的但是暂时不想买，可以选择收藏</caption>
                                <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>图片</th>
                                    <th>商品信息</th>
                                    <th>价格</th>
                                    <th>尺寸</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{name}</td>
                                    <td>
                                         <img src={ '../' + image}  /></td>
                                    <td>{intro}</td>
                                    <td>{price}</td>
                                    <td>{size}</td>
                                </tr>
                                <tr>
                                </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
            );
    }
}

export default personalCollect;