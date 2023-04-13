import React from 'react'
import styled from 'styled-components'
import GridView from './GridView'
import { useFilterContext } from '../context/filter_context'
import ListView from './ListView'

const ProductList = () => {
    const { state } = useFilterContext();
    const { filtered_products, grid_view } = state;

    if (filtered_products.length < 1) {
        return <h5 style={{ textTransform: 'none'}}>Sorry, there are no products for you!</h5>
    }
    if (grid_view===false) {
        return (
            <ListView products={filtered_products}/>
        )
    }
    return (
        <GridView products={filtered_products}/>
    )
}

export default ProductList
