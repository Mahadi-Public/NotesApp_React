import React from 'react'
import { useDispatch } from 'react-redux';
import { updateTask } from '../../features/taskSlicer';
import { useToast } from '../../useToast';

const UpdateModal = ({ onHide, formData, handleChange, editId, countCharacter }) => {

  const remainingCharacters = countCharacter - formData.description.length;
  const initialsCount = Math.max(0, remainingCharacters);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleUpdate = () => {
    let updateValues = {
      id: editId,
      name: formData.name,
      title: formData.title,
      description: formData.description,
      createAt: new Date().toString()
    }
    dispatch(updateTask(updateValues));
    toast.success("Updated Task successfully")
    onHide();
  }

  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-[#1e1e1e] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <form>
                  <h1 className='text-2xl font-roboto pb-4 text-slate-100 text-center font-semibold'>Update Your Tasks</h1>
                  <div>
                    <input
                      type="text"
                      placeholder='Enter your name...'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full rounded-md border border-sky-300 text-slate-100 p-4 bg-transparent outline-none mb-4 placeholder:font-roboto'
                    />
                    <input
                      type="text"
                      placeholder='Enter your project title...'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className='w-full  rounded-md border border-sky-300 text-slate-100 p-4 bg-transparent outline-none mb-4 placeholder:font-roboto'
                    />
                    <div className="relative">
                      <textarea
                        name="description"
                        placeholder="Enter your project description..."
                        value={formData.description}
                        onChange={handleChange}
                        maxLength={100}
                        rows={5}
                        className='w-full rounded-md border border-sky-300 text-slate-100 p-4 bg-transparent outline-none mb-4 resize-none placeholder:font-roboto'
                      ></textarea>
                      <div className="absolute bottom-6 right-1 text-sm text-gray-500 text-right">
                        {initialsCount} characters remaining
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-[#1e1e1e] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={handleUpdate} type="button" className="font-roboto inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Update</button>
                <button onClick={onHide} type="button" className="font-roboto mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateModal;