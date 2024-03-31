import React, { useState } from 'react';
import '../Styles/NavStyles.css';
import { Link } from 'react-router-dom';
import Img from '../Images/Img.jpg';
import Products from './Products';
import Sidebar from './Sidebar';
import Footer from './Footer';

function NavBar() {
    const [selectedLanguage, setSelectedLanguage] = useState('ENG');
    const languages = [
        { code: 'HI', name: 'Hindi' },
        { code: 'BN', name: 'Bengali' },
        { code: 'TE', name: 'Telugu' },
        { code: 'MR', name: 'Marathi' },
        { code: 'TA', name: 'Tamil' },
        { code: 'UR', name: 'Urdu' },
        { code: 'GU', name: 'Gujarati' },
        { code: 'KN', name: 'Kannada' },
        { code: 'ML', name: 'Malayalam' },
        { code: 'PA', name: 'Punjabi' },
        { code: 'OR', name: 'Odia' },
        { code: 'ENG', name: 'English' },
    ];
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };
    const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false);
    };

    const options = [
        { name: 'RECOMMENDED', code: 'RECOMMENDED' },
        { name: 'NEWEST FIRST', code: 'NEWEST FIRST' },
        { name: 'POPULAR', code: 'POPULAR' },
        { name: 'PRICE : HIGH TO LOW', code: 'PRICE : HIGH TO LOW' },
        { name: 'PRICE : LOW TO HIGH', code: 'PRICE : LOW TO HIGH' }
    ];

    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
        setOpen(true);
        if (showFilter) {
            setOpen(false);
        }
    };

    return (
        <div className='main'>
            <div className="container">
                <img src={Img} alt='img' style={{ width: "70px", height: "70px" }} />
                <h1 style={{ textAlign: "center", fontFamily: "sans-serif", marginLeft: "230px" }} className='logo'>LOGO</h1>
                <div className='mdiv'>
                    <Link className="icon"><i className="fa fa-search"></i></Link>
                    <Link className="icon"><i className="far fa-heart"></i></Link>
                    <Link className="icon"><i className="fa fa-shopping-bag"></i></Link>
                    <Link className="icon" ><i className="far fa-user"></i></Link>
                    <select value={selectedLanguage} onChange={handleLanguageChange} style={{ border: "none", outline: "none", color: "black", cursor: "pointer", fontSize: "16px", fontFamily: "sans-serif" }}>
                        {languages.map((language) => (
                            <option key={language.code} value={language.code} style={{ border: "none" }}>
                                {language.code}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='mainDiv'>
                <nav className='navBar'>
                    <Link className='link'><h3>SHOP</h3></Link>
                    <Link className='link'><h3>SKILLS</h3></Link>
                    <Link className='link'><h3>STORIES</h3></Link>
                    <Link className='link'><h3>ABOUT</h3></Link>
                    <Link className='link'><h3>CONTACT US</h3></Link>
                </nav>
                <hr></hr>
            </div>
            <div>
                <div class="de">
                    <h2>DISCOVER OUR PRODUCTS</h2>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>
            <div>
                <hr style={{ margin: "0px 30px 0px 30px" }}></hr>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "sans-serif" }}>3425 ITEMS</h3>
                    <p style={{ color: "grey" }}><Link style={{ color: "grey", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "20px" }} onClick={handleShowFilter}>{showFilter ? (
                        <>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ width: "20px", height: "20px", margin: "0px 5px 0px 5px" }}><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></span>HIDE FILTER
                        </>
                    ) : (
                        <>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ width: "20px", height: "20px", margin: "0px 5px 0px 5px" }}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></span>SHOW FILTER
                        </>
                    )}</Link></p>
                    <div>
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
                            <div style={{ backgroundColor: '#f9f9f9f9', position: 'absolute', top: '75%', left: '60%', width: '28%' }}>
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
            </div>
            <hr style={{ margin: "0px 30px 20px 30px" }}></hr>
            <div className='sideCont'>
                <div className='sidebar' style={{ display: open ? 'block' : 'none' }}>
                    <Sidebar />
                </div>
                <div className={open ? 'fullWidth' : 'prodPage'}>
                    <Products openFilter={open} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default NavBar;


