import React from 'react';
import Image from 'next/image';
import "./Friend.css";

interface FriendData {
  friendName: string;
  friendText: string;
}

interface aboutPerson {
  person: {
    friends: FriendData[];
  };
}

const Friend: React.FC<aboutPerson> = ({ person }) => {
  return (
    <div className="zone b p-7 relative z-10 text-white">
      <div className="zon grid p-8 rounded-3xl">
        <div className="flex justify-center items-center text-3xl">
          FRIEND 911
        </div>
        <div className="grid grid-cols-3 gap-6 p-2">
          {person.friends.map((friend, index) => (
            <div key={index} className="first grid p-8 gap-4 rounded-3xl">
              <div className="name flex justify-center items-center row-span-1">
                {friend.friendName}
              </div>
              <div className="image flex justify-center">
                <div className="relative h-44 w-44 rounded-3xl overflow-hidden">
                  <Image
                    src="/Image/thierry28.jpeg" // This is the static image used for all friends
                    alt={`${friend.friendName}'s Photo`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="testimony text-lg m-0">
                {friend.friendText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friend;
  
   