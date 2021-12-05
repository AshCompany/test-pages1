import axios from "axios"
import React, { useState } from "react";
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            basket: [],
            payValue: '',
            showList: false,
            productDetail: {},
            isOpenModal: false,
            loadedImages: []
        }
    }
    componentDidMount = () => {
        const axios = require('axios');
        axios.get('https://api.diamond-press.com/api/en/Nas/Product/GetProductList?&pageLength=12&currentPageIndex=1&Filter.productSortType=3').then(res => {
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
                items: [
                    ...this.state.basket
                ],
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
                        items: [...this.state.basket]
                    }
                })
            }
        </>)
    }
    viewProductDetail = (product) => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "select_item",
            ecommerce: {
                items: [...product]
            }
        })
        const axios = require('axios');
        axios.get(`https://api.diamond-press.com/api/en/Nas/Product/GetProductInfo?&id=${product.id}&title=is+not+valid+now`).then(res => {
            if (!res.data.hasError) {
                this.setState({
                    productDetail: {},
                    isOpenModal: true
                }, () => this.setState({
                    productDetail: res.data.messageItems[0].data
                }))
                window.dataLayer.push({ ecommerce: null });
                window.dataLayer.push({
                    event: "view_item",
                    ecommerce: {
                        items: [...res.data.messageItems[0].data]
                    }
                })
            }
        })
    }
    imageLoaded = (e) => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "view_promotion",
            ecommerce: {
                items: [
                    {
                        imageId: e.target.id,
                        imageName: e.target.alt
                    }
                ]
            }
        })
    }
    imageClicked = (e) => {
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            event: "select_promotion",
            ecommerce: {
                items: [
                    {
                        imageId: e.target.id,
                        imageName: e.target.alt
                    }
                ]
            }
        })
    }
    render() {
        return (
            <>
                <img id={1} style={{ width: '200px', marginRight: '10px' }} src={img1} alt='banner 1' onLoad={(event) => this.imageLoaded(event)} onClick={(event) => this.imageClicked(event)} />
                <img id={2} style={{ width: '200px' }} src={img2} alt='banner 2' onLoad={(event) => this.imageLoaded(event)} onClick={(event) => this.imageClicked(event)} />
                <div key={window.dataLayer} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {console.log(window.dataLayer, "********")}
                    <div>
                        {this.state.products.map(product => {
                            return !!product.imageUrl && <div style={{ marginTop: '10px', height: '100px', display: 'flex' }}>
                                <img style={{ width: '100px' }} src={`https://api.diamond-press.com${product.imageUrl}`} />
                                <div>
                                    <p>{product.name}</p>
                                    <button onClick={() => this.addToBasketClicked(product)}>add to basket</button>
                                    <button onClick={() => this.viewProductDetail(product)}>view product detail</button>
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
                {this.state.isOpenModal && <div style={{ position: 'fixed', zIndex: '1', left: '0', top: '0' }}>
                    <img src={`https://api.diamond-press.com${this.state.productDetail?.imageUrl}`} />
                    <button onClick={() => this.setState({ isOpenModal: false })}>close</button>
                </div>}
                <img id={3} style={{ width: '200px', marginRight: '10px' }} src={img3} alt='banner 3' onLoad={(event) => this.imageLoaded(event)} onClick={(event) => this.imageClicked(event)} />
            </>
        )
    }
}
export default Products