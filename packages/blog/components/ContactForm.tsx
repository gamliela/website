import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFormData, useFormSubmit } from "../hooks/useForms";

function ContactForm() {
  const { formData, setFormDataField } = useFormData({
    name: "",
    email: "",
    message: "",
  });

  const formName = "Contact";

  const { submit, submitResult } = useFormSubmit(
    formName,
    "Website inquiry",
    formData
  );

  return (
    <>
      <form onSubmit={submit} method="post" name={formName} data-netlify="true">
        <div className="grid grid-cols-1 gap-6 prose">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              type="text"
              className="mt-1 block w-full"
              name="name"
              required={true}
              value={formData.name}
              onChange={setFormDataField("name")}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              type="email"
              className="mt-1 block w-full"
              placeholder="john@example.com"
              name="email"
              required={true}
              value={formData.email}
              onChange={setFormDataField("email")}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              required={true}
              className="mt-1 block w-full"
              rows={3}
              value={formData.message}
              onChange={setFormDataField("message")}
            ></textarea>
          </label>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
            >
              Send
            </button>
            {submitResult === "Success" ? (
              <span className="w-1/2">
                &nbsp;&nbsp;&nbsp;Message was sent successfully
              </span>
            ) : submitResult === "Failure" ? (
              <span className="w-1/2">
                &nbsp;&nbsp;&nbsp;Couldn&apos;t send message
              </span>
            ) : undefined}
          </div>
        </div>
      </form>
    </>
  );
}

export default React.memo(ContactForm);
