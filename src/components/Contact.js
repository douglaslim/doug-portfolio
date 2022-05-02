import React from "react";
import { ImLinkedin, ImFacebook2, ImTwitter, ImGithub } from "react-icons/im";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [state, handleSubmit] = useForm("mvolvdbn");

    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }

    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed/v1/place?q=beer%20bank%20sri%20petaling&key=AIzaSyCwboHCwSD7c-oxYajyyHghn4UUhevLJrA"
                />
                <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        1, Jalan Radin Anum 1 <br />
                        Bandar Baru Sri Petaling <br />
                        57000 Kuala Lumpur <br />
                        W.P, Kuala Lumpur
                    </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <a className="text-indigo-400 leading-relaxed"  href="mailto:douglaslim95@gmail.com">
                        douglaslim95@gmail.com
                    </a>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">+6016-5188342</p>
                    </div>
                </div>
                </div>
                <div
                name="contact"
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <div className="flex my-4">
                    <a
                    target="_blank"
                    href="https://my.linkedin.com/in/lim-tau-sang"
                    className="flex-1">
                        <ImLinkedin size={28} />
                    </a>
                    <a
                    target="_blank"
                    href="https://www.facebook.com/lim.tausang"
                    className="flex-1">
                        <ImFacebook2 size={28} />
                    </a>
                    <a
                    target="_blank"
                    href="https://twitter.com/DouglasLim9"
                    className="flex-1">
                        <ImTwitter size={28}  />
                    </a>
                    <a
                    target="_blank"
                    href="https://github.com/douglaslim"
                    className="flex-1">
                        <ImGithub size={28} />
                    </a>    
                    </div>
                    <p className="leading-relaxed mb-5">
                        Interested to collaborate together? Please drop me a message and I will get back to you as soon as possible!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                value={email}
                                id="email"
                                type="email" 
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message">
                                    Message
                            </label>
                            <textarea
                                value={message}
                                id="message"
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Submit
                        </button>
                    </form>
                    {
                        state.succeeded && !state.submitting &&
                        <p className="leading-relaxed my-4">
                            Thanks for contacting me!
                        </p>
                    }
                </div>
            </div>
        </section>

    );
}