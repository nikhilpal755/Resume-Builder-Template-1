import { View, Text } from '@react-pdf/renderer'
import React from 'react'
import { useContext } from 'react'
import { BuilderContext } from '../../../../App'
// import styles from '../../../../styles'
import styles from './styles/style'
import ProfileName from './components/profileName'
import  SkillItem  from './components/SkillItem'

const Wrapper = ({ heading, ...props }) => {
    return (
        <View style={{ marginTop: '25', marginLeft: '15', marginRight: '15' }}>
            <Text
                style={{
                    color: '#FFF',
                    fontSize: '15',
                    paddingBottom: '10',
                }}
            >
                {heading}
            </Text>
            {props.children}
        </View>
    )
}
export default function Left() {
    const ctx = useContext(BuilderContext)
    const profile = ctx.getComponentData('Profile')


    const personalInfo = ctx.getComponentData('personal-info');
    const skills = ctx.getComponentData('Skills');
    const languages = ctx.getComponentData('Languages');
    // console.log(skills)

    return (
        <View style={styles.section__left}>
            <ProfileName
                name={profile.name}
                profession={profile.profession}
            />

            <View style={{ backgroundColor: 'black', marginTop: '0' }}>
                <Text style={{ color: 'whitesmoke', width: '100%', marginLeft: '20%', fontSize: '14px', padding: '6' }}>Personal Info</Text>
            </View>
            <View style={{color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '20'}}>
                <Text>Address</Text>
                <Text>{personalInfo?.items[0]?.text}</Text>
            </View>
            <View style={{color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '0px 10px 20px 20px'}}>
                <Text>Phone</Text>
                <Text>{personalInfo?.items[1]?.text}</Text>
            </View>
            <View style={{color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '0px 10px 20px 20px'}}>
                <Text>Email</Text>
                <Text>{personalInfo?.items[2]?.text}</Text>
            </View>
            <View style={{color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '0px 10px 20px 20px'}}>
                <Text>Linkedin</Text>
                <Text>{personalInfo?.items[3]?.text}</Text>
            </View>
            <View style={{color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '0px 10px 20px 20px'}}>
                <Text>Twitter</Text>
                <Text>{personalInfo?.items[4]?.text}</Text>
            </View>

            <View style={{ backgroundColor: 'black', marginTop: '0' }}>
                <Text style={{ color: 'whitesmoke', width: '100%', marginLeft: '20%', fontSize: '14px', padding: '6' }}>Skills</Text>
            </View>

            {skills.display && (
          <Wrapper heading={skills.header}>
            {skills.items.map((item, index) => (
              <SkillItem key={index} name={item.text} fillSkill={item.level} />
            ))}
          </Wrapper>
        )}

        <View style={{ backgroundColor: 'black', marginTop: '0', marginTop: '20' }}>
                <Text style={{ color: 'whitesmoke', width: '100%', marginLeft: '20%', fontSize: '14px', padding: '6' }}>Languages</Text>
        </View>

        <View>
         <Wrapper heading={languages.header}>
            {languages.items.map((item, index) => 
                <SkillItem key={index} name={item.text} fillSkill={item.level} />
            )}
         </Wrapper>
        </View>



            

        </View>
    )
}
