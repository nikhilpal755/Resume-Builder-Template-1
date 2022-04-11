import { Text, View } from '@react-pdf/renderer'
// import styles from '../../../../styles'
import styles from '../styles/style'

export const EmploymentHistoryItem = ({
  text,
  date,
  description,
  responsibilities,
}) => (
  <View style={{ paddingBottom: '20px' , display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
    <View style={{width: '20%'}}>
        <Text style={{ fontSize: '9', color: '#959ba6', paddingBottom: '5', marginTop: '10' }}>
          {date}
        </Text>
    </View>
    <View style={{width: '70%', display: 'flex', flexDirection: 'column', marginLeft: '20%', marginTop: '-7%'}}>
      <Text
        style={{
          color: '#000',
          fontSize: '13',
        }}
      >
        {text}
      </Text>
      <Text style={{ fontSize: '11' }}>{description}</Text>
      <Text style={{ fontSize: '11', marginLeft: '15px', marginTop: '4' }}>
        {responsibilities}
    </Text>
    </View>
  </View>
)
