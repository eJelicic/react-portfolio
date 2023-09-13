import Head from "next/head";
import Navbar from '../components/navbar';
import { useDarkMode } from '../components/darkModeProvider';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                'service_9o2akmc',
                'template_luc6hev',
                formData,
                'ZOv7joQdN407dDmY7'
            );

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            });

            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Message could not be sent. Please try again later.');
        }
    };
    const { darkMode, setDarkMode } = useDarkMode();
    return (

        <div className={darkMode ? "dark" : ""}>

            <Head>
                <title>Eugen Jeličić Portofolio</title>
            </Head>

            <Navbar></Navbar>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact me!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-600">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Contact;

