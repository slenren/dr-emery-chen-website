import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Dr. Emery Chen, MD</h1>
        <p className="text-lg">Co-Founder of Elite Robotic Surgery</p>
        <p className="text-md text-gray-600">Palmdale, California</p>
      </header>

      <section className="max-w-3xl mx-auto mb-12">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">About Dr. Chen</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Dr. Emery Chen is a board-certified surgeon specializing in robotic-assisted procedures.
            Based in Palmdale, California, Dr. Chen co-founded Elite Robotic Surgery to bring cutting-edge
            technology and compassionate care to patients across Southern California. With years of experience
            in minimally invasive techniques, Dr. Chen is committed to surgical excellence and patient well-being.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>(661) 488-7048</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>contact@eliteroboticsurgery.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>38920 Trade Center Dr Suite A, Palmdale, CA 93551</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Request an Appointment
            </button>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Dr. Emery Chen, MD. All rights reserved.
      </footer>
    </div>
  );
}
