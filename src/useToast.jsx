import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastConfig = {
  position: "top-right",
  autoClose: 2000,
  newestOnTop: false,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  theme: "dark",
  hideProgressBar : true,
  closeOnClick : false,
  pauseOnHover : false,
  transition: Slide,
};

const ToastProvider = () => {
  return <ToastContainer {...toastConfig} />;
};

const useToast = () => {
  return toast;
};


export { useToast, ToastProvider };
