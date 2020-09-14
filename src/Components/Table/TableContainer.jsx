import React, {useEffect} from "react";
import connect from "react-redux/lib/connect/connect";
import * as axios from "axios";

import Table from "./Table";
import Loading from "../Loader/Loading";

import {getData, getUserInfo, onSearch, sortColumn} from "../../Redux/mainReducer";
import {setCurrentPage, setUserCount} from "../../Redux/paginationReducer";
import {loading} from "../../Redux/loaderReducer";

const TableContainer = (props) => {

    /*async componentDidMount() {
        props.loading(true)
        const response = await fetch(props.dataType)
        const data = await response.json()
        props.getData(data)
        props.setUserCount(data.length)
        props.loading(false)
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataType !== props.dataType) {
            props.loading(true)
            const response = await fetch(props.dataType)
            const data = await response.json()
            props.getData(data)
            props.setUserCount(data.length)
            props.loading(false)
        }
    }*/

    useEffect(() => {
        async function requestData() {
            console.log("hi")
            props.loading(true)
            const response = await axios.get(props.dataType)
            props.getData(response.data)
            props.setUserCount(response.data.length)
            props.loading(false)
        }

        requestData()
    }, [props.dataType])

    const onFind = (value) => {
        props.onSearch(value)
        props.setCurrentPage(1)
        const checkValue = value ? visibleUserData().length : props.data.length
        props.setUserCount(checkValue)
    }

    const filterData = () => {
        const {data, search} = props
        return (search
            ? data.filter((user) => user["firstName"].toLowerCase().includes(search.toLowerCase()) ||
                user["lastName"].toLowerCase().includes(search.toLowerCase()) ||
                user["email"].toLowerCase().includes(search.toLowerCase()))
            : data)
    }

    const visibleUserData = () => {
        const currentPage = props.pagination.currentPage
        const pageUserCount = props.pagination.pageUserCount
        return (
            filterData().filter((obj, index) => pageUserCount * currentPage - pageUserCount <= index + 1 && index + 1 < pageUserCount * currentPage)
        )
    }

    return (
        <div>
            {props.isLoading ? <Loading/> : <Table onFind={onFind}
                                                   visibleUserData={visibleUserData()}
                                                   {...props}/>}
        </div>
    )

}

let mapStateToProps = (state) => ({
    data: state.main.data,
    isLoading: state.loader.isLoading,
    userInfo: state.main.userInfo,
    search: state.main.search,
    dataType: state.main.dataType,
    pagination: state.pagination,
    sortField: state.main.sortField,
    sortType: state.main.sortType
})

export default connect(mapStateToProps, {
    getData,
    getUserInfo,
    sortColumn,
    onSearch,
    setUserCount,
    setCurrentPage,
    loading
})(TableContainer);