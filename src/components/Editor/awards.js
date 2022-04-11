import React,{useContext, useState} from 'react'
import { BuilderContext } from '../../App'
import AwardsItem from './awardsItem'
import ActionMenu from './ActionMenu'

export default function Awards() {
    const ctx = useContext(BuilderContext)
    const [awards, setAwards] = useState(ctx.getComponentData('Awards'));
    const newItem ={
        desc: 'Award Description',
        date: 'Mar 2017 - Dec 2019',
    }

    const handleChange = (i, e) => {
        const targetName = e.target.name
        const modifiedItem = {
          ...awards.items[i],
          [targetName]: e.target.value,
        }
        awards.items.splice(i, 1, modifiedItem)
        //ctx.updateInfo(education)
      }
      const handleAddClick = () => {
        setAwards({
          ...awards,
          items: [...awards.items, newItem],
        })
      }
      const handleRemoveClick = () => {
        setAwards({
          ...awards,
          items: awards.items.filter(
            (item, index) => index < awards.items.length - 1
          ),
        })
      }
      const handleSaveClick = () => ctx.updateInfo(awards)
    
  return (
    <>
    <div className='pt-5'>
      {awards.items.map((item, index) => (
        <AwardsItem
          key={index}
          index={index}
          data={item}
          handleChange={handleChange}
        />
      ))}
      <ActionMenu
        handleSaveClick={handleSaveClick}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
    </>
  )
}
