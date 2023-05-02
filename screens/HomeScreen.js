import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useState } from 'react'

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View>
                <Text>FirstMobileApp</Text>
            </View>
            <View>
                <Button
                    title="Home"
                    onPress={() => navigation.navigate('Home')}/>
                <Button
                title="Gallery"
                onPress={() => navigation.navigate('Gallery')}/>
                <Button
                    title="Profile"
                    onPress={() => navigation.navigate('Profile')}/>
            </View>
            <View>

            </View>
            <View>
                <Text>Федоренко Евеліна, ІПЗ-19-2</Text>
            </View>
        </View>
    );
}