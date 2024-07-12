import { formatDistance } from 'date-fns'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import UpdateModal from '../component/modal'
import { useToast } from '../useToast'
import { deleteTask } from '../features/taskSlicer'


const TaskView = () => {

  const { tasks } = useSelector(state => state.task)
  const [countCharacter, setCountCharacter] = useState(100);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState();
  const [editId, setEditId] = useState();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleUpdate = (task) => {
    setShowModal(!showModal)
    setFormData(task)
    setEditId(task.id)
  };


  const handleUpdateChange = (e) => {
    const { name, value, } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (name === "description") {
      setCountCharacter(100 - value.length)
    }
  };


  const handleDelete = (note) => {
    dispatch(deleteTask(note.id))
    toast.success("Delete Task successfully")
  };

  return (
    <>
      <Helmet>
        <title>Task-View Page</title>
      </Helmet>
      <div className="container bg-[#1e1e1e] text-white rounded-lg min-h-screen p-6 ">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 box-border">
          {tasks?.map((task, index) => (
            <div key={index} className='rounded-md px-4 py-3 border backdrop-brightness-125border-sky-300'>
              <h3 className='font-roboto text-2xl text-white font-bold'>{task.name}</h3>
              <h3 className='font-roboto text-md text-white'>{task.title}</h3>
              <p className='font-roboto text-sm text-slate-50 py-2'>{task.description}</p>
              <span className='text-base font-roboto text-gray-500'>{formatDistance(task.createAt, new Date(), { addSuffix: true })}</span>
              <div className='flex justify-end gap-4 items-center mt-5'>
                <button onClick={() => handleUpdate(task)} className='bg-yellow-600 px-5 py-2 text-white font-medium font-roboto rounded-md hover:bg-yellow-500'>Update</button>
                <button onClick={() => handleDelete(task)} className='bg-red-700 px-5 py-2 text-white font-medium font-roboto rounded-md hover:bg-red-600'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        showModal &&
        <UpdateModal
          show={showModal}
          onHide={() => setShowModal(!showModal)}
          formData={formData}
          handleChange={handleUpdateChange}
          editId={editId}
          countCharacter={countCharacter}
        />
      }
    </>
  )
}

export default TaskView;
