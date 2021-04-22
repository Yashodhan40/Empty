import * as React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Image} from 'react-native'
import bookDonate from '../screens/donateBook'
import requestBook from '../screens/requestBook'

const appTab = createBottomTabNavigator({
        Donate : {screen:bookDonate,
            navigationOptions:{
                tabBarIcons:<Image source={require('../assets/request-list.png')}/>,
                tabBarLabel:'Donate',

            }
        },
        Request:{screen:requestBook,
            navigationOptions:{
                tabBarIcons:<Image source={require('../assets/request-book.png')}/>,
                tabBarLabel:'Request',
            }
        }

        
})

export default appTab;