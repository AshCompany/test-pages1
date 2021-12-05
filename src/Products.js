import axios from "axios"
import React, { useState } from "react";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            basket: [],
            payValue: '',
            showList: false
        }
    }
    componentDidMount = () => {
        const axios = require('axios');
        axios.get('http://172.17.17.101:8088/api/en/Nas/Product/GetProductList?&pageLength=12&currentPageIndex=1&Filter.productSortType=3').then(res => {
            this.setState({
                products: res.data.messageItems[0].data.dataItems,
            })
        })
    }
    addToBasketClicked = (product) => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "add_to_cart",
            ecommerce: {
                ...product
            }
        })
        let data = this.state.basket
        data.push(product)
        this.setState({
            basket: data
        })
    }
    deleteFromBasketClicked = (item, index) => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "remove_from_cart",
            ecommerce: {
                ...item
            }
        })
        let data = this.state.basket;
        data.splice(index, 1)
        this.setState({
            basket: data
        })
    }
    payValueChanged = (value) => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "purchase",
            ecommerce: {
                value
            }
        })
        this.setState({
            payValue: value
        })
    }
    payBtnClicked = () => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "begin_checkout",
            ecommerce: {
                items: {
                    ...this.state.basket
                },
                amountOfMoney: this.state.payValue
            }
        })
        this.setState({
            basket: []
        })
    }
    clearBasketClicked = () => {
        this.setState({
            basket: [],
            payValue: ""
        })
    }
    viewListClicked = () => {
        this.setState({
            showList: !this.state.showList
        }, () => this.state.showList && <>
            {
                window.dataLayer.push({ ecommerce: null }),
                window.dataLayer.push({
                    event: "view_item_list",
                    ecommerce: {
                        ...this.state.basket
                    }
                })
            }
        </>)
    }
    render() {
        return (
            <>
                <div key={window.dataLayer} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {console.log(window.dataLayer, "********")}
                    <div>
                        {this.state.products.map(product => {
                            return !!product.imageUrl && <div style={{ marginTop: '10px', height: '100px', display: 'flex' }}>
                                <img style={{ width: '100px' }} src={`http://172.17.17.101:8088${product.imageUrl}`} />
                                <div>
                                    <p>{product.name}</p>
                                    <button onClick={() => this.addToBasketClicked(product)}>add to basket</button>
                                </div>
                            </div>
                        })}
                    </div>
                    <div style={{ width: '200px' }}>
                        <button onClick={this.viewListClicked}>{`${this.state.showList ? "hide" : "show"} basket items`}</button>
                        <button onClick={this.clearBasketClicked}>clear basket</button>
                        basket
                        {this.state.showList && this.state.basket.map((item, index) => {
                            return <div style={{ display: 'flex' }}>
                                <p>{item.name}</p>
                                <button onClick={() => this.deleteFromBasketClicked(item, index)}>delete</button>
                            </div>
                        })}
                        <input value={this.state.payValue} onChange={(e) => this.payValueChanged(e.target.value)} style={{ marginTop: '10px' }} />
                        <button onClick={this.payBtnClicked}>pay</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Products