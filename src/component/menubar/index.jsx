import React from 'react'
import { Link } from 'react-router-dom'


const Navber = () => {
    return (
        <>
            <div className='container bg-transparent py-8 text-white'>
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <i className='font-roboto font-medium text-xl hover:border-b-2 border-sky-300'>NotesApp</i>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className=' font-roboto font-medium text-xl  hover:border-b-2 border-sky-300' >Home</Link>
                        <Link to="/task-view" className='mx-5 font-roboto font-medium text-xl  hover:border-b-2 border-sky-300' >Task View</Link>
                        <Link to="/contact" className=' font-roboto font-medium text-xl  hover:border-b-2 border-sky-300' >Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navber;
