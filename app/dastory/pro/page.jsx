import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'
import { PiCoffeeThin } from "react-icons/pi";
import { CiMobile4 } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";


function page (){
  return (
    <div className='relative top-20'>
       <div className='lg:my-10 p-3.5'>
      <div className='md:mt-0 mt-3' />
      
      <section className='flex flex-col justify-center items-center'>
        
        <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
             <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] text-[#7f88e8]'>101동(고시텔)</div>
          <hr className="mt-1 h-0.5 md:bg-[#7f88e8] bg-white border-t-0 bg-neutral-700 opacity-100 w-[120px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[980px]"/>
       </div>
       </div>
       </div>

        <div className='flex flex-col'>
          <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center md:text-[20px] text-[15px] text-[#222222]'>[ 강원도 춘천시 효자동 174-1 ]</div>
       </div>
       </div>
       </div>

        <div className='md:mt-7'/>
              <div className="w-full md:w-[1100px] flex flex-col items-center justify-center">
                             
                              <div className='md:mt-6 mt-3' />
                           
                               <a href="tel:010-3896-0696" className="w-full md:w-[1100px] md:h-[70px] h-[45px] flex flex-row lg:px-8 md:pl-0 pl-3 items-center md:justify-center justify-start border-1 border-[#d9d8d8] gap-2">
                                 <CiMobile4 className='text-[#7f88e8] text-[23px]' />
                                 <span className="md:text-[18px] text-[15px] text-[#7f88e8]">
                                   입실문의&nbsp;010-8799-5999&nbsp;[클릭연결]&nbsp;▶▶▶
                                 </span>
                             </a>   
             
             
                              <div className='md:mt-3 mt-0' />
             
                                <a href="tel:033-251-4900" className="w-full md:w-[1100px] md:h-[70px] h-[45px] flex flex-row lg:px-8 md:pl-0 pl-3 items-center md:justify-center justify-start border-1 border-[#d9d8d8] gap-2">
                                 <BsTelephone className='text-[#7f88e8] text-[23px]' />
                                 <span className="md:text-[18px] text-[15px] text-[#7f88e8]">
                                   입실문의&nbsp;033-251-4900&nbsp;[클릭연결]&nbsp;▶▶▶
                                 </span>
                             </a>   
                           </div>

                               <div className='mt-3' />

                             <a href="" className="bg-[#7f88e8] w-full md:w-[1100px] md:h-[70px] h-[45px] flex flex-row md:pl-0 pl-3 lg:px-8 items-center md:justify-center justify-start gap-2">
                                   <PiCoffeeThin className='text-white text-[23px]'/>
                                   <div className="text-white md:text-[18px] text-[15px]">
                                     밥.&nbsp;김치&nbsp;제공(고시텔&nbsp;-&nbsp;101동)
                                   </div>
                               </a>   
        <div className='mt-7'/>

        <div className='md:mt-8 mt-1' />
           {/* ---start--- */}  
                <section className='flex flex-col justify-center items-center'>
               
               
               
        
              

                  
                 {/* ---start--- */}
                     <section className='flex flex-col justify-center items-center'>
                       
                       <div className='flex flex-col'>
                       <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
                           <div className='lg:px-0 px-0 flex flex-col h-[0px] justify-end'>
                         
                         
                        </div>
                        </div>
                        </div>

          
                       
                        
                      
                 
                       <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                        <div className='md:mt-7 mt-1.5'/>
                 
                       <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                         <div className='md:mt-7 mt-1.5'/>
                 
                      <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                          <div className='md:mt-7 mt-1.5'/>


                         <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                          <div className='md:mt-7 mt-1.5'/>


                         <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                          <div className='md:mt-7 mt-1.5'/>
                 
                   
                        </section>
                 
                     {/* ---end--- */}  
         
                 
                
          
                 </section>
               {/* ---end--- */}  
     
      </section>
   
       <div className='mt-20'/>
       </div>
       <Footer />
    </div>   
  )
}

export default page
