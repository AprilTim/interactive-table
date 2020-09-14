import React from "react";
import "./Pagination.css"

const Pagination = (props) => {

    let pageCount = Math.ceil(props.pagination.totalUserCount/props.pagination.pageUserCount)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className="pagination-block">
            {pages.map((page) => <span onClick={()=> props.setCurrentPage(page)}
                                       key={page}
                                       className={`pagination-item 
                                       ${props.pagination.currentPage == page && "active"}`}>{page}</span>)}
        </div>
    )
}


export default Pagination;