const About = () => {
    const clicked = () => {
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
            
            console.log(window.dataLayer);
        }
        return (
            <>
            {console.log(window.dataLayer)}
            <div>about!!!</div>
            <button onClick={clicked} className='btn1'>btn1</button>
            <button className='btn2'>btn2</button>
            <button className='btn3'>btn3</button>
            <button className='btn4'>btn4</button>
            <button className='btn5'>btn5</button>
            <button className='btn6'>btn6</button>
            <button className='btn7'>btn7</button>
            <button className='btn8'>btn8</button>
            <button className='btn9'>btn9</button>

        </>
    )
}
export default About