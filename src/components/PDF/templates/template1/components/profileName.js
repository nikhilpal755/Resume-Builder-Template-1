import { Text, View } from '@react-pdf/renderer'
// import styles from '../../../../../styles'
import styles from './../styles/style'



export default function ProfileName({ name, profession }) {
    return (

        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20',
                marginBottom: '20px',
        
                // height: '150',
                fontFamily: 'Helvetica-Bold',
            }}
        >

            <View
                style={{
                    justifyContent: 'center',
                }}
            >
                <Text style={styles.name_text}>{name}</Text>
            </View>
            <Text style={styles.profession_text}>{profession}</Text>
            {/* <View
                style={{
                    marginTop: '10px',
                    width: '10%',
                    height: '1px',
                    backgroundColor: '#FFF',
                    textAlign: 'center',
                }}
            /> */}
        </View>

    )
}
