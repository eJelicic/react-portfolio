// Import the necessary types
import Head from "next/head";
import Navbar from '../components/navbar';
import { useDarkMode } from '../components/darkModeProvider';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ChangeEvent, FormEvent } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    // Create a more generalized event handler that can handle both input and textarea elements
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
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
                <title>Eugen Jeličić Portfolio</title>
            </Head>

            <Navbar />

            <main className="bg-white px-10 dark:bg-dark-background md:px-20 lg:px-40 min-h-screen">
                <div className="max-w-lg mx-auto dark:bg-dark-background bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-black dark:text-white text-2xl font-semibold mb-4 text-center">Contact me!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="dark:text-white text-black block">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="dark:text-white text-black block">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="dark:text-white text-black block">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="dark:text-white text-black block">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="dark:text-white text-black block">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
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
