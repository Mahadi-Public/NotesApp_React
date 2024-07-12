import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useToast } from '../useToast';
import { addContact } from '../features/contactSlicer';

const ContactPage = () => {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newContact = {
      id: new Date().toString(32),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      createAt: new Date().toString()
    }

    dispatch(addContact(newContact))
    toast.success("contact added successfully")
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  };


  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <div className="container bg-[#1e1e1e] text-white rounded-lg h-screen flex items-center justify-center">
        <div className="flex justify-center items-center gap-x-12 flex-col lg:flex-row xl:flex-row ">
          <div>
            <img src="src\assets\backgrounds\maps.jpg" type="image" alt="maps" width="600" height="450" />
          </div>
          <div>
            <form onSubmit={handleSubmit} className="pb-6">
              <div className="flex justify-center items-center py-3">
                <h1 className='text-lg font-roboto text-slate-100  mb-6 border-b-2 border-sky-300 w-fit'>Contact Us </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-slate-100">First name</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      placeholder="Enter your first name.."
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border border-sky-300 outline-none px-3.5 py-2 bg-transparent text-slate-100 shadow-sm font-roboto placeholder:text-gray-400 placeholder:font-roboto"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-slate-100">Last name</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      placeholder="Enter your last name.."
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border border-sky-300 outline-none px-3.5 py-2 bg-transparent text-slate-100 shadow-sm font-roboto placeholder:text-gray-400 placeholder:font-roboto"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-100">Email Address</label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Enter your email.."
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border border-sky-300 outline-none px-3.5 py-2 bg-transparent text-slate-100 shadow-sm font-roboto placeholder:text-gray-400 placeholder:font-roboto"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-slate-100">Phone Number</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      placeholder="Enter your phone number.."
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border border-sky-300 outline-none px-3.5 py-2 bg-transparent text-slate-100 shadow-sm font-roboto placeholder:text-gray-400 placeholder:font-roboto"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-100">Message</label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border border-sky-300 outline-none px-3.5 py-2 bg-transparent text-slate-100 shadow-sm font-roboto placeholder:text-gray-400 placeholder:font-roboto"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-400 outline-none"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;
