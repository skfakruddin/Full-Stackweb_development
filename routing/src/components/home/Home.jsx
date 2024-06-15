import img1 from '../../assets/download.jpeg'
import { usersContext } from '../../contexts/usersContext';
import { sampleContext } from '../../contexts/testContext';
import {useContext} from 'react';

function Home(){
    let {a,setA}=useContext(sampleContext)
    let { users,setUsers } = useContext(usersContext);
    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            <h2>{a}</h2>
            <button className='btn btn-primary' onClick={()=>setA(a+1)}>change A</button>
            <h2>{users[0].name}</h2>
            <img src={img1} width='500px' className='p-1 rounded-pill' alt="" />
            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quaerat natus, illo recusandae aut harum deleniti, quidem sit ducimus corporis accusamus exercitationem iusto tempora quos laborum, cupiditate esse cum ipsum doloremque nemo dignissimos! Non, molestiae! Hic, consectetur modi minima fuga magni fugit in voluptates! Officiis veniam eum eius reprehenderit fugit harum repellat, delectus atque consequuntur aliquid maxime, quas esse sit quasi facilis dolorum molestias mollitia incidunt fugiat ullam? Amet odio accusamus rerum id? Iusto distinctio officia accusamus corporis totam quaerat asperiores! Quisquam cupiditate, voluptate natus eos perferendis nobis qui culpa eligendi nostrum officiis dolorem consequuntur magnam assumenda voluptas deleniti aut?</p>
        </div>
    )
}

export default Home;
