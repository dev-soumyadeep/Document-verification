import React from 'react'
import CountUp from 'react-countup'
const ActivityCounter:React.FC = () => {
  return (
    <div className='m-5'>
      <h1 className='text-2xl font-bold text-center lg:p-8 md:text-left'>
        Our Platform Has
      </h1>
      <div className='grid place-items-center gap-5 lg:grid-cols-4 sm:grid-cols-2'>
      <div className='w-full h-auto p-4 flex flex-col items-center justify-center border rounded-lg'>
      <CountUp
          start={0}
          end={1000}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={0}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} className=' text-xl font-bold '/>+
            </div>
          )}
        </CountUp>
        <span>
          Active Organizations
        </span>
      </div>
      <div className='w-full h-auto p-4 flex flex-col items-center justify-center border rounded-lg'>
      <CountUp
          start={0}
          end={1000}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={0}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} className=' text-xl font-bold '/>+
            </div>
          )}
        </CountUp>
        <span>
        Document Holders
        </span>
      </div>
      <div className='w-full h-auto p-4 flex flex-col items-center justify-center border rounded-lg'>
      <CountUp
          start={0}
          end={1000}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={0}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} className=' text-xl font-bold '/>+
            </div>
          )}
        </CountUp>
        <span>
        Integrity Guardian
        </span>
      </div>
      <div className='w-full h-auto p-4 flex flex-col items-center justify-center border rounded-lg'>
      <CountUp
          start={0}
          end={1000}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={0}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} className=' text-xl font-bold '/>+
            </div>
          )}
        </CountUp>
        <span>
          DVT Token Minted
        </span>
      </div>
      </div>
    </div>
  )
}

export default ActivityCounter
