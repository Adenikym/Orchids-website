"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import DonationDetails from "../../components/DonationDetails";
import DonationHero from "../../components/DonationHero";

export default function Donation() {
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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <Navbar/>
      
      {/* Main Content */}
      <main className="flex-grow  ">
<DonationHero/>
<DonationDetails/>
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
