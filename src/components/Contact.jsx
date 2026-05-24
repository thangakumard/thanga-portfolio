import React , {useState} from 'react'
import { assets, serviceData } from '../assets/assets'
const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "<YOUR_ACCESS_KEY>");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "The form submitted successfully!" : "Error");
  };
  return (
     <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20
     bg-url[("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Contact Me</h4>
        <h2 className='text-center text-5xl font-Ovo' >Get In Touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           Feel free to reach out to me for collaborations, freelance projects, or any inquiries. I'm here to help and connect with like-minded professionals.
        </p>
        <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
            <div className='grid grid-cols-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Your Your Name' name='name'
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white'/>
                <input type='email' placeholder='Your Your Email' name='email'
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white'/>
            </div>
            <textarea rows='6' placeholder='Your Message' name='message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white'></textarea>
            <button type='submit' 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black mt-6 transition duration-500'>
                Send Message <img src={assets.right_arrow_white} alt='' className='w-4'/>
            </button>
            <p className='mt-4'>{result}</p>
            </form>
    </div>
  )
}

export default Contact
