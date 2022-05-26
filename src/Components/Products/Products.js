import React from 'react';
import '../../Scss/Components/Products/Products.scss';
import { products } from '../../Data/Data';
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Products(){
    return(
        <div className='productsContainer'>
            <div className='productsElement1' id='shirt'>
                <div className="products1Item1">
                    <img src={products[0].model} alt="model" />
                    <button>SHOP</button>
                </div>
                <div className="products1Item2">
                    <img src={products[0].image} alt="product" />
                    <h3>{products[0].name}</h3>
                    <span>
                        _____
                    </span>
                    <p>{products[0].description}</p>
                    <div>
                        <button>
                            <MdKeyboardArrowRight/>
                        </button>
                        <span>
                            <a href="https://www.instagram.com/urbanclothes_col/">ver más</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className='productsElement2' id='belt'>
                <div className="products2Item2">
                    <img src={products[1].image} alt="product" />
                    <h3>{products[1].name}</h3>
                    <span>
                        _____
                    </span>
                    <p>{products[1].description}</p>
                    <div>
                        <button>
                            <MdKeyboardArrowRight/>
                        </button>
                        <span>
                            <a href="https://www.instagram.com/urbanclothes_col/">ver más</a>
                        </span>
                    </div>
                </div>
                <div className="products2Item1">
                    <img src={products[1].model} alt="model" />
                    <button>SHOP</button>
                </div>
            </div>
            <div className='productsElement3' id='wallet'>
                <div className="products3Item1">
                    <img src={products[2].model} alt="model" />
                    <button>SHOP</button>
                </div>
                <div className="products3Item2">
                    <img src={products[2].image} alt="product" />
                    <h3>{products[2].name}</h3>
                    <span>
                        _____
                    </span>
                    <p>{products[2].description}</p>
                    <div>
                        <button>
                            <MdKeyboardArrowRight/>
                        </button>
                        <span>
                            <a href="https://www.instagram.com/urbanclothes_col/">ver más</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className='productsElement4' id='glasses'>
                <div className="products4Item2">
                    <img src={products[3].image} alt="product" />
                    <h3>{products[3].name}</h3>
                    <span>
                        _____
                    </span>
                    <p>{products[3].description}</p>
                    <div>
                        <button>
                            <MdKeyboardArrowRight/>
                        </button>
                        <span>
                            <a href="https://www.instagram.com/urbanclothes_col/">ver más</a>
                        </span>
                    </div>
                </div>
                <div className="products4Item1">
                    <img src={products[3].model} alt="model" />
                    <button>SHOP</button>
                </div>
            </div>
            <div className='productsElement5' id='gap'>
                <div className="products5Item1">
                    <img src={products[4].model} alt="model" />
                    <button>SHOP</button>
                </div>
                <div className="products5Item2">
                    <img src={products[4].image} alt="product" />
                    <h3>{products[4].name}</h3>
                    <span>
                        _____
                    </span>
                    <p>{products[4].description}</p>
                    <div>
                        <button>
                            <MdKeyboardArrowRight/>
                        </button>
                        <span>
                            <a href="https://www.instagram.com/urbanclothes_col/">ver más</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}