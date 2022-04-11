import React, { useEffect, useState, useContext } from 'react'
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Svg,
  Path,
  Image,
} from '@react-pdf/renderer'

import { BuilderContext } from './../../App'
// import roboto from '../fonts/Roboto-Bold.ttf'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
// import { Right as SectionRight } from './Sections/Right_'
// import { Left as SectionLeft } from './Sections/Left_'
import Left from './templates/template1/left.js'
import Right  from './templates/template1/right.js'

// Font.register({
//   family: 'Roboto',
//   fonts: [
//     {
//       src: roboto,
//     },
//   ],
// })
// Create styles

import styles from '../../styles'


// Create Document Component

const PreviewScreen = () => {
  const ctx = useContext(BuilderContext)
  return (
    <div style={{ flexGrow: '1' }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '50vw',
          height: '100vh',
          // fontFamily: 'Roboto',
        }}
      >
        <ResumeTemplate builder={ctx} />
      </PDFViewer>
      <PDFDownloadLink
        document={<ResumeTemplate builder={ctx} />}
        fileName='somename.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

const ResumeTemplate = ({ builder }) => (
  <Document style={styles.document}>
    <Page size='A4' style={styles.page}>
      <BuilderContext.Provider value={builder}>
        {/* <SectionLeft />
        <SectionRight /> */}
        
        <Left />
        <Right/>
      </BuilderContext.Provider>
    </Page>
  </Document>
)

export default PreviewScreen
