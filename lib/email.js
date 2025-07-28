import emailjs from "@emailjs/browser";

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      "service_rfy8z63",       // ✅ Your EmailJS Service ID
      "template_rgin32l",      // ✅ Your Template ID
      templateParams,
      "LbIzeOb7eF_qC7k-p"      // ✅ Your Public API Key
    );
    return response;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
};
