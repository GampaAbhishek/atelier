import React from 'react'
import { ChannelConstants as channelConstants } from './ChannelConstant'
import ChannelConstantInterface from './ChannelConstant'

function Channel() {
  return (
    <div className='grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {channelConstants.map((channel: ChannelConstantInterface) => (
            <div key={channel.id} className={`flex px-4 py-2 flex-col gap-2 items-center rounded-lg ${channel.classname}`}>
               <h2 className='text-[15px]'>{channel.title}  </h2>
                <p className='text-2xl'>{channel.time}</p>
            </div>
        ))}
    </div>
  )
}

export default Channel
