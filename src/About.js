const About = () => {
    const btnOneClicked = () => {
        window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: "view_item_list",
            ecommerce: {
                items: [
                    {
                        item_name: "Triblend Android T-Shirt",       // Name or ID is required.
                        item_id: "12345",
                        price: 15.25,
                        item_brand: "Google",
                        item_category: "Apparel",
                        item_category2: "Mens",
                        item_category3: "Shirts",
                        item_variant: "Gray",
                        item_list_name: "Search Results",
                        item_list_id: "SR123",
                        index: 1,
                        quantity: 1
                    },
                    {
                        item_name: "Donut Friday Scented T-Shirt",
                        item_id: "67890",
                        price: 33.75,
                        item_brand: "Google",
                        item_category: "Apparel",
                        item_category2: "Mens",
                        item_category3: "Shirts",
                        item_variant: "Black",
                        item_list_name: "Search Results",
                        item_list_id: "SR123",
                        index: 2,
                        quantity: 1
                    }]
            }
        });

    }
    const inputTwoChanged = (value) => {
        window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: "purchase",
            ecommerce: {
                transaction_id: value,
                affiliation: "Online Store",
                value: "59.89",
                tax: "4.90",
                shipping: "5.99",
                currency: "EUR",
                coupon: "SUMMER_SALE",
                items: [{
                    item_name: "Triblend Android T-Shirt",
                    item_id: "12345",
                    price: "15.25",
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_variant: "Gray",
                    quantity: 1
                }, {
                    item_name: "Donut Friday Scented T-Shirt",
                    item_id: "67890",
                    price: 33.75,
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_variant: "Black",
                    quantity: 1
                }]
            }
        });


    }
    return (
        <div>
            <div>about!!!</div>
            <button onClick={btnOneClicked} className='btn1'>btn1</button>
            <input onChange={(e) => inputTwoChanged(e.target.value)} className='btn2' />
        </div>
    )
}
export default About