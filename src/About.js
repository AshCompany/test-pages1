const About = () => {
    const clicked = () => {
        window.dataLayer.push({
            event: 'event',
            eventProps: {
                category: "login",
                action: "account",
                label: "premium",
                value: "1"
            }
        });
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