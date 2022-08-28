import React from 'react'
import { NavigationContainer, MenuItem } from './NavigationElements';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <NavigationContainer>
                <MenuItem onClick={() => onRouteChange('signout')}>
                    Sign out
                </MenuItem>
            </NavigationContainer>
        )
    } else {
        return (

            <div>
                <br></br><br></br>
            </div>
        )
    }
}

export default Navigation