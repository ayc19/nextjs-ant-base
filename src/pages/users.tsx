import axios from 'axios'

import User from '../components/user';

export default function UsersList(props: any) {
    console.log(props)
    return (
        <div>
            <h1>Users List</h1>
            {
                props.users.map((user: any) => {
                    return <User key={user.id} user={user}/>
                }) 
            }
        </div>
    )
}

export async function getStaticProps() {
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    const data = response.data;
    console.log('data   ', data)
    return {
        props: {
            users: response.data
        }
    }
}