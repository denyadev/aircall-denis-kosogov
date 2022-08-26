import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ActivityFeedCard from '../components/FeedCard'

import { ArchivedContext } from '../hooks/ArchivedContext'


function FeedPage() {

    const [activities, setActivities] = useState([])

    const { archived } = useContext(ArchivedContext)

    const getData = async () => {
        await axios.get(`https://aircall-job.herokuapp.com/activities`)
            .then((response) => {
                setActivities(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {/* <h1>{activities.length}</h1> */}

            {activities.map((activity) => {
                if (archived === "unarchived") {
                    if (activity.is_archived === false) {
                        return  <Link to={`${activity.id}`} key={activity.id}>
                                    <ActivityFeedCard activity={activity}/>
                                </Link>
                    }
                    return <div key={activity.id}></div>
                }
                return  <Link to={`${activity.id}`} key={activity.id}>
                            <ActivityFeedCard activity={activity}/>
                        </Link>
                }
            )}
        </>
    )
}

export default FeedPage