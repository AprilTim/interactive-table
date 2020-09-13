import React from "react";
import connect from "react-redux/lib/connect/connect";
import Table from "./Table";
import {getData, getUserInfo, onSearch, sortColumn} from "../Redux/MainReducer";
import Loading from "./Loader/Loading";
import {setCurrentPage, setUserCount} from "../Redux/paginationReducer";
import {loading} from "../Redux/loaderReducer";

class TableContainer extends React.Component {

    async componentDidMount() {
        this.props.loading(true)
        const response = await fetch(this.props.dataType)
        const data = await response.json()
        this.props.getData(data)
        this.props.setUserCount(data.length)
        this.props.loading(false)
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataType !== this.props.dataType) {
            this.props.loading(true)
            const response = await fetch(this.props.dataType)
            const data = await response.json()
            this.props.getData(data)
            this.props.setUserCount(data.length)
            this.props.loading(false)
        }
    }

    onFind = (value) => {
        this.props.onSearch(value)
        this.props.setCurrentPage(1)
        let checkValue = value ? this.pagData().length : this.props.data.length
        this.props.setUserCount(checkValue)
    }

    filterData = () => {
        const {data, search} = this.props
        return (search
            ? data.filter((user) => user["firstName"].toLowerCase().includes(search.toLowerCase()) ||
                user["lastName"].toLowerCase().includes(search.toLowerCase()) ||
                user["email"].toLowerCase().includes(search.toLowerCase()))
            : data)
    }

    pagData = () => {
        let currentPage = this.props.pagination.currentPage
        let pageUserCount = this.props.pagination.pageUserCount
        return (
            this.filterData().filter((obj, index) => pageUserCount * currentPage - pageUserCount <= index + 1 && index + 1 < pageUserCount * currentPage)
        )
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Loading/> : <Table onFind={this.onFind}
                                                            dataNew={this.pagData()}
                                                            {...this.props}/>}
            </div>
        )
    }
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