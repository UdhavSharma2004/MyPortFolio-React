import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
export default function EmailJS() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let nameval = document.getElementById("NameSend").value;
    let emailval = document.getElementById("EmailSend").value;
    let messval = document.getElementById("MessageSend").value;
    if (nameval !== "" && emailval !== "" && messval !== "") {
      emailjs.sendForm('service_1aryue6', 'template_n3w5q8g', form.current, 'dUB8BLFueY5Hlpfa2')
        .then((result) => {
          console.log(result.text);
          toast.success("Mail sent successfully !");
        }, (error) => {
          console.log(error.text);
        });
      document.getElementById("NameSend").value = "";
      document.getElementById("EmailSend").value = "";
      document.getElementById("MessageSend").value = "";
    }
    else {
      toast.error("Something is empty 😐 !!");
    }
  };
  // const sendEmailTest = (e) => {
  //   e.preventDefault();
  //   let nameval=document.getElementById("NameSend").value;
  //   let emailval=document.getElementById("EmailSend").value;
  //   let messval=document.getElementById("MessageSend").value;
  //   if(nameval!==""&&emailval!==""&&messval!==""){
  //     toast.success("Mail sent successfully !!");
  //     document.getElementById("NameSend").value="";
  //     document.getElementById("EmailSend").value="";
  //     document.getElementById("MessageSend").value="";
  // }
  // else{
  //     toast.error("Something is empty 😐 !!");
  //   }
  // };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h3 className="text-twblue text-[2.5rem] font-black text-center mb-2">Direct Contact</h3>
      <input id="NameSend" type="text" placeholder="YOUR NAME" name="user_name" className="bg-transparent border-[3px] border-white rounded-[2rem] w-[100%] h-[4.6rem]  m-2 placeholder-twblue p-2 toEmpty" />
      <input id="EmailSend" type="email" placeholder="YOUR EMAIL" name="user_email" className="bg-transparent border-[3px] border-white rounded-[2rem] w-[100%] h-[4.6rem]  m-2 placeholder-twblue p-2 toEmpty" />
      <textarea id="MessageSend" name="message" placeholder="ENTER MESSAGE" className=" bg-transparent border-[3px] border-white rounded-[2rem] w-[100%] h-[12.5rem] m-2 placeholder-twblue p-2 toEmpty" />
      <input type="submit" value="Send" className=" bg-transparent border-[3px] border-white rounded-[0.5rem]  w-[4.6rem] h-[3rem] my-[1rem] mx-[40%] active:bg-twblue active:text-white duration-[100ms] delay-[100ms]" />
    </form>
  );
};