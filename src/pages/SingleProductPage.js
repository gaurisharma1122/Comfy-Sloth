import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context';
import { single_product_url } from '../utils/constants';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PageHero from '../components/PageHero';
import ProductImages from '../components/ProductImages';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';

const SingleProductPage = () => {
    const { id }= useParams();
    const { state, fetchSingleProduct }= useProductsContext();
    const { single_product_loading, single_product_error, single_product }= state;
    const history= useNavigate();

    useEffect(()=>{
      fetchSingleProduct(single_product_url+id);
      console.log(single_product);
    }, []);

    const { name, price, description, stock, stars, reviews, company, images }= single_product;

    //Navigating to products page automatically if there is an error
    useEffect(()=>{
      if(single_product_error){
        setTimeout(()=>{
          history('/products');
        }, 3000);
      }
    }, [single_product_error]);


    if(single_product_loading){
      return <Loading/>
    }
    if(single_product_error){
      return <Error/>
    }
    return (
      <Wrapper>
        <PageHero title={name} singleProduct={true}/>
        <div className="section section-center page">
          <Link to="/products" className='btn'>back to products</Link>
          <div className="product-center">
            <ProductImages/>

            <section className="content">

              <h2>{name}</h2>
              <Stars/>
              <h5 className="price">$ {price}</h5>
              <p className="desc">{description}</p>

              <p className="info">
                <span>Available :</span>
                {stock>0 ? 'In Stock' : 'Out of Stock'}
              </p>
              <p className="info">
                <span>Brand :</span>
                {company}
              </p>

              <hr/>

              {
                stock>0 && <AddToCart/>
              }

            </section>

          </div>
        </div>
      </Wrapper>
    )
  }
  
  const Wrapper = styled.main`
    .product-center {
      display: grid;
      gap: 4rem;
      margin-top: 2rem;
    }
    .price {
      color: var(--clr-primary-5);
    }
    .desc {
      line-height: 2;
      max-width: 45em;
    }
    .info {
      text-transform: capitalize;
      width: 300px;
      display: grid;
      grid-template-columns: 125px 1fr;
      span {
        font-weight: 700;
      }
    }
    @media (min-width: 992px) {
      .product-center {
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
      .price {
        font-size: 1.25rem;
      }
    }
  `
  
  export default SingleProductPage
