import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch via email or social links.",
};

const ContactPage = () => {
  return <ContactContent />;
};

export default ContactPage;
