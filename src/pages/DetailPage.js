import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams  } from 'react-router-dom'

import ArchiveButton from '../components/ArchiveButton'
import DetailCard from '../components/DetailCard'

function DetailPage() {

    let params = useParams()
    const id = Number(params.id)

    const [details, setDetails] = useState([])
    const [flag, setFlag] = useState(false)
    const [txt, setTxt] = useState('')

    const getData = async () => {
        await axios.get(`https://aircall-job.herokuapp.com/activities/${id}`)
            .then((response) => {
                setDetails(response.data)
                setFlag(response.data.is_archived)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const archiveCall = async () => {
        await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
                is_archived: !flag
            })
            .then((response) => {
                console.log(response)
                setFlag(prevFlag => !prevFlag)
            })
            .catch((error) => {
                if (error.response) {
                    //response status is an error code
                    console.log(error.response.status);
                }
                else if (error.request) {
                    //response not received though the request was sent
                    console.log(error.request);
                }
                else {
                    //an error occurred when setting up the request
                    console.log(error.message);
                }
            })
    }

    useEffect(() => {
        getData()
        if (flag === true) {
            setTxt(prev => 'Unarchive Call')
        } else {
            setTxt(prev => 'Archive Call')
        }
    }, [flag, txt])

    return (
        <>
            <DetailCard details={details} />
            <ArchiveButton onPress={archiveCall} text={txt}/>
        </>
    )
}

export default DetailPage