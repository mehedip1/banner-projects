


const Sign = () => {
    return (
        <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
        <p>Register to kickstart your career journey.</p>
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
       
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          <input type="checkbox" className="checkbox"  />
          <p className="ms-2">I have read and agree to yolBe s Privacy Policy and I am over the legal age of 13</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register Account</button>
         
        </div>
      </form>
      
    </div>
  </div>
  
  </div>

        </div>
    );
};

export default Sign;