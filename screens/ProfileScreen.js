import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInputComponent, TextInput, Button} from 'react-native';
import { useState } from 'react'

export default function ProfileScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-end', height: 30}}>
                <Text>FirstMobileApp</Text>
            </View>
            <View style={{alignItems: 'stretch', flexDirection: 'row', width: 400}}>
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
            <View style={{flex: 1, width: 400}}>
                <View>
                    <Text>Електрона пошта</Text>
                    <TextInput placeholder="Email"
                               style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 370}}
                    />
                </View>
                <View>
                    <Text>Пароль</Text>
                    <TextInput placeholder="Password"
                               style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 370}}
                    />
                </View>
                <View>
                    <Text>Пароль (ще раз)</Text>
                    <TextInput placeholder="Password"
                               style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 370}}
                    />
                </View>
                <View>
                    <Text>Прізвище</Text>
                    <TextInput placeholder="SecondName"
                               style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 370}}
                    />
                </View>
                <View>
                    <Text>Ім'я</Text>
                    <TextInput placeholder="FirstName"
                               style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 370}}
                    />
                </View>
                <View>
                    <Button
                        title="Зареєструватися" />
                </View>
            </View>
            <View>
                <Text>Федоренко Евеліна, ІПЗ-19-2</Text>
            </View>
        </View>
    );
}
