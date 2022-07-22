import React, { Component } from 'react';
import lodash from 'lodash';
const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChanges} = props;
    console.log('currentPage', currentPage)
    const pageCount = Math.ceil(itemsCount/pageSize);
    const pages = lodash.range(1, pageCount + 1);
    //console.log('pageCount', pageCount)
    return ( 
        <ul className="pagination">
            {pages.map(page=>
                 <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item' }>
                    <a className="page-link" onClick={()=>onPageChanges(page)}>{page}</a>
                </li>
            )}
          
        </ul>
        );
}
 
export default Pagination;
