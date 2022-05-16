import Error404Page from './components/Error404Page/Error404Page'
import HomePage from './components/HomePage/HomePage'
import LoginChallenge from './components/LoginChallenge/LoginChallenge'
import AppPage from './components/Page/AppPage'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

// error404page Component Mapping
MapTo('vue/components/error404page')(Error404Page, EditConfig)

// homePage Component Mapping
MapTo('vue/components/homePage')(HomePage, EditConfig)

// LoginChallenge Component Mapping
MapTo('vue/components/loginchallenge')(LoginChallenge, EditConfig)

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
