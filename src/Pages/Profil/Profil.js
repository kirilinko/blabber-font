import React from 'react';
import logo from '../../Ressources/Logo.png';
import picture from '../../Ressources/user.png';
import '../Css/Style.css'

class Profil extends React.Component {
    render() {
      return (
        <div className='font-text'>
            <div className='mt-2'>
                <img src={logo} width={200} className='nav-logo' /> <hr/>
            </div>
            <div className='row'>
                <div className='col-3 side-bar '>
                    <div className='mb-4 d-flex justify-content-end'>
                         <button className='ml-auto btn-side-bar'>
                           <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                        </button> 
                    </div>
                    <div className='container'>

                        <div className='row mb-4'>
                            <div className='col-9'>
                            <i class="fa fa-commenting" aria-hidden="true"></i>  Disscutions
                            </div>
                            <div className='col-3'>
                              100+
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-1'>
                            </div>
                            <div className='col-8'>
                             Disscutions Archivées
                            </div>
                            <div className='col-3'> 
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-9'>
                            <i class="fa fa-list-alt" aria-hidden="true"></i> Contact
                            </div>
                            <div className='col-3'>
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-1'>
                            </div>
                            <div className='col-9'>
                             Contact bloquées
                            </div>
                            <div className='col-3'>
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-9'>
                            <i class="fa fa-user-plus" aria-hidden="true"></i> Mes demandes
                            </div>
                            <div className='col-3'>
                              100+
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-9'>
                            <i class="fa fa-users" aria-hidden="true"></i> Découvrir du monde
                            </div>
                            <div className='col-3'>  
                            </div>
                        </div>

                        <hr/>

                        <div className='row mb-4'>
                            <div className='col-9'>
                            <i class="fa fa-user-circle" aria-hidden="true"></i> Profil
                            </div>
                            <div className='col-3'>
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-1'>
                            </div>
                            <div className='col-8'>
                             Mot de passe
                            </div>
                            <div className='col-3'>
                            </div>
                        </div>

                        <div className='row mb-4'>
                            <div className='col-8 text-danger'>
                            <i class="fa fa-sign-out" aria-hidden="true"></i> Deconnexion
                            </div>
                            <div className='col-3'>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-9'>
                    <div className='container'>
                       <div className='title-contact'>
                         <i  className='fa fa-chevron-left px-3' aria-hidden="true"></i>     
                          Contact Bloqués 
                       </div>
                    </div>
                    <hr/>
                    <div className=' container mb-4'>
                        <form className='mt-4 mb-4'>
                            <input type='text' placeholder="Recherche" className='cicle-field form-control '/>
                        </form>

                        <div>
                            <div className='row mb-3 mt-4'>
                             <div className='col-8'>
                                <div className='row'>
                                    <div className='col-auto'>
                                       <img src={picture} width={60} className="img-thumbnail rounded-circle"/>
                                    </div>
                                    <div className='col-auto align-self-center text-right'>
                                        <div> Abdias Prudmars  </div>
                                        <span> Salut, j'utilise blabber ! </span> 
                                    </div>
                                </div>
                             </div>
                        
                             <div className='col-3 align-self-center'>
                                <button className='btn btn-primary'>
                                  Débloquer
                                </button>
                             </div>
                            </div>

                            <div className='row mb-3'>
                             <div className='col-8'>
                                <div className='row'>
                                    <div className='col-auto'>
                                       <img src={picture} width={60} className="img-thumbnail rounded-circle"/>
                                    </div>
                                    <div className='col-auto align-self-center text-right'>
                                        <div> Abdias Prudmars  </div>
                                        <span> Salut, j'utilise blabber ! </span> 
                                    </div>
                                </div>
                             </div>
                        
                             <div className='col-3 align-self-center'>
                                <button className='btn btn-primary'>
                                  Débloquer
                                </button>
                             </div>
                            </div>

                            <div className='row mb-3'>
                             <div className='col-8'>
                                <div className='row'>
                                    <div className='col-auto'>
                                       <img src={picture} width={60} className="img-thumbnail rounded-circle"/>
                                    </div>
                                    <div className='col-auto align-self-center text-right'>
                                        <div> Abdias Prudmars  </div>
                                        <span> Salut, j'utilise blabber ! </span> 
                                    </div>
                                </div>
                             </div>
                        
                             <div className='col-3 align-self-center'>
                                <button className='btn btn-primary'>
                                  Débloquer
                                </button>
                             </div>
                            </div>

                            <div className='row mb-3'>
                             <div className='col-8'>
                                <div className='row'>
                                    <div className='col-auto'>
                                       <img src={picture} width={60} className="img-thumbnail rounded-circle"/>
                                    </div>
                                    <div className='col-auto align-self-center text-right'>
                                        <div> Abdias Prudmars  </div>
                                        <span> Salut, j'utilise blabber ! </span> 
                                    </div>
                                </div>
                             </div>
                        
                             <div className='col-3 align-self-center'>
                                <button className='btn btn-primary'>
                                  Débloquer
                                </button>
                             </div>
                            </div>

                            <div className='row mb-3'>
                             <div className='col-8'>
                                <div className='row'>
                                    <div className='col-auto'>
                                       <img src={picture} width={60} className="img-thumbnail rounded-circle"/>
                                    </div>
                                    <div className='col-auto align-self-center text-right'>
                                        <div> Abdias Prudmars  </div>
                                        <span> Salut, j'utilise blabber ! </span> 
                                    </div>
                                </div>
                             </div>
                        
                             <div className='col-4 align-self-center'>
                                <button className='btn btn-primary'>
                                  Débloquer
                                </button>
                             </div>
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