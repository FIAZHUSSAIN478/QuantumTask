import { useState } from "react";
import Section7img from "../assets/Images/Section7img.svg";

function Section7() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", form);
      alert("Message Sent Successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="w-full bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <button className="h-7 w-27 border border-solid border-custom-purple font-octarine font-bold text-[12px] leading-none tracking-normal text-[rgba(105,59,147,1)] bg-[rgba(249,243,255,1)] rounded-full mb-4">
            Get In Touch
          </button>

          <h2 className="font-octarine font-bold text-[48px] leading-none tracking-normal text-[rgba(15,15,15,1)]">
            Let's Discuss <br />
            Your <span className="text-[rgba(105,59,147,1)]">Quantum Future</span>
          </h2>

          <div className="mt-10">
            <img
              src={Section7img}
              alt="illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>

        <div className="bg-[rgba(249,243,255,1)] rounded-[30px] shadow-md p-8">
          <h3 className="text-[#693B93] font-Octarine font-bold text-[26px] leading-7.5 tracking-normal mb-4">
            Get Started Today
          </h3>
          <p className="font-octarine text-[rgba(15,15,15,1)] font-light text-sm leading-5 tracking-normal mb-6">
            Send us a message and we’ll respond within 2 hours during business hours
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="relative">
              <input
                type="text"
                className="w-full border border-solid border-[rgba(237,218,255,1)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 placeholder-transparent"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {!form.name && (
                <span className="absolute left-4 top-3 text-[rgba(15,15,15,1)] pointer-events-none font-Octarine font-light text-[14px] leading-[100%] tracking-[0%]">
                  Name<span className="text-red-500 font-['Octarine'] font-light text-[14px] leading-[100%] tracking-[0%]">*</span>
                </span>
              )}
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                className="w-full border border-solid border-[rgba(237,218,255,1)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 placeholder-transparent"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {!form.email && (
                <span className="absolute left-4 top-3 text-[rgba(15,15,15,1)] pointer-events-none font-Octarine font-light text-[14px] leading-[100%] tracking-[0%]">
                  Email Address<span className="text-red-500 font-['Octarine'] font-light text-[14px] leading-[100%] tracking-[0%]">*</span>
                </span>
              )}
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                className="w-full border border-solid border-[rgba(237,218,255,1)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 placeholder-transparent"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
              {!form.subject && (
                <span className="absolute left-4 top-3 text-[rgba(15,15,15,1)] pointer-events-none font-Octarine font-light text-[14px] leading-[100%] tracking-[0%]">
                  Subject<span className="text-red-500 font-['Octarine'] font-light text-[14px] leading-[100%] tracking-[0%]">*</span>
                </span>
              )}
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                rows="4"
                className="w-full border border-solid border-[rgba(237,218,255,1)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 placeholder-transparent"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {!form.message && (
                <span className="absolute left-4 top-2.5 text-[rgba(15,15,15,1)] pointer-events-none font-Octarine font-light text-[14px] leading-[100%] tracking-[0%]">
                  Tell us about your message<span className="text-red-500 font-['Octarine'] font-light text-[14px] leading-[100%] tracking-[0%]">*</span>
                </span>
              )}
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[rgba(105,59,147,1)] font-octarine font-bold text-[14px] text-white py-3 rounded-lg hover:bg-purple-900 transition cursor-pointer h-11"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section7;