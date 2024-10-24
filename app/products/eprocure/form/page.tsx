"use client";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@lib/firebase";

export interface EProcureFormValues {
  email: string;
  name: string;
  phone: string;
  commodity_type: string;
  quantity: string;
  delivery_location: string;
  expected_time_of_delivery: string;
  delivery_contact_name: string;
  delivery_contact_number: string;
}

const Page = () => {
  const [loading, setLoading] = useState(false);
  const validation = Yup.object({
    name: Yup.string().required("required"),
    phone: Yup.string().required("required"),
    commodity_type: Yup.string().required("required"),
    quantity: Yup.string().required("required"),
    delivery_location: Yup.string().required("required"),
    expected_time_of_delivery: Yup.string().required("required"),
    delivery_contact_name: Yup.string().required("required"),
    delivery_contact_number: Yup.string().required("required"),
    email: Yup.string().required("email required").email("Enter valid email"),
  });

  const onSubmit = async (values: EProcureFormValues) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "eProcure"), {
        email: values.email,
        name: values.name,
        phone: values.phone,
        commodity_type: values.commodity_type,
        quantity: values.quantity,
        delivery_location: values.delivery_location,
        expected_time_of_delivery: values.expected_time_of_delivery,
        delivery_contact_name: values.delivery_contact_name,
        delivery_contact_number: values.delivery_contact_number,
      });

      setLoading(false);
      toast.success("Success.");
    } catch (e) {
      console.log("error", e);
      setLoading(false);
      toast.error("Problem adding contact");
    }
  };
  return (
    <div className="px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 ">
      <div className="flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]">
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-14 items-center relative  mb-8 lg:mb-24 mt-10">
          <div className="flex flex-col gap-6 w-full  pt-4 ">
            <div>
              <h1 className="text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2">
                Sign up for Eprocure
              </h1>
              <p className="text-body pt-4 pb-5">
                Fill the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  commodity_type: "",
                  quantity: "",
                  delivery_location: "",
                  expected_time_of_delivery: "",
                  delivery_contact_name: "",
                  delivery_contact_number: "",
                }}
                validationSchema={validation}
                onSubmit={onSubmit}
              >
                {({
                  values,
                  isValid,
                  errors,
                  touched,
                  setTouched,
                  dirty,
                  setFieldValue,
                }) => (
                  <Form>
                    <div>
                      <div className="w-full mb-4">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          className={`${
                            errors.name && touched.name && "border-red-700"
                          } rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="name" />
                        </p>
                      </div>

                      <div className="signup-number mb-4 w-full">
                        <PhoneInput
                          // countries={["NG", "GH", "KE"]}
                          // addInternationalOption = {false}
                          defaultCountry="NG"
                          value={values.phone}
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          // className=' py-[13px] px-3'
                          onChange={(event) => {
                            setFieldValue("phone", event, true);
                            // setFieldValue("country", parsePhoneNumber(event).country)
                          }}
                          onBlur={() => {
                            setTouched({ phone: true });
                          }}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="phone" />
                        </p>
                      </div>

                      <div className="w-full mb-4">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className={`${
                            errors.email && touched.email && "border-red-700"
                          } rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="email" />
                        </p>
                      </div>

                      <div className="w-full mb-4">
                        <Field
                          className={`${
                            errors.commodity_type &&
                            touched.commodity_type &&
                            "border-red-700"
                          } rounded-[5px] pr-10 px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                          as="select"
                          name="commodity_type"
                          id="commodity_type"
                        >
                          <option label="Commodity Type"></option>

                          <option value="Maize" label="Maize">
                            Maize
                          </option>
                          <option value="Soya Bean" label="Soya Bean">
                            Soya Bean
                          </option>
                          <option value="Rice" label="Rice">
                            Rice
                          </option>
                          <option value="Sorghum" label="Sorghum">
                            Sorghum
                          </option>
                          <option value="Palm Kernel" label="Palm Kernel">
                            Palm Kernel
                          </option>
                          <option value="Cocoa" label="Cocoa">
                            Cocoa
                          </option>
                          <option value="Cashew" label="Cashew">
                            Cashew
                          </option>
                        </Field>
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="commodity_type" />
                        </p>
                      </div>

                      <div className="w-full mb-4">
                        <Field
                          type="text"
                          name="quantity"
                          placeholder="Quantity (Tons)"
                          className={`${
                            errors.quantity &&
                            touched.quantity &&
                            "border-red-700"
                          } rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="quantity" />
                        </p>
                      </div>

                      <div className="w-full mb-4">
                        <Field
                          type="text"
                          name="delivery_location"
                          placeholder="Delivery Location"
                          className={`${
                            errors.delivery_location &&
                            touched.delivery_location &&
                            "border-red-700"
                          } rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="delivery_location" />
                        </p>
                      </div>

                      <div className="w-full mb-4">
                        <Field
                          type="text"
                          name="expected_time_of_delivery"
                          placeholder="Expected Time of Delivery"
                          className={`${
                            errors.expected_time_of_delivery &&
                            touched.expected_time_of_delivery &&
                            "border-red-700"
                          } rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="expected_time_of_delivery" />
                        </p>
                      </div>

                      <div className="w-full mb-4">
                        <Field
                          type="text"
                          name="delivery_contact_name"
                          placeholder="Delivery Contact Name"
                          className={`${
                            errors.delivery_contact_name &&
                            touched.delivery_contact_name &&
                            "border-red-700"
                          } rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="delivery_contact_name" />
                        </p>
                      </div>

                      <div className="signup-number mb-4 ">
                        <PhoneInput
                          // countries={["NG", "GH", "KE"]}
                          // addInternationalOption = {false}
                          defaultCountry="NG"
                          value={values.delivery_contact_number}
                          name="delivery_contact_number"
                          id="delivery_contact_number"
                          placeholder="Delivery Contact Phone Number"
                          // className=' py-[13px] px-3'
                          onChange={(event) => {
                            setFieldValue(
                              "delivery_contact_number",
                              event,
                              true
                            );
                            // setFieldValue("country", parsePhoneNumber(event).country)
                          }}
                          onBlur={() => {
                            setTouched({ delivery_contact_number: true });
                          }}
                        />
                        <p className="text-red-700 text-sm mt-1">
                          <ErrorMessage name="delivery_contact_number" />
                        </p>
                      </div>

                      <button
                        className="w-full md:w-[182px]  px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07] border-[#F58A07] border-[1px] rounded-3xl font-medium md:font-semibold disabled:bg-gray-500"
                        disabled={!(isValid || dirty)}
                        type="submit"
                      >
                        {loading ? <LoadingSpinner /> : "Sign Up"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
