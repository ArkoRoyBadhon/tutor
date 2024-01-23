
import React from 'react';


interface FooterProps {
  // Define any props you may need for your footer
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-deeper text-white py-12 mx-auto">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p>We are providing best Tutor</p>
        </div>
        <div className="w-1/3">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>Email: tutor@gmail.com</p>
          <p>Phone: +88 01755434678</p>
        </div>
        <div className="w-1/3">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          {/* Add social media icons or links here */}
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Tutor House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
