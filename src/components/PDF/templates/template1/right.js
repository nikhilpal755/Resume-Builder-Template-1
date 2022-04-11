import React,{useContext} from 'react'
import { View , Text} from '@react-pdf/renderer'
import { BuilderContext } from '../../../../App'
// import EmploymentHistory from '../../../Editor/EmploymentHistory'
// import EmploymentHistory from './components/EmploymentHistory'
// import About from '../../Sections/right/About'
// import Projects from '../../Sections/right/Projects'
import EmploymentHistory from './components/EmploymentHistory'
import About from './components/About'
import Projects from './components/Projects'
import styles from './styles/style'
import Divider from './components/Divider'

const EducationText = ({ text, date, desc }) => (
    <View style={{ paddingBottom: '10',  display: 'flex', justifyContent: 'space-between', marginTop: '20' }} key={text}>
        <View style={{width: '20%'}}>
            <Text style={{  fontSize: '9', paddingTop: '3' }}>
                {date}
            </Text>
        </View>
        <View style={{width: '70%', display: 'flex', flexDirection: 'column', marginLeft: '20%', marginTop: '-6%'}}>
            <Text style={{ fontSize: '12' }}>{text}</Text>
            <Text style={{  fontSize: '9', paddingTop: '3' }}>
                {desc}
            </Text>
        </View>
    </View>
  )

  const AwardsText = ({desc, date}) =>(
    <View style={{  display: 'flex', justifyContent: 'space-between', marginTop: '20' }}  >
    <View style={{width: '20%'}}>
        <Text style={{  fontSize: '9', paddingTop: '3' }}>
            {date}
        </Text>
    </View>
    <View style={{width: '70%', display: 'flex', flexDirection: 'column', marginLeft: '20%', marginTop: '-4%'}}>

        <Text style={{  fontSize: '12', paddingTop: '3' }}>
            {desc}
        </Text>
    </View>
</View> 
  )



export default function Right() {
  
  const ctx = useContext(BuilderContext)
  const education = ctx.getComponentData('Education')
  const awards = ctx.getComponentData('Awards')
//   console.log(education)    
  return (
    <View style={styles.section__right}>
      <About text={ctx.getComponentData('Profile').about} />
      <EmploymentHistory items={ctx.getComponentData('Employment').items} />
      
      <Divider />
      <Text
        style={{
          color: '#000',
          fontSize: '15',
        }}
      >
        Education
      </Text>
      <Divider />
      
        {education.items.map((item, index) => (
            <EducationText key={index} text={item.degree} date={item.date} desc={item.desc} />
        ))}

<Divider />
      <Text
        style={{
          color: '#000',
          fontSize: '15',
        }}
      >
        Awards and Honors
      </Text>
      <Divider />

      {
        awards.items.map((item, index) => (
            <AwardsText desc={item.desc} date={item.date} key={index}/>
        ))
      }
     
    </View>
  )
  
}
