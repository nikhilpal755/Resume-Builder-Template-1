import React,{useState, useContext} from 'react'
import {BuilderContext} from './../../App'
import TextArea from './TextArea'
import ActionMenu from './ActionMenu'

export default function PersonalInfo() {
    const ctx = useContext(BuilderContext)
    const [personalInfo, setPersonalInfo] = useState(ctx.getComponentData('personal-info'))

  
    const [address , setAddress] = useState(personalInfo?.items?.filter(item => item.type === 'Address')[0].text) 
    const [phone, setPhone] = useState(personalInfo?.items?.filter(item => item.type === 'Phone')[0].text)
    // console.log(phone);

    const [email, setEmail] = useState(personalInfo?.items?.filter(item => item.type === 'Email')[0].text)
    const [linkedin, setLinkedin] = useState(personalInfo?.items?.filter(item => item.type === 'Linkedin')[0].text)
    const [twitter, setTwitter] = useState(personalInfo?.items?.filter(item => item.type === 'twitter')[0].text)

    const handleChange = (e) => {
        const targetName = e.target.name
        let modifiedItem;
        if(targetName === 'Address'){

            modifiedItem = {
                ...personalInfo.items[0],
                text: e.target.value,
            }
        }else if(targetName === 'Phone'){
            modifiedItem = {
                ...personalInfo.items[1],
                text: e.target.value,
            }
        }else if(targetName === 'Email'){
            modifiedItem = {
                ...personalInfo.items[2],
                text: e.target.value,
            }
        }else if(targetName === 'Linkedin'){
            modifiedItem = {
                ...personalInfo.items[3],
                text: e.target.value,
            }
        }else{
            modifiedItem = {
                ...personalInfo.items[4],
                text: e.target.value,
            }
        }
        console.log(modifiedItem)
        const item = personalInfo?.items?.filter(item => item.type === targetName)[0];
        personalInfo?.items?.splice(personalInfo?.items.indexOf(item), 1, modifiedItem)
        setPersonalInfo({
            ...personalInfo
        })
        console.log(personalInfo)
    }

    const handleSaveClick = () => ctx.updateInfo(personalInfo)
  return (
    <div className='pt-5'>
        <TextArea
        placeholder='Address'
        rows='2'
        style='pb-2'
        name='Address'
        defaultValue={address}
        handleChange={handleChange}
        />
        <TextArea
        placeholder='Phone'
        rows='2'
        style='pb-2'
        name='Phone'
        defaultValue={phone}
        handleChange={handleChange}
        />
        <TextArea
        placeholder='Email'
        rows='2'
        style='pb-2'
        name='Email'
        defaultValue={email}
        handleChange={handleChange}
        />
        <TextArea
        placeholder='Linkedin'
        rows='2'
        style='pb-2'
        name='Linkedin'
        defaultValue={linkedin}
        handleChange={handleChange}
        />
        <TextArea
        placeholder='Twitter'
        rows='2'
        style='pb-2'
        name='Twitter'
        defaultValue={twitter}
        handleChange={handleChange}
        />

    <ActionMenu
        handleSaveClick={handleSaveClick}
       
      />

    </div>
  )
}
