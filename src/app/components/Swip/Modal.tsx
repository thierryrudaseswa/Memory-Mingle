import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { FriendName: string; FriendWish: string; GiftName: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [friendName, setFriendName] = useState('');
  const [friendWish, setFriendWish] = useState('');
  const [giftName, setGiftName] = useState('');

  const handleSubmit = () => {
    onSubmit({ FriendName: friendName, FriendWish: friendWish, GiftName: giftName });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Post Your Wish</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 mb-2 w-full"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
        <textarea
          placeholder="Your Wish"
          className="border p-2 mb-2 w-full"
          value={friendWish}
          onChange={(e) => setFriendWish(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gift Name"
          className="border p-2 mb-2 w-full"
          value={giftName}
          onChange={(e) => setGiftName(e.target.value)}
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 p-2 bg-gray-500 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
