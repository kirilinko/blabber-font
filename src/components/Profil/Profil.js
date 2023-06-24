import React from 'react';
import { HiOutlinePencil,HiOutlineUserCircle, HiChatAlt } from "react-icons/hi";
import avatar from '../../assets/avatar.png';
import cover from '../../assets/cover.png'

class Profil extends React.Component {
    render() {
         
        require('../../assets/css/Style_groupe7.css')
      return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4'> 
            <div className='flex items-center justify-center relative'>        
               <div className='relative'>
                  <div className="w-[800px] mx-auto">
                     <img src={cover} className="rounded-20 cover-img" />  
                     <div className="absolute top-[85%] left-10 transform ">
                        <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white object-cover" />
                     </div>      
                  </div>
               </div> 
            </div>

            <div className="w-[800px] mx-auto">
              <div className="ml-40">
                 <div className="flex items-center justify-between">
                    <div>
                       <h4 className="text-xl font-bold mr-4">Jimmy Clinton</h4>
                       <p className="text-gray-500">jclinton ● 548 contacts</p>
                   </div>
                   <button className="px-4 py-2 rounded border-gray-800  border-2 text-black flex items-center btn-profil">
                       < HiOutlinePencil  /> Modifier
                   </button>
                 </div>
               </div>

           <div className='container mt-[18px]'>
              <div className=' grid grid-cols-2 '>
                  <div className='bg-gray-200 rounded-[10px]'>
                      <div className='grid grid-cols-2'>
                          <div className='  py-4  pl-[100px]'>
                             <div className=' bg-gray-300 rounded-full w-20 h-20 pl-[10px] pt-2'>
                                <HiOutlineUserCircle className='text-6xl' />
                             </div>
                          </div>
                          <div className='items-center pt-[30px] justify-between'>
                            <span className='font-bold'>Nombre de contact</span>
                                   <br/><span className='font-bold'>5200</span>
                          </div>
                      </div>
                  </div>
                 
                  <div className='bg-gray-200 rounded-[10px] ml-4'>
                      <div className='grid grid-cols-2'>
                          <div className='  py-4  pl-[100px]'>
                             <div className=' bg-gray-300 rounded-full w-20 h-20 pl-[10px] pt-2'>
                                <HiChatAlt className='text-6xl' />
                             </div>
                          </div>
                          <div className='items-center pt-[30px] justify-between'>
                            <span className='font-bold'>Message total</span>
                                   <br/><span className='font-bold'>246</span>
                          </div>
                      </div>
                  </div>
              </div>
              <h4 className="text-xl font-bold ">Groupe</h4>

              <div className='mt-4 bg-gray-200 px-2 py-2 rounded-[10px] pb-[18px] pl-[20px]'>
                <h4 className='text-xl font-bold'>Partage de l'europe</h4>
                <div className='grid grid-cols-4'>
                    <div className='mt-2'>
                       <p>Description</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div className='mt-2'>
                        <span>21 membres</span>
                    </div>
                </div>
              </div>

              <div className='mt-4 bg-gray-200 px-2 py-2 rounded-[10px] pb-[18px] pl-[20px] mb-4'>
                <h4 className='text-xl font-bold'>Partage de l'europe</h4>
                <div className='grid grid-cols-4'>
                    <div className='mt-2'>
                       <p>Description</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div className='mt-2'>
                        <span>21 membres</span>
                    </div>
                </div>
              </div>


           </div>
           </div>       
        </div>
      );
    }
  }
  
  export default Profil;