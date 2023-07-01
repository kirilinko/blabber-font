import React, { useState, useEffect } from 'react';
import { HiChevronDoubleLeft, HiSearch } from "react-icons/hi";
import picture from '../../assets/user.png';
import '../../assets/css/Style_groupe7.css'
import axios from 'axios';

const Contact_blocked = () => {

  const [datacontact, setDatacontact] = useState([]);
  const [datau, setDatau] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2ODgxMzk0NDksImV4cCI6MTY5MDczMTQ0OSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjY0OWVmNWUzMDRhZDc4ZGE3OTk4M2U0YiIsImp0aSI6IjM1ODBkNTUxLWI2MmMtNDEzYy04MzcwLTFiNjZjNzUwZTVkZCJ9.awLZrBEvfVLtSitxxrET9hga4S6uCNcaoP6Uvae8N4s';
  const config = { headers: { Authorization: `${token}` } };
  var position, blocked;
  var CurrentUser = '649ef5e304ad78da79983e4b';

  useEffect(() => {
    axios.get(`http://localhost:3030/contacts`, config)
      .then(response => {
        const data = response.data;
        setDatacontact(data);
        console.log(data);
      })
      .catch(error => {
        // Gestion des erreurs
      });

  }, []);

  function handleClick(event) {
    var idcontact = event.target.getAttribute('data-id');
    console.log("Click effectué !" + idcontact);
    if (position == 1) {
      axios.patch(`http://localhost:3030/contacts/${idcontact}`, { "blockedUser1": false }, config)
        .then(response => {
          console.log(response.data);
          let updatedData = [...datacontact.data];
          let indexObj = updatedData.findIndex(objet => objet._id === idcontact);
          updatedData.splice(indexObj, 1);
          setDatacontact(prevDatacontact => ({ ...prevDatacontact, data: updatedData }));
        });
    } else {
      axios.patch(`http://localhost:3030/contacts/${idcontact}`, { "blockedUser2": false }, config)
        .then(response => {
          console.log(response.data);
          let updatedData = [...datacontact.data];
          let indexObj = updatedData.findIndex(objet => objet._id === idcontact);
          updatedData.splice(indexObj, 1);
          setDatacontact(prevDatacontact => ({ ...prevDatacontact, data: updatedData }));
        });
    }
  }

  return (
    <div>
      <div className='title-contact'>
        <div className='flex items-center mb-4'>
          <HiChevronDoubleLeft className='mr-2' />
          <span>Contact Bloqués</span>
        </div>
      </div>
      <hr />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4'>
        <form className='mt-4 mb-4 relative rounded-full overflow-hidden '>
          <input type='text' placeholder="Recherche" className='cicle-field py-2 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 ' />
          <button className='absolute top-1 right-20 text-xl z-10 px-4 py-2 rounded-full text-black'>
            <HiSearch />
          </button>
        </form>
        <div>
          {datacontact.data && datacontact.data.map(contact => {
            if (contact.userId1 == CurrentUser) {
              blocked = contact.blockedUser1;
              position = 1;
            } else {
              blocked = contact.blockedUser2;
              position = 2;
            }

            if (blocked) {
              return (
                <div className='flex flex-wrap mx-3 mb-3 mt-4' key={contact._id}>
                  <div className='w-3/4'>
                    <div className='flex flex-wrap'>
                      <div className='w-auto'>
                        <img src={picture} className="rounded-full object-cover h-12 w-12 border-2 border-gray-300" />
                      </div>
                      <div className='w-auto flex items-center justify-end'>
                        {position == 1 ? (
                          <div className='ml-4'>{contact.user2.firstname} {contact.user2.lastname}<br /> Salut, j'utilise blabber !</div>
                        ) : (
                            <div className='ml-4'>{contact.user1.firstname} {contact.user1.lastname}<br /> Salut, j'utilise blabber aussi !</div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className='w-1/4 mx-auto'>
                    <button data-id={contact._id} onClick={handleClick} id='unlocked' className='px-4 py-2 rounded btn-unlock'>
                      Débloquer
                     </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact_blocked;
