import './Footer.css';

function Footer() {
  return (
    <div className='d-flex felx-wrap justify-content-around   text-center text-white p-5 fs-4 footer'>
      <div>
        <p>Consumer Policy
        </p>
          <ul className=''>
          <li className=''><a rel="stylesheet" href="" >Return Policy</a></li>
          <li><a rel="stylesheet" href="" >Terms of Use</a></li>
          <li><a rel="stylesheet" href="" >Security</a></li>
          <li><a rel="stylesheet" href="" >Privacy</a></li>
           
            
          </ul>
        
      </div>
      <div>
      <p>Social</p>
      <ul>
        <li><a href="" >Facebook</a></li>
        <li><a href="" >Twitter</a></li>
        <li><a href="" >Instagram</a></li>
        <li><a href="" >Youtube</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Footer