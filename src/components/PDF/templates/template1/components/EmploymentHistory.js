// import { EmploymentHistoryItem } from '../../../Sections/right/EmploymentHistoryItem'
import { EmploymentHistoryItem } from './EmploymentHistoryItem'
import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

const EmploymentHistory = ({ items }) => {
  return (
    <View style={{ paddingTop: '20px' }}>
      <Divider />
      <Text
        style={{
          color: '#000',
          fontSize: '15',
        }}
      >
        Work Experience
      </Text>
      <Divider />
      {items.map((item, index) => (
        <EmploymentHistoryItem
          key={index}
          text={item.position}
          date={item.date}
          description={item.description}
          responsibilities={item.responsibilities}
        />
      ))}
    </View>
  )
}

export default EmploymentHistory
