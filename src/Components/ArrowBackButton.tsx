import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements';

export const ArrowBackButton = (props: any) => {
    const { route } = props;



    return (
        <View style={{
            position: 'absolute', zIndex: 2, alignItems: 'center',
            paddingVertical: 3, alignSelf: 'flex-start', marginLeft: 9, height: 35, width: 35,
        }}>
            <View style={{
                width: 35, height: 35, flexDirection: 'row',
                 justifyContent: 'center',
                alignItems: 'center', marginBottom: 20, borderRadius: 30, marginTop: 3
            }}>
                <Icon name='arrow-left' type='feather'
                    color='white' onPress={() => route.goBack()} tvParallaxProperties={undefined}>
                </Icon>
            </View>
        </View>
    )
}
