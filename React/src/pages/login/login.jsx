import "./Login.css";

function Login({ onClose }) {
  return (
    <>
      <div className="page">
        <form className="login-form">
          <div style={{ position: "relative" }}>
            <h2>Login</h2>

            <span
              onClick={onClose}
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                backgroundColor: "red",
                padding: "2px 8px",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
              }}
            >
              x
            </span>
          </div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
