import React, { useState } from 'react';
import ReferralFormModal from './ReferralFormModal';

const ReferEarnLandingPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center py-20">
          <h1 className="text-6xl font-bold mb-6 animate-bounce">Refer & Earn</h1>
          <p className="text-lg mb-8">
            Invite your friends to join our platform and earn rewards for each successful referral.
          </p>
          <button
            className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
            onClick={handleOpen}
          >
            Refer Now
          </button>
        </div>

        {open && <ReferralFormModal handleClose={handleClose} />}

        <div className="w-full bg-white text-black py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Invite Friends</h3>
                <p className="text-center">
                  Share your unique referral link with friends via email, social media, or text message.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">They Sign Up</h3>
                <p className="text-center">
                  Your friends join our platform using your referral link and complete the registration process.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Earn Rewards</h3>
                <p className="text-center">
                  You earn rewards for each successful referral, which can be redeemed for various benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 flex justify-between items-center">
          <div className='mx-auto flex justify-between items-center'>
            <p>Contact Me: arunvelv9253@gmail.com</p>
          </div>
          <div className='mx-auto flex justify-between items-center'>
            <p>&copy; {new Date().getFullYear()} Arunvel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReferEarnLandingPage;
