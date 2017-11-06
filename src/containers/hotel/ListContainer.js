import { connect } from 'react-redux'
import { sortHotels } from '../../store/hotel/actions'
import HotelList from '../../components/hotel/List'

const mapStateToProps = state => {
  return {
    hotels: state.hotels,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: (dir,field) => {
      dispatch(sortHotels(dir,field))
    }
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelList)

export default ListContainer