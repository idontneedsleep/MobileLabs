import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { useState } from 'react'

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-end', height: 30}}>
                <Text>FirstMobileApp</Text>
            </View>
            <View style={{alignItems: 'stretch', flexDirection: 'row', width: '100%'}}>
                <Button
                    title="Home"
                    style={{width: '100%'}}
                    onPress={() => navigation.navigate('Home')}/>
                <Button
                title="Gallery"
                onPress={() => navigation.navigate('Gallery')}/>
                <Button
                    title="Profile"
                    onPress={() => navigation.navigate('Profile')}/>
            </View>
            <View style={{flex: 1, height: 100, width: 400}}>
                <View><Text>Новини</Text></View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://reactjs.org/logo-og.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column'}}>
                        <Text>Заголовок новини</Text>
                        <Text>дата новини</Text>
                        <Text>короткий текст новини</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>Федоренко Евеліна, ІПЗ-19-2</Text>
            </View>
        </View>
    );
}