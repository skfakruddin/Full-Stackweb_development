import './App.css';
import Test1 from './test1/Test1'
function App(){
  
 let person1={,name:'Sonu',age:'Age:21',image:'data:image/jpeg;base64,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'}
 let person2={name:'Haary',age:'Age:31',image:'data:image/jpeg;base64,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'}
 let person3={name:'Riana',age:'Age:27', image:'data:image/jpeg;base64,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'}
 let person4={name:'Swilder',age:'Age:34',image:'data:image/png;base64,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'}
 let person5={name:'David',age:'Age:41',image:'data:image/jpeg;base64,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'}
 let person6={name:'Sita',age:'Age:19',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg2HnWEdJ-YPa3LJxZuHE3Lcg8ww4RkaonA&s'}
  let person7={name:'Gita',age:'Age:14',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3DN0AlsEKCoM8HLdIdoTf4tZnRoHafw8Xg&s'}
  let person8={name:'Ramu',age:'Age:24',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIU19adaWvDMAl3QpetxRc58LpzDMpFG7PQ&s'}
 
return(
  <div>
    <nav className="nav1">
    <ul><img className="logo" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='82'%20height='40'%20fill='none'%20viewBox='0%200%2082%2040'%3e%3cpath%20fill='%23FFD43D'%20d='M73.365%2019.71c0%202.904-2.241%205.31-5.27%205.31-3.03%200-5.228-2.406-5.228-5.31%200-2.905%202.199-5.312%205.228-5.312s5.27%202.407%205.27%205.311Z'%3e%3c/path%3e%3cpath%20fill='%23FF0C81'%20d='M48.764%2019.544c0%202.946-2.323%205.145-5.27%205.145-2.904%200-5.227-2.2-5.227-5.145%200-2.947%202.323-5.104%205.228-5.104%202.946%200%205.27%202.158%205.27%205.104Z'%3e%3c/path%3e%3cpath%20fill='%2311EEFC'%20d='M20.074%2025.02c3.029%200%205.27-2.406%205.27-5.31%200-2.905-2.241-5.312-5.27-5.312-3.03%200-5.228%202.407-5.228%205.311%200%202.905%202.199%205.312%205.228%205.312Z'%3e%3c/path%3e%3cpath%20fill='%23171A26'%20d='M68.095%2030.54c-6.307%200-11.12-4.897-11.12-10.872%200-5.934%204.855-10.83%2011.12-10.83%206.349%200%2011.162%204.938%2011.162%2010.83%200%205.975-4.855%2010.871-11.162%2010.871Zm0-5.52c3.03%200%205.27-2.406%205.27-5.31%200-2.905-2.24-5.312-5.27-5.312-3.029%200-5.228%202.407-5.228%205.311%200%202.905%202.199%205.312%205.228%205.312ZM43.08%2040c-4.813%200-8.506-2.116-10.373-5.934l4.896-2.655c.913%201.784%202.614%203.195%205.394%203.195%203.486%200%205.85-2.448%205.85-6.473v-.374c-1.12%201.411-3.111%202.49-6.016%202.49-5.768%200-10.373-4.481-10.373-10.581%200-5.934%204.813-10.788%2011.12-10.788%206.431%200%2011.162%204.605%2011.162%2010.788v8.299C54.74%2035.27%2049.76%2040%2043.08%2040Zm.415-15.311c2.946%200%205.27-2.2%205.27-5.145%200-2.947-2.324-5.104-5.27-5.104-2.905%200-5.228%202.158-5.228%205.104s2.323%205.145%205.228%205.145ZM20.074%2030.54c-6.307%200-11.12-4.897-11.12-10.872%200-5.934%204.854-10.83%2011.12-10.83%206.348%200%2011.162%204.938%2011.162%2010.83%200%205.975-4.855%2010.871-11.162%2010.871Zm0-5.52c3.029%200%205.27-2.406%205.27-5.31%200-2.905-2.241-5.312-5.27-5.312-3.03%200-5.228%202.407-5.228%205.311%200%202.905%202.199%205.312%205.228%205.312ZM0%200h5.892v30H0V0ZM82%206.5a2.5%202.5%200%201%201-5%200%202.5%202.5%200%200%201%205%200Z'%3e%3c/path%3e%3c/svg%3e" alt="" /></ul>
    <ul className="home">
     <a href="#"><li>Home</li></a>
    <a href="#"><li>Sign up</li></a>
    <a href="#"><li>login</li></a>
    </ul>
  </nav>
    <div className="cards">

   <Test1 x={person1}/>
   <Test1 x={person2}/>
    <Test1 x={person3}/>
    <Test1 x={person4}/>
    <Test1 x={person5}/>
    <Test1 x={person6}/>
    <Test1 x={person7}/>
    <Test1 x={person8}/>
    </div>
    <nav className="bignav">
  <nav className="nav2">
  <ul className="home1">
     <a href="#"><li>Home</li></a>
    <a href="#"><li>Sign up</li></a>
    <a href="#"><li>login</li></a>
    </ul>
  </nav>
  <nav className="nav2">
  <ul className="home1">
     <a href="#"><li>About Us</li></a>
    <a href="#"><li>Contact Us</li></a>
    <a href="#"><li>Privacy Policy</li></a>
    </ul>
  </nav>
  </nav>
  </div>
)
  
}
export default App;

