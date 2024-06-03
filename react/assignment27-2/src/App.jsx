import Test1 from './test1/Test1'
import './App.css'

function App() {
   let p1={title:'News App using ReactJS (Parsing XML RSS feed to JSON)',description:'News App using ReactJS (Parsing XML to JSON) Photo by Christina Morillo from PexelsLive Demo:',place:'Mehul Kothari',date:'Aug 12, 2020 4:32',image:'https://assignment-27-2.netlify.app/assets/laptop-aAsHsUaD.png'}
  let p2={title:'Medium Like Blogging App Using Angular 9 and Firebase',description:'Creating a Medium-Like App using Angular 9 and Firebase Photo by Miguel Padriåån from PexelsLive Demo:',place:'Mehul Kothari',date:'Jun 10, 2020 10:59',image:'https://assignment-27-2.netlify.app/assets/blog-CqqSHdof.png'}
  let p3={title:'COVOID 19 Tracker (Statistics) app using Angular',description:'COVID 19 Tracker (Statistics) app using Angular Dark Mode Introduction Everyone is aware',place:'Mehul Kothari',date:'Apr 04, 2020 08:46',image:'https://assignment-27-2.netlify.app/assets/india-FBQ1j19I.png'}
  
  return (
    <>
      <div>
      <nav className="nav1">
    <ul className="logotext"><img className="logo" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='82'%20height='40'%20fill='none'%20viewBox='0%200%2082%2040'%3e%3cpath%20fill='%23FFD43D'%20d='M73.365%2019.71c0%202.904-2.241%205.31-5.27%205.31-3.03%200-5.228-2.406-5.228-5.31%200-2.905%202.199-5.312%205.228-5.312s5.27%202.407%205.27%205.311Z'%3e%3c/path%3e%3cpath%20fill='%23FF0C81'%20d='M48.764%2019.544c0%202.946-2.323%205.145-5.27%205.145-2.904%200-5.227-2.2-5.227-5.145%200-2.947%202.323-5.104%205.228-5.104%202.946%200%205.27%202.158%205.27%205.104Z'%3e%3c/path%3e%3cpath%20fill='%2311EEFC'%20d='M20.074%2025.02c3.029%200%205.27-2.406%205.27-5.31%200-2.905-2.241-5.312-5.27-5.312-3.03%200-5.228%202.407-5.228%205.311%200%202.905%202.199%205.312%205.228%205.312Z'%3e%3c/path%3e%3cpath%20fill='%23171A26'%20d='M68.095%2030.54c-6.307%200-11.12-4.897-11.12-10.872%200-5.934%204.855-10.83%2011.12-10.83%206.349%200%2011.162%204.938%2011.162%2010.83%200%205.975-4.855%2010.871-11.162%2010.871Zm0-5.52c3.03%200%205.27-2.406%205.27-5.31%200-2.905-2.24-5.312-5.27-5.312-3.029%200-5.228%202.407-5.228%205.311%200%202.905%202.199%205.312%205.228%205.312ZM43.08%2040c-4.813%200-8.506-2.116-10.373-5.934l4.896-2.655c.913%201.784%202.614%203.195%205.394%203.195%203.486%200%205.85-2.448%205.85-6.473v-.374c-1.12%201.411-3.111%202.49-6.016%202.49-5.768%200-10.373-4.481-10.373-10.581%200-5.934%204.813-10.788%2011.12-10.788%206.431%200%2011.162%204.605%2011.162%2010.788v8.299C54.74%2035.27%2049.76%2040%2043.08%2040Zm.415-15.311c2.946%200%205.27-2.2%205.27-5.145%200-2.947-2.324-5.104-5.27-5.104-2.905%200-5.228%202.158-5.228%205.104s2.323%205.145%205.228%205.145ZM20.074%2030.54c-6.307%200-11.12-4.897-11.12-10.872%200-5.934%204.854-10.83%2011.12-10.83%206.348%200%2011.162%204.938%2011.162%2010.83%200%205.975-4.855%2010.871-11.162%2010.871Zm0-5.52c3.029%200%205.27-2.406%205.27-5.31%200-2.905-2.241-5.312-5.27-5.312-3.03%200-5.228%202.407-5.228%205.311%200%202.905%202.199%205.312%205.228%205.312ZM0%200h5.892v30H0V0ZM82%206.5a2.5%202.5%200%201%201-5%200%202.5%202.5%200%200%201%205%200Z'%3e%3c/path%3e%3c/svg%3e" alt="" />
    <li className="logotext">Home</li>
    <li className="logotext">About Author </li>
    <li className="logotext">AboutThisProject</li></ul>
    
    <ul className="home">
    <a href="#"><img className="icons" src="https://assignment-27-2.netlify.app/assets/github-STkYSTmQ.png" alt="" /></a>
    <a href="#"><img className="icons" src="https://assignment-27-2.netlify.app/assets/linkedin-CcmMoA9I.png" alt="" /></a>
     <a href="#"><img className="icons"src="https://assignment-27-2.netlify.app/assets/instagram-CMrTkHsz.png" alt="" /></a>
    </ul>
  </nav>
  <div className="cards" ></div>
  <Test1 x={p1}/>
   <Test1 x={p2}/>
    <Test1 x={p3}/>
      </div>
      
    </>
  )
}

export default App
