import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { useState } from 'react'

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignItems: 'flex-end', height: 30}}>
                <Text>FirstMobileApp</Text>
            </View>
            <View style={{flexDirection: 'row', width: 400}}>
                <Button
                    title="Home"
                    style={{width: 100}}
                    onPress={() => navigation.navigate('Home')}/>
                <Button
                title="Gallery"
                style={{width: 100}}
                onPress={() => navigation.navigate('Gallery')}/>
                <Button
                    title="Profile"
                    style={{width: 100}}
                    onPress={() => navigation.navigate('Profile')}/>
            </View>
            <View style={{flex: 1, height: 100, width: 400}}>
                <View>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Новини</Text>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-400x300.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column', margin: 12}}>
                        <Text>Заголовок новини</Text>
                        <Text>дата новини</Text>
                        <Text>короткий текст новини</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-400x300.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column', margin: 12}}>
                        <Text>Заголовок новини</Text>
                        <Text>дата новини</Text>
                        <Text>короткий текст новини</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-400x300.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column', margin: 12}}>
                        <Text>Заголовок новини</Text>
                        <Text>дата новини</Text>
                        <Text>короткий текст новини</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-400x300.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column', margin: 12}}>
                        <Text>Заголовок новини</Text>
                        <Text>дата новини</Text>
                        <Text>короткий текст новини</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-400x300.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column', margin: 12}}>
                        <Text>Заголовок новини</Text>
                        <Text>дата новини</Text>
                        <Text>короткий текст новини</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', width: 400, borderWidth: 1}}>
                    <Image
                        source={{uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-400x300.png'}}
                        style={{height: 100, width: 100}}
                    />
                    <View style={{alignItems: 'stretch', flexDirection: 'column', margin: 12}}>
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