import React from 'react'
import issuer from "../../assets/issuer.png"
import holder from "../../assets/holder.png"
import verifier from "../../assets/verifier.png"
const PlatformInfo = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-4 py-8'>
      <div className='grid grid-cols-1 w-5/6 border rounded-lg  xl:grid-cols-2 items-center gap-6'>
        <div>
            <img src={issuer} alt="issuer" className='w-full max-w-2xl'/> 
        </div>
        <div className='"flex justify-center items-center w-full'>
            <h1 className='text-start text-2xl sm:text-3xl lg:text-4xl font-bold pl-12'>
                Issuer
            </h1>
            <p className='text-base sm:text-sm lg:text-xl max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas delectus quo, nemo dolorum mollitia. Enim obcaecati quia voluptatibus rem, nisi, temporibus reiciendis iste quas fugit delectus mollitia quam eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta repellat libero fugiat blanditiis possimus accusamus perspiciatis quos adipisci quaerat eveniet iste eos at, labore unde consequatur perferendis, incidunt laboriosam.</p>
        </div>
        
      </div>
      <div className='grid grid-cols-1 w-5/6 border rounded-lg  xl:grid-cols-2 items-center gap-6'>
      <div className='"flex justify-center items-center w-full'>
            <h1 className='text-start text-2xl  sm:text-3xl lg:text-4xl font-bold pl-12'>
                Holder
            </h1>
            <p className='text-base sm:text-sm lg:text-xl max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas delectus quo, nemo dolorum mollitia. Enim obcaecati quia voluptatibus rem, nisi, temporibus reiciendis iste quas fugit delectus mollitia quam eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta repellat libero fugiat blanditiis possimus accusamus perspiciatis quos adipisci quaerat eveniet iste eos at, labore unde consequatur perferendis, incidunt laboriosam.</p>
        </div>
        <div>
            <img src={holder} alt="issuer" className='w-full max-w-2xl'/> 
        </div>
        
      </div>
      <div className='grid grid-cols-1 w-5/6 border rounded-lg  xl:grid-cols-2 items-center gap-6'>
        <div>
            <img src={verifier} alt="issuer" className='w-full max-w-2xl'/> 
        </div>
        <div className='"flex justify-center items-center w-full'>
            <h1 className='text-start text-2xl sm:text-3xl lg:text-4xl font-bold pl-12'>
                Verifier
            </h1>
            <p className='text-base sm:text-sm lg:text-xl max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas delectus quo, nemo dolorum mollitia. Enim obcaecati quia voluptatibus rem, nisi, temporibus reiciendis iste quas fugit delectus mollitia quam eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta repellat libero fugiat blanditiis possimus accusamus perspiciatis quos adipisci quaerat eveniet iste eos at, labore unde consequatur perferendis, incidunt laboriosam.</p>
        </div>
        
      </div>
    </div>
  )
}

export default PlatformInfo
