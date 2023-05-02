import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import { useState } from 'react'

export default function GalleryScreen({navigation}) {
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
            <View style={{flex: 1, flexDirection: 'column', marginTop: 12}}>
                <View  style={{alignItems: 'stretch', flexDirection: 'row'}}>
                    <Image
                        source={{uri: 'https://ztu.edu.ua/img/mainpage/header/photo11.jpg'}}
                        style={{height: 180, width: 180, margin: 5}}
                    />
                    <Image
                        source={{uri: 'https://ztu.edu.ua/img/mainpage/header/photo11.jpg'}}
                        style={{height: 180, width: 180, margin: 5}}
                    />
                </View>
                <View  style={{alignItems: 'stretch', flexDirection: 'row'}}>
                    <Image
                        source={{uri: 'https://ztu.edu.ua/img/mainpage/header/photo11.jpg'}}
                        style={{height: 180, width: 180, margin: 5}}
                    />
                    <Image
                        source={{uri: 'https://ztu.edu.ua/img/mainpage/header/photo11.jpg'}}
                        style={{height: 180, width: 180, margin: 5}}
                    />
                </View>
                <View  style={{alignItems: 'stretch', flexDirection: 'row'}}>
                    <Image
                        source={{uri: 'https://static.espreso.tv/uploads/article/2694859/images/im-eifel.png'}}
                        style={{height: 180, width: 180, margin: 5}}
                    />
                    <Image
                        source={{uri: 'https://static.espreso.tv/uploads/article/2694859/images/im-eifel.png'}}
                        style={{height: 180, width: 180, margin: 5}}
                    />
                </View>
            </View>
            <View>
                <Text>Федоренко Евеліна, ІПЗ-19-2</Text>
            </View>
        </View>
    );
}