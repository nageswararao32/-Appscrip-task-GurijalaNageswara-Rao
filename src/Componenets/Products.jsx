import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ProductStyles.css';
import { Link } from 'react-router-dom';


function Products(props) {
    const [products, setProducts] = useState([]);
    let status = props.openFilter;
    console.log(status);
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
            <div className='productsList'>
                {products.map((product, index) => {
                    return (
                        <div key={product.id} className='plist'>
                            <div className='img'>
                                {status && index === 0 && <div className="newProductLabel">NEW PRODUCT</div>}
                                {status && index === 1 && (
                                    <div className="outOfStockLabel">
                                        <span>OUT OF STOCK</span>
                                    </div>
                                )}
                                <img src={product.image} alt='products' style={{ width: "200px", height: "350px" }} />
                            </div>
                            <div className='name'>
                                <h3 key={product.id} className='productName'>{product.title}</h3>
                                <span style={{ color: "grey", fontFamily: "sans-serif", fontSize: "12px", margin: "0px 10px 0px 10px" }}><Link style={{ color: "grey", fontFamily: "sans-serif" }}>Sign in</Link> or <Link style={{ color: "grey", fontFamily: "sans-serif", textDecoration: "none" }}>Create an account</Link> to see pricing<Link style={{ margin: "0px 5px 0px 5px" }}>{index === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="red" style={{ fontSize: "20px" }}><path d="M12 21.35l-1.45-1.32C5.4 16.11 2 13.36 2 9.5 2 7.02 3.78 5 6.01 5c1.34 0 2.63.99 3.99 2.01C10.37 5.99 11.66 5 13 5c2.23 0 4.01 2.02 4.01 4.5 0 3.86-3.4 6.61-8.55 10.54L12 21.35z" /></svg> : <i className="far fa-heart" style={{ fontSize: "20px" }}></i>}</Link></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default Products;


/*


{status && (index === 0 && <div className="newProductLabel">NEW PRODUCT</div>)}
{status && (index === 1 && <div className="outOfStockLabel">OUT OF STOCK</div>)}

{status && index === 0 && <div className="newProductLabel">NEW PRODUCT</div>}
            {status && index === 1 && (
              <div className="outOfStockLabel">
                <span>OUT OF STOCK</span>
              </div>
            )}


*/