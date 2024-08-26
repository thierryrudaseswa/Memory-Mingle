// Modal.tsx
import React from 'react';
import "./Swip.css";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { FriendName: string; FriendWish: string; GiftName: string }) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newWish = {
      FriendName: formData.get('FriendName') as string,
      FriendWish: formData.get('FriendWish') as string,
      GiftName: formData.get('GiftName') as string,
    };
    onSubmit(newWish);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="flex justify-center items-center text-white">Post a Wish</h2>
        <form onSubmit={handleSubmit} className="text-black">
          <input type="text" name="FriendName" className="m-5 bg-slate rounded-md p-4" placeholder="Friend's Name" required />
          <textarea name="FriendWish" className="m-5 rounded-md p-4" placeholder="Friend's Wish" required />
          <input type="text" name="GiftName" className="ml-3 mr-5 rounded-md p-4" placeholder="Gift Name" required />
          <button type="submit" className="rounded-2xl p-5 bg-white">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
