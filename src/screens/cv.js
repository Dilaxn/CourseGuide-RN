import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Header from "../components/Header";
import {StatusBar} from "expo-status-bar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    container1: {
        flex: 1,

    },
    sectionHeader: {
        borderWidth:1,
        marginTop:10,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const cv = () => {
    return (
        <View style={styles.container1}>
            <Header/>

        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <SectionList
                sections={[
                    {title: 'Arts Stream', data: ['Arts  (SP)', 'Arts  (SAB)', 'Communication Studies','Peace and Conflict Resolution',
                        'Islamic Studies','Arabic Language','Teaching English as a Second Language (TESL)','Music, Dance, Drama & Theatre and Visual Arts in the University of37the Visual and Performing Arts, Colombo',
                        'Music, Dance and Art & Design in the Ramanathan Academy of38Fine Arts of the University of Jaffna',
                        'Music, Dance, Drama & Theatre and Visual & Technological Arts38in the Swami Vipulananda Institute of Aesthetic Studies of theEastern University, Sri Lanka']},
                    {title: 'Commerce Stream', data: ['Management', 'Management (Public) Special', 'Estate Management & Valuation',
                            'Commerce', 'Management Studies (TV)', 'Business Information Systems (Special) (BIS)']},
                    {title: 'Biological Science Stream', data: ['Medicine/Dental Surgery/Veterinary Science', 'Agricultural Technology & Management'
                            , 'Agriculture','Food Science & Nutrition','Food Science & Technology',
                        'Ayurvedic Medicine and Surgery','Unani Medicine and Surgery','Siddha Medicine and Surgery',
                            'Biological Science','Applied Sciences (Biological Science)','Health Promotion','Nursing',
                        'Pharmacy','Medical Laboratory Sciences','Radiography','Physiotherapy','Molecular Biology & Biochemistry',
                        'Fisheries & Marine Sciences','Environmental Conservation & Management','Animal Science & Fisheries','Food Production & Technology Management',
                        'Agricultural Resource Management and Technology','Agribusiness Management','Green Technology','Animal Science','Export Agriculture','Aquatic Resources Technology']},
                    {title: 'Physical Science Stream', data: ['Engineering', 'Engineering (EM) - Earth Resources Engineering', 'Engineering (TM) - Textile & Clothing Technology',
                        'Physical Science','Computer Science','Applied Sciences (Physical Science)','Transport & Logistics Management',
                        'Industrial Statistics & Mathematical Finance','Statistics & Operations Research','Computing & Information System','Physical Science - ICT']},
                    {title: 'Engineering Technology Stream', data: ['Engineering Technology (ET)']},
                    {title: 'Biosystems Technology Stream', data: ['Biosystems Technology (BST)']},

                    {title: 'Information Communication Technology', data: []},
                    {title: 'Different subjectstreams', data: ['Information Technology (IT)','Management and Information Technology (MIT)',
                        'Quantity Surveying','Surveying Science','Town & Country Planning','Architecture','Fashion Design & Product Development',
                        'Landscape Architecture','Design','Law','Facilities Management','Computation & Management','Management and Information Technology (SEUSL)',
                        'Science and Technology','Computer Science & Technology','Entrepreneurship & Management','Tea Technology & Value Addition','Industrial Information Technology',
                        'Mineral Resources and Technology','Palm and Latex Technology & Value Addition','Hospitality, Tourism and Events Management','Physical Education','Sports Science & Management',
                        'Speech and Hearing Sciences','Information Technology & Management','Tourism & Hospitality Management','Information Systems','Translation Studies',
                        'Film & Television Studies','Project  Management','Information and Communication Technology (ICT)','Software Engineering','Food Business Management',
                        'Marine and Fresh Water Sciences','Business Science','Financial Engineering','Geographical Information Science','Financial Mathematics and Industrial Statistics',
                        'Human Resource Development']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
        </View>
    );
}

export default cv;