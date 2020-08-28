import React from 'react';
import { View, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import Auth from '@aws-amplify/auth';
import { withOAuth } from 'aws-amplify-react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export default withOAuth(({
    oAuthUser: user,
    authState,
    oAuthError: error,
    hostedUISignIn,
    facebookSignIn,
    googleSignIn,
    amazonSignIn,
    customProviderSignIn,
    signOut,
    onStateChange
}) => {

    if (authState === "loading" || authState === "verifyContact") return (<View style={{ flex: 1, backgroundColor: theme.colors.primary, justifyContent: 'center' }}><ActivityIndicator color={'#000000'} /></View>)

    const loginWithProvider = (provider) => Auth.federatedSignIn({ provider: provider }).then(response => console.log('response', response)).catch(reason => console.log('reason', reason))

    return (
        <>
            <View style={{ flex: 1, width: '100%' }}>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => loginWithProvider('SignInWithApple')}>
                        <View style={{ backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center', borderRadius: 100, width: 44, height: 44 }}>
                            <FontAwesomeIcon name={'apple'} size={24} color={'#FFFFFF'} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
});
