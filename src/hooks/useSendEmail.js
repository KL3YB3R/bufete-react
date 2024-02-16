export const useSendEmail = () => {
  // ! SEND EMAIL
  const onSendEmail = async (e) => {
    e.preventDefault();
    const formulary = e.target.parentElement;

    // ? DEFINE VARIABLES TO SEND INFORMATION
    const formData = new FormData(formulary);
    const DATA = { method: "POST", body: formData };
    // ? SEND INFORMATIO
    const sendEmail = await fetch("/src/helpers/email/sendEmail.php");
    const jsonSendEmail = await sendEmail.json();

    console.log(jsonSendEmail);
  };

  return [onSendEmail];
};
