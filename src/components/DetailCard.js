import React from 'react'
import { motion } from 'framer-motion'

function DetailCard( {details } ) {

    const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric', hour12: true }
    const dateString = new Date(details.created_at).toLocaleDateString(undefined, options)
    const [month, year, time] = dateString.split(',');

    return (
        <>
            <motion.div className="relative"
                initial={{ y: 50, opacity: 0}}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}>
                <div className="bg-white/40 backdrop-blur-md shadow-md rounded-lg px-3 py-4 my-2">
                    <div className="divide-y divide-dashed divide-gray-500 mx-4">
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
                            <p className="text-xl">{details.from}</p>
                        </div>

                        <div className="space-y-4 py-4 text-sm">
                            <p className="text-left font-semibold">{month + ' ' + year}</p>
                            <div className="flex justify-between">
                                <div className="flex space-x-4">
                                    <p className="text-left font-semibold">{time}</p>
                                    { details.direction === "inbound" ? <p className="text-left">Incoming Call</p>
                                    : <p className="text-left">Outgoing Call</p> }
                                </div>
                                <p className="">{details.duration} seconds</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4 py-4 text-sm">
                                <p className="font-semibold">To: <span className="font-normal">{details.to || "unknown"}</span></p>
                                <p className="font-semibold">Via: <span className="font-normal">{details.via}</span></p>
                                <p className="font-semibold">Call Type: <span className="font-normal">{details.call_type}</span></p>
                        </div>

                        <div className="py-4 text-sm flex space-x-2">
                            <p className="font-semibold">Status: </p>
                            { details.is_archived === false ? <p className="text-green-700">Unarchived</p> : <p className="text-red-700">Archived</p>}
                        </div>
                    </div>
                </div>
            </motion.div> 
        </>
  )
}

export default DetailCard