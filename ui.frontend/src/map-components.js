import Error404Page from './components/Error404Page/Error404Page'
import HomePage from './components/HomePage/HomePage'
import AppPage from './components/Page/AppPage'
import HomePageFooter from './components/experience-fragments/HomePageFooter/Footer'
import HomePageHeader from './components/experience-fragments/HomePageHeader/Header'
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

// 404 Page Component Mapping
MapTo('vue/components/error404page')(Error404Page, EditConfig)

// Home Page Component Mapping
MapTo('vue/components/homePage')(HomePage, EditConfig)

// Header Component Mapping
MapTo('vue/components/homepageheader')(HomePageFooter, EditConfig)

// Footer Component Mapping
MapTo('vue/components/homepagefooter')(HomePageHeader, EditConfig)

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
