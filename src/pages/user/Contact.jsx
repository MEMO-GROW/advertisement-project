import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[url('assets/images/image3.png')] bg-cover flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between mb-6 text-gray-700">
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-500" />
            <span>+233 552 831412</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-red-500" />
            <span>contact@memotrends.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-green-500" />
            <span>123 Buro Street, Osu, Accra-Ghana</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
