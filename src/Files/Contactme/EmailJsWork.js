import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
export default function EmailJS(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1aryue6', 'template_n3w5q8g', form.current, 'dUB8BLFueY5Hlpfa2')
      .then((result) => {
          console.log(result.text);
          toast.success("Mail sent successfully !");
      }, (error) => {
          console.log(error.text);
      });
  };
  const sendEmailTest = (e) => {
    e.preventDefault();

    toast.success("Mail sent successfully !");
  };

  return (
    <form ref={form} onSubmit={sendEmailTest}>
      <h3 className="text-twblue text-[2.5rem] font-black text-center mb-2">Direct Contact</h3>
      <input type="text" placeholder="YOUR NAME" name="user_name" className="bg-transparent border-[3px] border-white rounded-[30px] w-[100%] h-[75px]  m-2 placeholder-twblue p-2" />
      <input type="email" placeholder="YOUR EMAIL" name="user_email" className="bg-transparent border-[3px] border-white rounded-[30px] w-[100%] h-[75px]  m-2 placeholder-twblue p-2" />
      <textarea name="message" placeholder="ENTER MESSAGE" className=" bg-transparent border-[3px] border-white rounded-[30px] w-[100%] h-[200px] m-2 placeholder-twblue p-2" />
      <input type="submit" value="Send" className=" bg-transparent border-[3px] border-white rounded-[10px]  w-[75px] h-[50px] my-[20px] mx-[40%] active:bg-twblue active:text-white duration-[100ms] delay-[100ms]"/>
    </form>
  );
};