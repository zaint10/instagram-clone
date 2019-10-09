import SignedOutNav from 'src/screens/auth/SignedOutNav';
import MainNavigator from 'src/screens/main/MainNavigator';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export const SignedOut = createAppContainer(SignedOutNav);
export const SignedIn = createAppContainer(MainNavigator);
// export const SignedIn = MainNavigator


export const createRootNavigator = (isSignedIn = false) => {
	return createAppContainer(
		createSwitchNavigator(
			{
				SignedIn: SignedIn,
				SignedOut: SignedOut
			},
			{
				initialRouteName: isSignedIn ? signedIn : SignedOut
			}
		)
	);
};
