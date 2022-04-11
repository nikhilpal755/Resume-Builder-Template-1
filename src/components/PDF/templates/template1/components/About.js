import { Text, View } from '@react-pdf/renderer'
// import styles from '../../../../styles'
import styles from '../styles/style'
import Divider from './Divider'

const About = ({ text }) => (
  <View>
    <Text style={styles.main__text}>{text}</Text>
  </View>
)
export default About
