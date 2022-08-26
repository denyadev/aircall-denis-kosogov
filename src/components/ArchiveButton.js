import React from 'react'
import { motion } from 'framer-motion'

function ArchiveButton( { onPress, text } ) {
  return (
    <motion.button className="rounded-lg backdrop-blur-md shadow-md my-4 px-4 py-4 flex items-center space-x-2 bg-slate-100/80 hover:bg-white hover:scale-[101%]" onClick={onPress}
            initial={{ x: -150, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}>
        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.44 1.999l-.439-1.999h17.994l-.439 1.999h-17.116zm18.281 8.001l-1.572 12h-16.352l-1.526-12h19.45zm2.279-2h-24l2.035 16h19.868l2.097-16zm-1.745-2l.371-2h-21.256l.371 2h20.514z"/></svg>
        <p className="font-semibold text-sm text-gray-700">{text}</p>
    </motion.button>
  )
}

export default ArchiveButton