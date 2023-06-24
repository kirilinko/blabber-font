import React from 'react';
import { HiChevronDoubleLeft, HiSearch } from "react-icons/hi";
import picture from '../../assets/user.png';

class Contact_blocked extends React.Component {
    render() {
         
        require('../../assets/css/Style_groupe7.css')
      return (
        <div  >         
        <div className='title-contact'>
          <div className='flex items-center mb-4'>
             <HiChevronDoubleLeft className='mr-2' />
             <span>Contact Bloqués</span>
          </div>

        </div>
         <hr/>
         <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4'>
             <form className='mt-4 mb-4 relative rounded-full overflow-hidden '>
                 <input type='text' placeholder="Recherche" className='cicle-field py-2 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 '/>
                 <button className='absolute top-1 right-20 text-xl z-10 px-4 py-2 rounded-full text-black'>
                   <HiSearch/>
                 </button>   
             </form>
             <div>
                 <div className='flex flex-wrap mx-3 mb-3 mt-4'>
                  <div className='w-3/4'>
                     <div className='flex flex-wrap'>
                         <div className='w-auto'>
                            <img src={picture} className="rounded-full object-cover h-12 w-12 border-2 border-gray-300"/>
                         </div>
                         <div className='w-auto flex items-center justify-end'>
                             <div className='ml-4'> Abdias Prudmars<br/> Salut, j'utilise blabber !</div>
                         </div>
                     </div>
                  </div>
             
                  <div className='w-1/4 mx-auto'>
                     <button className='px-4 py-2 rounded btn-unlock'>
                       Débloquer
                     </button>
                  </div>
                 </div>

                 <div className='flex flex-wrap mx-3 mb-3 mt-4'>
                  <div className='w-3/4'>
                     <div className='flex flex-wrap'>
                         <div className='w-auto'>
                            <img src={picture} className="rounded-full object-cover h-12 w-12 border-2 border-gray-300"/>
                         </div>
                         <div className='w-auto flex items-center justify-end'>
                             <div className='ml-4'> Abdias Prudmars<br/> Salut, j'utilise blabber !</div>
                         </div>
                     </div>
                  </div>
             
                  <div className='w-1/4 mx-auto'>
                     <button className='px-4 py-2 rounded btn-unlock'>
                       Débloquer
                     </button>
                  </div>
                 </div>

                 <div className='flex flex-wrap mx-3 mb-3 mt-4'>
                  <div className='w-3/4'>
                     <div className='flex flex-wrap'>
                         <div className='w-auto'>
                            <img src={picture} className="rounded-full object-cover h-12 w-12 border-2 border-gray-300"/>
                         </div>
                         <div className='w-auto flex items-center justify-end'>
                             <div className='ml-4'> Abdias Prudmars<br/> Salut, j'utilise blabber !</div>
                         </div>
                     </div>
                  </div>
             
                  <div className='w-1/4 mx-auto'>
                     <button className='px-4 py-2 rounded btn-unlock'>
                       Débloquer
                     </button>
                  </div>
                 </div>

                 <div className='flex flex-wrap mx-3 mb-3 mt-4'>
                  <div className='w-3/4'>
                     <div className='flex flex-wrap'>
                         <div className='w-auto'>
                            <img src={picture} className="rounded-full object-cover h-12 w-12 border-2 border-gray-300"/>
                         </div>
                         <div className='w-auto flex items-center justify-end'>
                             <div className='ml-4'> Abdias Prudmars<br/> Salut, j'utilise blabber !</div>
                         </div>
                     </div>
                  </div>
             
                  <div className='w-1/4 mx-auto'>
                     <button className='px-4 py-2 rounded btn-unlock'>
                       Débloquer
                     </button>
                  </div>
                 </div>

                 <div className='flex flex-wrap mx-3 mb-3 mt-4'>
                  <div className='w-3/4'>
                     <div className='flex flex-wrap'>
                         <div className='w-auto'>
                            <img src={picture} className="rounded-full object-cover h-12 w-12 border-2 border-gray-300"/>
                         </div>
                         <div className='w-auto flex items-center justify-end'>
                             <div className='ml-4'> Abdias Prudmars<br/> Salut, j'utilise blabber !</div>
                         </div>
                     </div>
                  </div>
             
                  <div className='w-1/4 mx-auto'>
                     <button className='px-4 py-2 rounded btn-unlock'>
                       Débloquer
                     </button>
                  </div>
                 </div>
             </div>
         </div>
     </div>
      );
    }
  }
  
  export default Contact_blocked;