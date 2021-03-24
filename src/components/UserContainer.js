import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userAction'

function UserContainer({userData,fetchUsers}) {
    useEffect(()=>{
      fetchUsers()
      console.log(userData)
    },[])
    return (
        userData.loading ? 
        (<h2>LOading</h2>) :
        userData.error ? 
        (<h2>{userData.error}</h2>) : (
            <div>
                {
                    userData && userData.users && userData.users.map(user=><p>{user.name}</p>)
                }
            </div>
        )


    )
}

const mapStateToProps = state=>{
    console.log(state)
    return {
        userData : state.user
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        fetchUsers : ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
