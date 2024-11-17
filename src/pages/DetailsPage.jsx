import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">I am details</h1>
        <br />
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="btn btn-primary"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
