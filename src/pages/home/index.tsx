"use client"
import React, { useEffect, useState } from 'react'
import Hamburger from '@/components/hamburger'
import Profile from '@/components/profile'
import ChatsList from '@/components/Contacts/chatsList'
import Chats from '@/components/chats'
import Groups from '@/components/Contacts/groupList'



export default function HomePage() {
  const [index,setIndex]=useState(0);
  return (
    <>
      <div className="container-fluid" style={{ height: '100%' }}>
        <div className="row vh-100 overflow-y-hidden">
          <Hamburger index={index} setIndex={setIndex}/>
          <div className="col-3 bg-white container-fluid " style={{ overflowX: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(3,1fr),', gridTemplateRows: '4fr 8fr' }}>
            <div><Profile /></div>
            <div >{index==1 ?<ChatsList /> : <Groups/>}</div>
          </div>
          <div className="col-8 light-bg">
            <div><Chats /></div>
          </div>
        </div>
      </div>

    </>
  )
}
