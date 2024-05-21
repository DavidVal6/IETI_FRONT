import './login.css'
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const navigate = useNavigate();

  const handleRegisterClick = (event) => {
    event.preventDefault();
    navigate('/register');
  };

  return (
    <main>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <center>
            <a href="#">
              LOGIN
              <span></span>
            </a>
            <a href="#" onClick={handleRegisterClick} style={{marginLeft:'20px'}}>
              REGISTER
              <span></span>
              </a>
          </center>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
