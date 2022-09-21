import React from 'react'

const Kiri = ()=>{
    return <div>

    </div>
}
const Kanan = ()=>{
    return <div>

    </div>
}

export default function ArtikeKomponen(props) {
  return (
    <>
        {props.lokasi =='kiri' && <Kiri/> }
        {props.lokasi =='kanan' && <Kanan/> }
    </>
  )
}
