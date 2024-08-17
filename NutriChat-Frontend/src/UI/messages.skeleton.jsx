import React from 'react';

const MessageSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <div className="flex space-x-2">
        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
