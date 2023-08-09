import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllColors,selectColor } from './ColorSlice'

export default function Colors() {
 const dispatch = useDispatch()
 const colors = useSelector(state=>state.color)
 useEffect(() => {
    dispatch(getAllColors());
 }, [])
 
    return (

    <div>
{Object.values(colors.entities).map((color,key)=>(
    <h1 className='text-bg-danger p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3' style={{background: color.name}}key={key} onMouseOver={()=>dispatch(selectColor(color.name))}>{color.name}</h1>
))}
        
    </div>
  )
}
