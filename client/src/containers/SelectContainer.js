import { connect } from 'react-redux'
import SelectComponent from '../components/SelectComponent';
import { getMakes } from '../actions/makesActions'
import { getModels } from '../actions/modelsActions'

const mapStateToProps = (state) => ({
  makes: state.makes,
  models: state.models
})

const mapDispatchToProps = dispatch => {
  return {
    initialMakes: () => {
      dispatch(getMakes)
    },
    handleOnChange: (e) => {
      const makeId = e.target.value
      dispatch(getModels(makeId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent)