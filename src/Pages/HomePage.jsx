import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useToast } from '../useToast';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlicer';


const HomePage = () => {

    const [formData, setFormData] = useState({ checked: false }); 
    const [countCharacter, setCountCharacter] = useState(100);
    const toast = useToast();
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        const values = type === "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: values
        })

        if (name === "description") {
            setCountCharacter(100 - values.length)
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let newTasks = {
            id: new Date().toString(32),
            name: formData.name,
            title: formData.title,
            description: formData.description,
            createAt: new Date().toString()
        }

        dispatch(addTask(newTasks))
        toast.success("Added Task successfully")
        setFormData({ name: "", title: "", description: "" })
    };


    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="container bg-[#1e1e1e] text-white rounded-lg h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-auto sm:w-auto sm:px-0 sm:py-0 shadow-lg rounded-2xl backdrop-brightness-125 lg:p-8 md:p-6 p-4">
                    <h1 className='text-center text-xl font-roboto font-base mb-6'>Add Your Tasks</h1>
                    <div>
                        <input
                            type="text"
                            placeholder='Enter your name...'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-full rounded-md border border-sky-300 p-4 bg-transparent outline-none mb-4 placeholder:font-roboto'
                        />
                        <input
                            type="text"
                            placeholder='Enter your project title...'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className='w-full  rounded-md border border-sky-300 p-4 bg-transparent outline-none mb-4 placeholder:font-roboto'
                        />
                        <div className="relative">
                            <textarea
                                name="description"
                                placeholder="Enter your project description..."
                                value={formData.description}
                                onChange={handleChange}
                                maxLength={100}
                                rows={5}
                                className="w-full rounded-md border border-sky-300 p-4 bg-transparent outline-none mb-4 resize-none placeholder:font-roboto"
                            ></textarea>
                            <div className="absolute bottom-6 right-1 text-sm text-gray-500 text-right">
                                {countCharacter} characters remaining
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="checked"
                                    checked={formData.checked}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-sky-400"
                                />
                                <span className="ml-2 text-sm font-roboto text-white">
                                    I want to add this task
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className={`bg-sky-400 px-5 py-2 rounded-md text-white font-roboto hover:bg-sky-300 ${!formData.checked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={!formData.checked}
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HomePage;