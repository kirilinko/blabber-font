
import React from 'react';
import logo from '../assets/Logo.png';
import locker from '../assets/lock-lock.png';
import fooz from '../assets/fooz.png';


class Renitialisation extends React.Component {
    render() {
         require('../assets/css/bootstrap.min.css')
         require('../assets/css/Style_groupe7.css')
      return (
        <div className='container font-text mt-4 mb-4'>
            <div className=''><img src={logo} /></div>
            <div className='container mt-4 box-container-left ' >
              <div className='row mt-4'>
                <div className='col-sm-6'>
                    <div className='mb-4 title'>Rénitialisation du<br/> mot de passe</div>
                    <p className='mt-4 under-title'>
                     Indiquer votre email, et vous recevrez un email<br/>
                     comportant un lien de rénitialisationde votre mot de<br/>
                     passe. Si vous ne le voyez pas, consultez vos spams.</p> 
                    <form className=' mt-4'>
                     <div className='row'>
                          <div className='mb-3'>
                              <input  type='email' className='form-field form-control' placeholder='Adresse email'/>
                          </div>
                          <div className='mb-3'>
                               <button className='btn from-btn-b'>
                                  Envoyer le lien de rénitialisation  
                                </button>
                          </div>
                      </div> 
                    </form>
                </div>
                <div className='col-sm-6 d-none d-sm-block '>
                  <img src={fooz} className='position-absolute top-0 end-0'/>
                  <img src={locker} width={500}  />
                </div>

              </div>
            </div>
             
        </div>
      );
    }
  }
  
  export default Renitialisation;