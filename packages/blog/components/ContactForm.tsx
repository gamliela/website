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
import styles from "./ContactForm.module.css";

function ContactForm({ className }: { className: string }) {
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
    <form
      className={`${className} ${styles.form}`}
      onSubmit={submit}
      method="post"
      name={formName}
      data-netlify="true"
    >
      <label className={styles.fullNameField}>
        <input
          placeholder="Full name"
          type="text"
          name="name"
          required={true}
          value={formData.name}
          onChange={setFormDataField("name")}
        />
      </label>
      <label className={styles.emailAddressField}>
        <input
          placeholder="Email address"
          type="email"
          name="email"
          required={true}
          value={formData.email}
          onChange={setFormDataField("email")}
        />
      </label>
      <label className={styles.messageField}>
        <textarea
          placeholder="Message"
          name="message"
          required={true}
          rows={3}
          value={formData.message}
          onChange={setFormDataField("message")}
        ></textarea>
      </label>
      <button type="submit">Send</button>
      {submitResult === "Success" ? (
        <span className={styles.submitSuccess}>
          &nbsp;&nbsp;&nbsp;Message was sent successfully
        </span>
      ) : submitResult === "Failure" ? (
        <span className={styles.submitError}>
          &nbsp;&nbsp;&nbsp;Couldn&apos;t send message
        </span>
      ) : undefined}
    </form>
  );
}

export default React.memo(ContactForm);
