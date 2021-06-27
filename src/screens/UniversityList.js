import React from 'react';
import {SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View} from 'react-native';
import {  Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {StatusBar} from "expo-status-bar";
import Background from "../components/Background";
import LoginScreen from "./LoginScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    // nav:{
    //     marginTop:0,
    // }
})
const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
};

const titleConfig = {
    title: 'Hello, world',
};

const UniversityList = ({navigation}) => {
    return (


        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            {/*<NavigationBar*/}
            {/*    title={titleConfig}*/}
            {/*    rightButton={rightButtonConfig}*/}
            {/*    backgroundColor="#61dafb"*/}
            {/*/>*/}
            <ScrollView>


            <Card>
                <Card.Title>HELLO </Card.Title>
                <Card.Divider/>
                <Card.Image source={require('./j.jpeg')}/>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />


            </Card>
                <Card>
                    <Card.Title>HELLO </Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('./j.jpeg')}/>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />


                </Card><Card>
                <Card.Title>HELLO </Card.Title>
                <Card.Divider/>
                <Card.Image source={require('./j.jpeg')}/>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />


            </Card>

                <Card>
                    <Card.Title>HELLO </Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('./j.jpeg')}/>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />


                </Card><Card>
                <Card.Title>HELLO </Card.Title>
                <Card.Divider/>
                <Card.Image source={require('./j.jpeg')}/>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />

                <Button
                    mode="contained"
                    onPress={LoginScreen}
                    style={{ marginTop: 16 }}
                >
                    Send Code
                </Button>
            </Card>

            </ScrollView>
     </View>

    );
}

export default UniversityList;