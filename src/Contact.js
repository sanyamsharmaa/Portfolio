import React, {useRef, useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const variants={
//     initial:{
//         y:500,
//         opacity:0,
//     },
//     animate:{
//         y:0,
//         opacity:1,
//         transition:{
//             duration:0.5,
//             strggerChildren: 0.1,
//             },
//     },
// };
const variants = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: -10,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1, // Corrected property name and added comma
      },
    },
  };
export default function Contact() {
    const form=useRef();
 const [error, seterror]=useState(false);
//  const [success, setsuccess]=useState(false);
 const [sending, sendstat]= useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    sendstat(true);
        emailjs.sendForm('service_8um1dng', 'template_as22rga', form.current, 'chjt0J7b5KcyurEHM')
          .then((result) => {
            // setsuccess(true); 
            form.current.reset();
            sendstat(false);
            EmailSent();
        }, (error) => {
            seterror(true);
          });
          
      };
      const EmailSent = () => toast.success('Mail sent, Thank you ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    return (
        <>
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textCont"variants={variants}>
                <motion.h2 variants={variants}>Get in touch</motion.h2>
                <motion.div className="contitm" variants={variants}>
                    <motion.div className="head">Mail</motion.div>
                    <span>sanyamsharmap@gmail.com</span>
                </motion.div>
                <motion.div className="contitm" variants={variants}>
                    <motion.div className="head">Phone</motion.div>
                    <span>+91 7742397211</span>
                </motion.div>
                <motion.div className="contlnks" variants={variants}>
                    <motion.div className="head">Connect on</motion.div>
                    <a href="https://www.linkedin.com/in/sanyam-sharma-54141a232/"><FaLinkedin size={"30px"} /></a>
                    <a href="https://twitter.com/Sanyam162" id='twit'><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhIVFRIYGBIZGBgYGhwaGBoYGBUYGhkaHBkYGBgcIS4lHSErIxocNDwnKy8xNTU1HCQ7Qjs0Py80NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAM8A9AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgEBgEDBQL/xABCEAACAgADBQMHCwQBAgcAAAABAgADBBFBBQYhMVEHEmETFCIyVHGBIyRCUmKRk6GxwdIVFhfRQ2PCM1NykrLh8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCGYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAE9GrYmJdVdcLcyMM1ZanZWHUEDjPOElzsc3z8m4wN7HuOfkGJ4Kx5159Dp48NYEb/2/jPY8R+DZ/Gcf2/jPY8R+DZ/GW4E5gVG/t/Gex4j8Gz+Mf29jPYsR+DZ/GW5iBUb+3sZ7FiPwbP4x/b+M9jxH4Nn8ZbmIFRv7fxnseI/Bs/jMfFYGykgW1PWxGYDoyEjqAw4y4M1LtA3UXaeEKAAYhM2qY6NqhP1W5fcdIFYIndiKWR3RlKupKsDzVgciD8Z0wEREBERAREQERPa3Z2DdtDEJh6RxPFmI9FEHrO3u6anIQMDCbPtuzFVVlhGWfcRnyz5Z90HKZH9v4v2PEfg2fxlnN193KdnYdaKV8XY5d6xtWY/oNJ7kCo/9v4v2PEfg2fxnRi9m3UgG2mysE5AujICRzAzHGWt27tmnBUPfe/drX72OiqNSZWnfLeq7aWINjkrWOFdeea1r+7HUwNcMREBERAREQEREBOytypBBIIIIIORBHIgzrEQLJ9mW+I2jhu65+d1ALYPrryWwe/Xx94m8Spe7m27MBiq8RUfSU8V0dD6ynwI/Yy0Ww9r14zD130tnW4z8VP0lPiDwgenOAYkfdqWw8Rdh/OMLbat1IPeVHdfK1jiclU8WHPxGfhAkKJUY7exftmI/Gf8AlH9fxftmI/Gs/lAtwTBkJ9ke/D+V8yxNrMHOdTuxYq+qMx0bTPXhrJrBgQ/2y7nd5Tj6E9IcMQoHrAZBbcvDkfDI6GQtlLi21hgVYAqQQQRmCCMiD4StvaTuidnYolFPmtmbVtlwU/SrJ6jTwy8YGlxEQEREBETO2Zs6zE2pTSha1zkoH5k9ABzPhA7NibHuxl6UUJ3rGPDoBqzHQDrLKbmbp1bMw4RMmtbI22ZZF26DoozOQmPuFudXsyjIZNiHANj9SPor0Ufnzm2iAmDtXadWFpe65wlaDMk/kANSdBO3G41Ka3tsYLWoLMzHIACVy7RN9X2ld3UzXCIT3FPAueXfbxOg0EDE363vt2nf3mzShCRVXnwUfWbqx16cpqpnJM4gIiICIiAiIgIiIARAiAzkgdle+PmGI8ja/wA0uIBz5V2clfwGh+B0kfzlYFyEOYnJWRd2P75+cVjBXN8vWudbH/krH0SfrL+Y9xkpAwK+drO5vmdxxNK/NbW4gcqrDxK+CtxI+I6SNzLebX2ZVi6LKLk71dilWGvgQdCDxB8JV/e3d+zZ+KeizjlxRtHQ+qw/fxBgeMjkEEEggggjgQRyIMsf2Zb4DaOG7lh+d0gK/wBteS2D36+PvErbPW3d21bgMTXiKj6SniNHU+sreB/0YFtZ4u9OwK9oYWzD2DgwzVtUceqw9x01GYnfsLbFeMw9d9TZo4z8Vb6St0IPCenAqJtnZdmEvsw9q5WVt3T0OoYHUEZEe+efLC9q+5vntHl6UzxdS8gONtY4lfFhzHxGsr2YHERO6ipnZVVSzMQoAGZJPAADUwPrCYV7bFrrUvY5CqqjMsTyAljez3chNm1d58nxbj5RuYQf+WngNTr90w+zTcNdnoL7wGxjj3ilSPUU/W6n4e+QQIHIE6cRetaM7MFRQWZicgqgZkkz6tsCgliAoBJJOQAHMk6SAe07f8452w+HcjBqcmYcDew1P2QeQ159IGH2kb9vtG01VErg0J7o5G4j/kfw6DTnz5aHnODEBERAREQEREBERAREQAiBEBERAy9n456LEtrcrYjBlYcwR+3hLPblbyptLCJcuQsHo2Ln6jjmPceY8DKrTadw9622Zi1fiaHyW1eq58GA+svMfEawLRZzTu0TdJdpYUhQBiq82qY69UJ6N+uRm1YTEJaiOjBkYBlYHMMp4gidzCBTq6pkZlZSGUlWBGRBByII6gzqkzdsu5vPaFC9BeoHwFvD4A/A9ZDJgb/2Wb4/0/EeStb5pcQGz5Vucgtg8ND4ZHSWKQgjhylNpO/Y/vp5esYK9vl61+SY/wDJWPok/WX8x7jAlNpAna7ub5racZSvze1vTUDhVYeOfDkrfrmNRJ8BmHtPZ9eJqem1Q1bgqwPQ6joR1gVERSSAASScgAMySeQAk9dmHZ8MGq4rEqDimGaIQD5AEf8AzI59OXWdm43ZkmBxD33sLXVyKOHBV0dh9b9JJIEAJwT/APuk5JkK9qnaEWL4PCWeiM1usU+sda0YadSOfKBhdqu/3nDNg8M/zcHK11P/AIxB9QH6g/P3c4sMEziAiIgIiICIiAiIgIiICIiAEQIgIiICBEQJc7HN8/JuMBe3oOT5BjyVjxNZPQ6ePDWTcrZynKOQQQSCDmCOBBHEEGWP7M98BtHDd12HnVQCuNXXktgHjr4wNzvqV1ZHUMrAhgRmGB4EEdJWrtF3RbZuKIUMcNZm1THjl1rJ6r+Yylmp4e9e79e0MLZRZkMxmja1uPVYfv1GcCqEy8BjXosS2titiMGVhzBH7eE7dr7Mswl1lFqlbEYqw04cmHUEcQZ54MC1G5W8ybSwqXLkLB6Nq58Ucc/geYmxgyre4m9LbNxS2cTS+S2rn6ydR9pc8x8RrLOYLFJdWllbBq3UMrA5hlPEGBkZTgtPqaZ2nbRxWH2fa+FHHlYwJ71SHgWQfvoOMDUe1PtE7gfBYN/T4i60H1etdZH0urachx5QrnOWafMBERAREQEREBERAREQEREBERACIEQEREBERAT2N2tuW4DE1Yio+kpyIzyDqfWRvA/lwM8eciBbfYW168Zh676WzRxn4qdVboQeE9MiV17Kt8TgMR5G1vmlzAMTyqc8FfwB4A/A6SxKmBHHaxub57T5zSnzmleIA421jMleH0l5j4iV9MuURIA7XNzfNLvO6V+bWt6YA4VWHieXJW08cx0gRmJLXY5vl5JxgLm+TcnyLH6LniUJ6Np4++RLOxHIIIJBBzBHAgjiCDAuODOu2tXVlYAqQQQeIIPAgiaR2Yb4/wBRw3csb53UAH+2vJbAPyPj75vcCs3aPuidmYo9wE4a3Nqm0Xj6VZPVfzBHjNNlr96t369o4WzD2DnxRta3HqsP36gkSr+2Nm2YS+yi5e7YjFWGh6FTqCOIPjAwIiICIiAiIgIiICIiAiIgIiIARAiAiIgIiICInIEDkSwPY3t+7FYRqrVYigqiWHky5cKydWUfkRIo3E3Os2nf3eKYdD8rZlyH1F0LH8ufvsjszZtWGqSmlAtaABQP1J1J1MDOmFtTZ1eJpsptUNW6lWHgdR0I0MzpwRAqnvdu5Zs7FPQ/FfWRtLEPqt79CNCJ4JEs72gbprtPClBkMRXm1LHh6WXFGP1W5fcZWfEUNW7IylXUlWU8CrA5EGBn7vbaswOJqxFR9NDxGeQdT6yt4Ef7lo939sVY3DV4io5o4zy1Vh6ynxBlR5vvZdvj/TsR5O1vmlxAfPlW/JbB4cgfDjpAsaRnI67WdzfPKPOaVzxVK8QOdtYzJX3jMkfEayQ1bP8AbLiCPfPswKamcSS+1zc3zS/zqlcsNa3pADhVaeJHDkrcx45jpI0MBERAREQEREBERAREQEREAIgRAREQEREAJsO6O6120rxVUMlHGxyPRrXqepOg1nVutu7dtHELRSvi7H1a01Zv2Gpllt2t36Nn0LTQuQHFmPrWNqzHU/oOEDu2FsanBUJRSvdrUfFjqzHUmenAE8PeneSnZ1DXXN4Io9ax9FUfqdIHzvTvRRs2oWXsc2OSqvFm6kDoBxJnrYTFpdWllbBq3UMrDiGUjMGVV3k2/dj8Q19zZk8FUerWuiqOn6yQOxzfLyNgwN7ZVO2dJP0HPNCejaePvgTkRIe7ZdzO8Dj6F9IZeXUDmo4C33jgD4ZHQyYFM+LawylWAKkEEEZgg8wR0gU4M5Bm6dpO552biiUU+a2ktWdEPM1k9Rp1HuM0owJ27H98vL1jBXtnci51E/TrH0CdWX9PcZKgMp9gcW9NiWVsVsRgysOYYcpZ3cnedNp4VLVyFi+jav1XA0+yeYP+oHrbW2bXiqbKLV71VilWH7g6EHIg9RKwb2bvWbOxVlFmZAPeRtLKyfRYePUaEGWuymn9om6K7SwpCgDE1gtU3jqhPRsvgcjArJE7bamRmVlIZSVYHgQQciCOoM6oCIiAiIgIiICIiAiIgBECICIiAnrbu7Cux9600rmx4kn1UXVmOgE6dkbLtxdyUUoWsc5AaAaknQDUyyu5O6dWzMOEXJrWyNlmXF26Doo0H7wO/dLdmnZuHFNQzY8Xcj0rG6nw6DSe/E8/bO1KsJQ99zha0GZOp6BRqx0EDq3g21TgaHvvbuovIfSZtFUakytW9+89u0sQ11nBR6NaZ5itOg6k6nWd++u9tu07++2a0rmK68+CL1bqx1PwmrmAM+0YgggkEHMEcCCORBnxECyXZjviNo4buWN86pAWz/qLyWwe/Xx94m8ypW722rMBiasRUfTU8Ro6n1lbwI/Yy0WwNsVY3D131HNHGeWqsODKehBgdG8+wa9oYazD2cm4q2qOPVce4/eCRKv7Y2XZg77KLl7tlbEHoRowOoIyIlupHnatub59R5epM8XUvDLnbWOJTxI4kfEawK7ibPuNvQ+zMWtozNTZJaufrJ1H2hzH3azWSIUwLhYPFJbWllbBq3UMpB4FSMwRMiQZ2Pb4+ScYG9/knPyLHkjnmhJ0bTx98nIQIa7Z9zee0KE6DEKB7gtuQ+4/A9ZDUuLfStisrKGRgVYHiGUjIgiVp7Qt0m2ZiiqgnDPm1THjw1Rj9Zf0yMDUIgiICIiAiIgIiICIiAEQIgJl7OwFmItSqpS1jsFVRqT+g8Z8YTCvdYtdal7GIVVUZlidAJYrs53GXZtXfsyfGOPTbmK1+on7nU+EDL3C3Mr2ZTo+JcDyj/8AYvRR+fObdGU6MViVqR7HYLWgLMzHIKoGZJMDr2hj68PU9trhK1BZmPID9z4St2/u+dm07tUwyH5NP+98ubEfdyGueT2i78NtK3uJmuDRj3F5Fz9dx+g0mkEwDGcREBERA5Bm+dlu+P8AT8T5O1ssJcQHz5VvyWz3aHw46TQpyDAuOjZ8RxB5HTKfWUivsd3y8vWMDc3y1ak1Mfp1j6OerL+Y90lWBAva/ub5tacZQo83sb5QAcK7D9L/ANLfr7xIvIylwNoYJL6nqsUNW6lWB1B/eQxiOxW8u3cxVfk+8e73g3e7ufDvZDLPKBFIJGRHA8+hB6yxfZfvl/UcP5OxvndIAf8A6i8lsH7+PvE0b/CWJ9rp/wDa/wDqejsDstx2BxNeIqxdPfQ55ZOA6/SRuHIiBMk8Lezd2vaOFsofIE+kjZca3A9Fh+/UEz2kJIGYyOXEePhPswKhbV2fZhrrKLVysrYqw8dCOoIyIPQzBlgO13c3zunzqlc8TUvpADjbUOJHiy8x4ZjpIAIgcREQEREBERAREQAnbVUWZVUEsxAAAzJJ4AAanOdQkp9mJ2XhO7isVi6zij6ikMRSOvLIueukDduzPcNdn1i+8A4xx7/IqfoL9rqfhJCAmqf5E2X7bX9zf6g9oezPbq/ub/UDZrrVRWZmCqoLEk5AAcSSekr52l7+tj3NFDEYNW9xvYfSb7PQfHplldpnaD56ThsMxGFB9NuINzDTLmEH5yMoCIiAiIgIiICIiBk4HGPTYltbFbEYMrDmCOUs7uRvMm08KloyFq+jag+i46eB5j/6lWZs+4m9LbMxa2jM1Nktq/WTPmPtLzHxGsC0kATUx2ibL9tT7n/1OT2ibL9tr+5/4wNsnGU1T/Iuy/bU+5/4x/kXZfttf3P/ABgbXOZqf+Rdl+21/c/8YHaLsv22v7n/AIwNqaV87WNz/M8R5zUnzW5jmByqsPErloG4kfEdJLX+Q9l+2p9z/wCpgbY3w2Pi6LKLcXW1di90jJ8x0YejwIPEHwgVtMTM2lh0qtdEsWxFYhXXk66Hjy4aTDgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/9k=" width={"30px"} alt="" /></a>
                    
                    <a href="https://www.instagram.com/coz_im_sanyam?igsh=YzljYTk1ODg3Zg=="><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width={"30px"} alt="" /></a>
                </motion.div>
            </motion.div>

            <div className="formCont">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name='name'/>
                    <input type="email" required placeholder="Email" name='email'/>
                    <textarea rows="5" placeholder="Message" name='message'/>
                    <button disabled={sending===true?true:false}>Send mail</button>
                    {error && `Error`}
                    {/* {success && } */}
                     <ToastContainer />
                    {/* {setsuccess(false)} */}
                </form>
            </div>
        </motion.div>
        </>
    )
}
