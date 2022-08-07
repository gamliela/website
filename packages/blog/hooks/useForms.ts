import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

function useFormData<T extends string[][number]>(
  initialData: Record<T, string>
) {
  const initialDataRef = useRef({ ...initialData });
  const [formData, setFormData] = useState(initialData);
  const setFormDataField = useCallback(
    (field: T) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((data) => ({ ...data, [field]: e.target.value })),
    []
  );

  return { formData, setFormDataField };
}

const useFormSubmit = (
  formName: string,
  subject?: string,
  formData: Record<string, string> = {}
) => {
  const [submitResult, setSubmitResult] = useState<
    null | "Success" | "Failure"
  >(null);

  const submit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      setSubmitResult(null);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formName,
          subject,
          ...formData,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            setSubmitResult("Success");
          } else {
            setSubmitResult("Failure");
          }
        })
        .catch(() => setSubmitResult("Failure"));
    },
    [formName, subject, formData]
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitResult(null);
    }, 5000);
    return () => clearTimeout(id);
  }, [submitResult]);

  return { submit, submitResult };
};

function encode(data: Partial<Record<string, string>>) {
  return Object.keys(data)
    .filter((key) => data[key] !== undefined)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? "")
    )
    .join("&");
}

export { useFormData, useFormSubmit };
