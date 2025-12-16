"use client";


import { useState, FormEvent } from "react";
import Navbar from "../../components/Navbar";
import WorkHero from "../../components/WorkHero";
import Footer from "@/components/Footer";
import OrchidsPrograms from "@/components/OrchidsPrograms";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    console.log(status)
    console.log(responseMessage)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setResponseMessage("Failed to send message. Please try again.");
    }
  };
  console.log(handleSubmit);

  return (
    <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden bg-white">
      {/* Header/Navigation */}
     
    <Navbar />
      {/* Main Content */}
      <main className=" bg-white">
<WorkHero/>
<OrchidsPrograms/>
      </main>

      {/* Footer */}
  <Footer />
    </div>
  );
}
