import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaGoogle, FaFacebookF } from "react-icons/fa";
import Logo from '../assets/img/LogoGhor.png'
import { FaRegEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { Bounce, Slide, toast } from "react-toastify";

const SignUpPage = () => {
  const auth = getAuth();

    const [showPass,setShowPass] = useState(false)
     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const [formData, setFormData] = useState({username:'',email:'',password:'',confirmPassword:'',errors:''})

    const handleRegistration = ()=>{
      if(!formData.username || !formData.email || !formData.password || !formData.confirmPassword) return setFormData((prev)=>({...prev,errors:'All feild must be filled in'}))
      if(!emailRegex.test(formData.email)) return setFormData((prev)=>({...prev,errors:'Email is not valid'}))
      if(!passwordRegex.test(formData.password)) return setFormData((prev)=>({...prev,errors:'Choose a strong password'}))
      if(formData.password !== formData.confirmPassword) return setFormData((prev)=>({...prev,errors:'Password did not match'}))


      createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...Update profile
            updateProfile(auth.currentUser, {
                displayName: formData.username, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // ...Email verification sent!
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                      // Email verification sent!
                      // ...
                      toast.success('Email Verification sent!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
                    });
              }).catch((error) => {
                // An error occurred
                // ...
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            // ..
            if(errorCode === 'auth/email-already-in-use') return toast.warn('Your email already used!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Slide,
                  });

          });
            }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#000000] via-purple-500 to-[#020202] p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        
        <div className="flex justify-center mb-[10px]">
            <div className="Img w-[100px] registration">
                <img src={Logo} alt="img" />
            </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
         <p className="text-red-500 text-[18px] text-center mt-[10px]">{formData.errors}</p>
        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaUser className="text-gray-500 mr-3" />
            <input onChange={(e)=>{setFormData((prev)=>({...prev,username:e.target.value}))}} type="text" placeholder="Full Name" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input onChange={(e)=>{setFormData((prev)=>({...prev,email:e.target.value}))}} type="email" placeholder="Email Address" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-500 mr-3" />
            <input onChange={(e)=>{setFormData((prev)=>({...prev,password:e.target.value}))}} type={showPass ? 'text' : 'password'} placeholder="Password" className="w-full outline-none" />
            {
                showPass ?
                <FaRegEyeSlash onClick={()=>setShowPass(!showPass)} className="text-gray-400 cursor-pointer"/>
                :
                <FaEye onClick={()=>setShowPass(!showPass)} className="text-gray-400 cursor-pointer" />
            }
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaLock className="text-gray-500 mr-3" />
            <input onChange={(e)=>{setFormData((prev)=>({...prev,confirmPassword:e.target.value}))}} type={showPass ? 'text' : 'password'} placeholder="Confirm Password" className="w-full outline-none" />
            {
                showPass ?
                <FaRegEyeSlash onClick={()=>setShowPass(!showPass)} className="text-gray-400 cursor-pointer"/>
                :
                <FaEye onClick={()=>setShowPass(!showPass)} className="text-gray-400 cursor-pointer" />
            }

          </div>
        </div>

        {/* Sign Up Button */}
        <button onClick={handleRegistration} className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or sign up with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:bg-red-600">
            <FaGoogle />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <FaFacebookF />
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
