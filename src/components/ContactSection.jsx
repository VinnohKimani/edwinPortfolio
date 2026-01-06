import { Github, Linkedin, Mail, MapPin, Phone, Workflow } from "lucide-react";
import emailJs  from "@emailjs/browser"
import toast from "react-hot-toast";
import { useRef } from "react";


const ContactSection = () => {
  const phone = "0717478898";
  const email = "kimruto68@gmail.com";
  const location = "Nairobi";
  const linkendIn = "https://www.linkedin.com/in/edwin-kimutai-ruto";
  const github = "https://github.com/kimruto68";
  const upWork = "";
  const feiver = "https://www.fiverr.com/s/rEBx2Nb";
const fields = [
  { label: "First Name", name: "first_name" },
  { label: "Last Name", name: "last_name" },
  { label: "Email", name: "email" },
  { label: "Subject", name: "subject" },
];
  const formRef = useRef()
  const sendEmail = (e)=>{
    e.preventDefault()
      console.log("sendEmail triggered");
     emailJs
       .sendForm(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
         formRef.current,
         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
       )
       .then(
         () => {
           toast.success("Message sent successfully!");
           formRef.current.reset();
         },
         (error) => {
           console.error(error);
           toast.error("Failed to send message. Please try again.");
         }
       );
  }

  return (
    <div
      id="contact"
      className="min-h-screen bg-[rgb(35,41,97)] py-20 px-6 md:px-20"
    >
      <h1
        className="text-3xl md:text-4xl text-center text-[rgb(250,181,21)]
        hover:scale-105 duration-300 after:content-[''] after:block after:h-[3px]
        after:w-16 after:bg-[rgb(250,181,21)] after:mx-auto after:mt-2 after:rounded-xl"
      >
        Get In Touch
      </h1>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* CONTACT INFO */}
        <div className="space-y-4">
          {[
            { icon: Mail, color: "#EA4335", label: "Email", value: email },
            { icon: Phone, color: "#34A853", label: "Phone", value: phone },
            {
              icon: MapPin,
              color: "rgb(250,181,21)",
              label: "Location",
              value: location,
            },
          ].map(({ icon: Icon, color, label, value }) => (
            <div
              key={label}
              className="flex items-center bg-gray-100 rounded-xl shadow-md
              transition-all duration-300 p-5 hover:scale-105"
            >
              <Icon size={32} style={{ color }} />
              <div className="ml-4">
                <h2 className="font-semibold" style={{ color }}>
                  {label}
                </h2>
                <p className="text-[rgb(35,41,97)] italic">{value}</p>
              </div>
            </div>
          ))}

          {/* SOCIAL LINKS */}
          <div className="flex items-center bg-gray-100 rounded-xl shadow-md p-5 hover:scale-105 transition">
            <Linkedin size={32} className="text-[#0077B5]" />
            <div className="ml-4">
              <h2 className="font-semibold text-[#0077B5]">LinkedIn</h2>
              <a
                href={linkendIn}
                className="italic hover:underline hover:text-[#0077B5]"
              >
                Edwin Ruto
              </a>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 rounded-xl shadow-md p-5 hover:scale-105 transition">
            <Github size={32} />
            <div className="ml-4">
              <h2 className="font-semibold">GitHub</h2>
              <a
                href={github}
                className="italic hover:underline hover:text-[#0077B5]"
              >
                Edwin Ruto
              </a>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 rounded-xl shadow-md p-5 hover:scale-105 transition">
            <Workflow size={32} />
            <div className="ml-4">
              <h2 className="font-semibold">UpWork</h2>
              <a
                href={upWork}
                className="italic hover:underline hover:text-[#0077B5]"
              >
                Edwin Ruto
              </a>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-xl shadow-md p-5 hover:scale-105 transition">
            <Workflow size={32} />
            <div className="ml-4">
              <h2 className="font-semibold">Feiver</h2>
              <a
                href={feiver}
                className="italic hover:underline hover:text-[#0077B5]"
              >
                Edwin Ruto
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[rgb(35,41,97)] rounded-xl p-6 space-y-4"
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label className="text-[rgb(250,181,21)]">{field.label}</label>

              <input
                type={field.name === "email" ? "email" : "text"}
                name={field.name}
                className="w-full p-3 rounded-xl bg-gray-100"
                required
              />
            </div>
          ))}

          <div>
            <label className="text-[rgb(250,181,21)]">Message</label>
            <textarea
              name="message"
              className="w-full p-3 h-32 rounded-xl bg-gray-100"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[rgb(250,181,21)] text-[rgb(35,41,97)]
            font-semibold py-3 rounded-xl hover:bg-yellow-300 hover:scale-105 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
