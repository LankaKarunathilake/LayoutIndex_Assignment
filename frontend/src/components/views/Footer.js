import React from 'react'

const Footer = () => {

  return (
    <div>
      <footer>
      <div className='container'>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="/deviceAdd" className="nav-link px-2 text-body-secondary">Device</a></li>
                <li className="nav-item"><a href="/locationAdd" className="nav-link px-2 text-body-secondary">Location</a></li>
                <li className="nav-item"><a href="locationList" className="nav-link px-2 text-body-secondary">Location List</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About Us</a></li>
                </ul>
                <p className="text-center text-body-secondary">Lanka Karunathilake</p>
            </footer>
        </div>
      </footer>
        
        

    </div>
  )
}


export default Footer