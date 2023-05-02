import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInputComponent, TextInput, Button} from 'react-native';
import { useState } from 'react'

export default function ProfileScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-end', high: '30'}}>
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
            <View style={{flex: 1}}>
                <View>
                    <TextInput placeholder="Email"
                               style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 400}}
                    />
                </View>
            </View>
            <View>
                <Text>Федоренко Евеліна, ІПЗ-19-2</Text>
            </View>
        </View>
    );
}
