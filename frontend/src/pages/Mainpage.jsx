import Home from "../components/Home"
import Featured from "../components/Featured"
import Offers from "../components/Offers"
import Testimonials from "../components/Testimonials"
import Newselter from "../components/Newsletter"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
const Mainpage = ({ setPage}) => {
  return (
    <>
      <Home setPage={setPage}/>
      <Featured setPage={setPage}/>
      <Offers />
      <Testimonials />
      <Newselter />
    </>
  );
};

export default Mainpage;
