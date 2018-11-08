import { connect } from 'react-redux'
import SelectComponent from '../components/SelectComponent';
import { getMakes } from '../actions/makesActions'
import { getModels } from '../actions/modelsActions'

const mapStateToProps = (state) => ({
  makes: state.makes,
  models: state.models
})

const mapDispatchToProps = dispatch => ({
  initialMakes: () => {
    dispatch(getMakes)
  },
  handleOnChange: (e) => {
    const makeid = e.target.value
    dispatch(getModels(makeid))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectComponent)