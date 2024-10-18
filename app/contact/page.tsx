"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Image from "next/image";

interface FormValues {
  name: string;
  email: string;
  message: string;
}
// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form Data", values);
      resetForm();
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <header className="relative flex bg-[url('/assets/images/contactUs.svg')] bg-cover bg-center bg-no-repeat w-screen h-[20vh] md:h-[50vh]">
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center space-y-6 px-6 sm:px-10 lg:px-16 w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Contact Us
          </h1>
          <p className="text-lg text-white">Home &gt; &gt; Contact Us</p>
        </div>
      </header>
      <section className="bg-[#E5E5E54D] py-10 px-6 md:px-16 w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto md:my-[4rem]">
          {/* Left Side: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty, touched }) => (
                <Form>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className={`w-full px-3 py-2 border ${
                        touched.name && !isValid
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none`}
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={`w-full px-3 py-2 border ${
                        touched.email && !isValid
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none`}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      rows="4"
                      className={`w-full px-3 py-2 border ${
                        touched.message && !isValid
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none`}
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--footer-color)] focus:outline-none transition duration-200 disabled:bg-[var(--footer-color)]"
                    disabled={!(isValid && dirty) || loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-gray-600 mt-2">
                We're here to support your agricultural technology needs. Reach
                out to us with your questions, feedback, or any assistance you
                may require.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+(234) 81233456789</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600">
                Iseyin-Saki Expressway, <br />
                Sawmill Area, Iseyin, Nigeria.{" "}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Official Email</h3>
              <p className="text-gray-600">info@kitovu.com.ng</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                {/* Twitter */}
                <a
                  href="https://twitter.com/kitovut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/x-image.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="hover:opacity-75 transition-opacity"
                  />
                </a>

                {/* Instagram */}
                {/* <a
                  href="https://www.instagram.com/company/kitovutechnologycompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="hover:opacity-75 transition-opacity"
                  />
                </a> */}

                {/* Whatsapp */}
                <a
                  href="https://whatsapp.com/kitovut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/whatsapp.svg"
                    alt="Whatsapp"
                    width={25}
                    height={25}
                    className="hover:opacity-75 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
