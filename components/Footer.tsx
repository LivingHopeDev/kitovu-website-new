"use client";
import Image from "next/image";
import Link from "next/link";
import { nav } from "./Nav";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const validation = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
  });
  const onSubmit = () => {
    setLoading(true);
  };
  return (
    <footer className="footer text-white  w-screen">
      <div className="mx-auto px-4 md:px-8 lg:px-24 w-full z-[99] 2xl:max-w-[1600px] ">
        <div className="text-white pt-8 md:pt-14 grid-cols-[auto_1fr_1fr_1fr] gap-3 md:grid">
          {/* Left Section - Logo, Social Links, and Newsletter */}
          <div className="flex flex-col gap-4 pb-4 mr-8">
            {/* Logo */}
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={120}
              height={120}
            />
            <h1 className="font-semibold text-xl md:text-2xl text-white ">
              Kitovu Technology Company
            </h1>
            <p className="text-white text-md">
              Kitovu Business Hub, Iseyin-Saki Expressway, <br />
              Sawmill Area, Iseyin, Nigeria.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              <a
                href="https://www.youtube.com/channel/UCwML8SY-x0PsjfH8BsQzsjA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube className="text-[#A30B0B] w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/kitovut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="text-white w-4 h-4 " />
              </a>
              <a
                href="https://twitter.com/kitovut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaX className="text-white w-4 h-4 font-" />
              </a>

              <a
                href="https://instagram.com/kitovu001 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="text-[#A30B0B] w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/kitovutechnologycompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="text-white w-4 h-4" />
              </a>
            </div>

            {/* Newsletter Form */}
            <div className="mt-6">
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validation}
                onSubmit={onSubmit}
              >
                {({ isValid, errors, touched, dirty }) => (
                  <Form>
                    <div className="flex flex-col gap-2 md:w-3/4">
                      <h1 className="text-white text-xl md:text-2xl">
                        Subscribe to our newsletter
                      </h1>
                      <p className="text-white">
                        Enter your email address to register to our newsletter
                        subscription.
                      </p>
                      <p className="text-red-500 text-sm mt-1">
                        <ErrorMessage name="email" />
                      </p>
                      <div className="flex gap-1">
                        <Field
                          type="email"
                          name="email"
                          placeholder="info@kitovu.com.ng"
                          className={`${
                            errors.email && touched.email && "border-red-700"
                          } rounded-md px-5 py-2 border-[1px] border-[#FFA300] bg-transparent text-gray-800 w-full outline-none `}
                        />
                        <button
                          className="w-full md:w-[10rem] px-6 py-2.5 bg-[#FFA300] text-[#481A00] hover:bg-white hover:text-[#F58A07] text-[15px]  rounded-md font-medium md:font-semibold disabled:bg-gray-500"
                          disabled={!(isValid || dirty) || loading}
                          type="submit"
                        >
                          {loading ? <LoadingSpinner /> : "Subscribe"}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4 mt-2 md:mt-12">
            <h1 className="font-medium text-white">Company</h1>
            {nav.map((item) => (
              <div key={item.id}>
                {item.link && <Link href={item.link}>{item.name} </Link>}
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3 mt-2 md:mt-12">
            <h1 className="font-medium text-white">Contact</h1>
            <div className="flex gap-2">
              <BsTelephone className="mt-1" />
              <a href="tel:+23481233456789">+(234) 81233456789</a>
            </div>
            <div className="flex gap-2">
              <BsEnvelope className="mt-1" />
              <a href="mailto:info@kitovu.com.ng">info@kitovu.com.ng</a>
            </div>
          </div>
        </div>
        {/* Policy, Terms & Conditions - aligned with the newsletter on large screens */}
        <div className="flex flex-col sm:flex-row sm:justify-between mt-4 md:mt-0 text-sm items-center">
          <div className="flex gap-3">
            <Link href="/policy">
              <p className="text-white">Privacy Policy</p>
            </Link>
            <p className="text-white">Terms & Conditions</p>
          </div>
        </div>

        {/* All rights reserved - Centered at the bottom */}
        <div className="flex flex-col gap-1.5 justify-center py-5 pt-8 text-sm">
          <p className="text-white text-center">
            © All rights reserved – Kitovu business hub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
