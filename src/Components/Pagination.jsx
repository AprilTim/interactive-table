import React from "react";


const Pagination = (props) => {

    let pageCount = Math.ceil(props.pagination.totalUserCount/props.pagination.pageUserCount)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((page) => <span onClick={()=> props.setCurrentPage(page)} key={page} className={`${props.pagination.currentPage == page && "active"}`}>{page}</span>)}
        </div>
    )
}


export default Pagination;