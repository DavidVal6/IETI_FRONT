import './login.css'

export function RegisterPage() {
  return (
    <main>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Confirm Password</label>
          </div>
          <center>
            <a href="#">
              REGISTER
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;