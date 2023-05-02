import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInputComponent, TextInput} from 'react-native';
import { useState } from 'react'

export default function ProfileScreen({navigation}) {
    return (
        <View>
            <View>
                <Text>FirstMobileApp</Text>
            </View>
            <View>

            </View>
            <View>
                <View>
                    <TextInput placeholder="Email"
                               style={styles.input}
                    />
                </View>
            </View>
            <View>
                <Text>Федоренко Евеліна, ІПЗ-19-2</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});