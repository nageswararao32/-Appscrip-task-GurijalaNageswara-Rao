import React, { useEffect, useState } from 'react';
import '../Styles/MobStyles.css';
import { Link } from 'react-router-dom';
import Img from '../Images/Img.jpg';
import Footer from './Footer';
import axios from 'axios';


const options = [
    { name: 'RECOMMENDED', code: 'RECOMMENDED' },
    { name: 'NEWEST FIRST', code: 'NEWEST FIRST' },
    { name: 'POPULAR', code: 'POPULAR' },
    { name: 'PRICE : HIGH TO LOW', code: 'PRICE : HIGH TO LOW' },
    { name: 'PRICE : LOW TO HIGH', code: 'PRICE : LOW TO HIGH' }
];

function MobileView() {
    const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false);
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className='mb'>
                <div className="container2">
                    <Link><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px" }}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></Link>
                    <img src={Img} alt='img' style={{ width: "70px", height: "70px" }} />
                    <h1 style={{ textAlign: "center", fontFamily: "sans-serif"}} className='logo'>LOGO</h1>
                    <div className='mdiv1'>
                        <Link className="icon1"><i className="fa fa-search"></i></Link>
                        <Link className="icon1"><i className="far fa-heart"></i></Link>
                        <Link className="icon1"><i className="fa fa-shopping-bag"></i></Link>
                    </div>
                </div>
            </div>
            <div>
                <h2><span style={{ color: "gray" }}>HOME</span> <span color='white'> | </span><span color='black'>SHOP</span></h2>
            </div>
            <div>
                <div class="dk">
                    <h2 className='hk'>DISCOVER OUR PRODUCTS</h2>
                    <p className='desck'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>
            <hr  style={{margin:"10px"}}/>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <h2 style={{ fontFamily: "sans-serif", color: "black", fontWeight: "bold", fontSize: "20px",textAlign:"center"}}>FILTER</h2>
                <span style={{border:"2px solid black",margin:"10px",height:"50px"}}></span>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <div
                            style={{
                                borderRadius: "4px",
                                padding: "5px",
                                cursor: "pointer",
                                textAlign: "right",
                            }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                        <h3 style={{ fontWeight: "bold", fontFamily: "sans-serif", display: "inline-block" }}>{selectedOption}<svg style={{ width: "20px", height: "20px", margin: "0px 10px 0px 10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></h3>
                        </div>
                        {isOpen && (
                            <div style={{ backgroundColor: '#f9f9f9f9', position: 'absolute',width: '58%' }}>
                                {options.map((op) => (
                                    <div
                                        key={op.code}
                                        onClick={() => handleOptionChange({ target: { value: op.code } })}
                                        style={{
                                            padding: "15px",
                                            margin: "20px",
                                            textAlign: "right",
                                            cursor: "pointer",
                                            color: op.code === selectedOption ? "black" : "",
                                            fontFamily: "sans-serif",
                                            fontSize: op.code === selectedOption ? "20px" : "16px",
                                            fontWeight: op.code === selectedOption ? "bold" : "normal",
                                        }}
                                    >
                                        <span style={{ display: "inline-flex", margin: "0px 20px 0px 20px", height: "20px", width: "20px" }}>{op.code === selectedOption && "✓"}</span>
                                        {op.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
            </div>
            <hr style={{margin:"10px"}} />
            <div>
            <div className='productsList1'>
                {products.map((product, index) => {
                    return (
                        <div key={product.id} className='plist1'>
                            <div className='img1'>
                                <img src={product.image} alt='products' style={{ width: "100px", height: "150px" }} />
                            </div>
                            <div className='name1'>
                                <h3 key={product.id} className='productName1'>{product.title}</h3>
                                <span style={{ color: "grey", fontFamily: "sans-serif", fontSize: "12px", margin: "0px 10px 0px 10px" }}><Link style={{ color: "grey", fontFamily: "sans-serif" }}>Sign in</Link> or <Link style={{ color: "grey", fontFamily: "sans-serif", textDecoration: "none" }}>Create an account</Link> to see pricing<Link style={{ margin: "0px 5px 0px 5px" }}></Link></span><span><Link>{index === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="red" style={{ fontSize: "10px" }}><path d="M12 21.35l-1.45-1.32C5.4 16.11 2 13.36 2 9.5 2 7.02 3.78 5 6.01 5c1.34 0 2.63.99 3.99 2.01C10.37 5.99 11.66 5 13 5c2.23 0 4.01 2.02 4.01 4.5 0 3.86-3.4 6.61-8.55 10.54L12 21.35z" /></svg> : <i className="far fa-heart" style={{ fontSize: "20px" }}></i>}</Link></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default MobileView;