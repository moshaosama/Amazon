import { Link } from "react-router-dom";

function Start_App() {
  return (
    <>
      <div id="Amazon">
        <Link to={"/Home"}>
          <div
            className="btn btn-dark"
            style={{
              position: "absolute",
              left: "44pc",
              top: "25pc",
              width: "8pc",
            }}
          >
            Start
          </div>
        </Link>
      </div>
    </>
  );
}
export default Start_App;
