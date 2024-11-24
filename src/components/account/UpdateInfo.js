import React from 'react';

const UpdateInfo = ({ errorMessage, newUsername, setNewUsername, newPassword, setNewPassword, handleUpdateFormSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-center text-amber-800">Update Account Info</h2>
        <form onSubmit={handleUpdateFormSubmit}>
          <div className="relative">
            <input
              type="text"
              name="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
              placeholder="New Username"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
              placeholder="New Password"
              required
            />
          </div>
          {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="w-full py-3 text-white rounded-lg bg-amber-600 hover:bg-amber-700"
            >
              Update Info
            </button>
            <button
              type="button"
              className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700"
              onClick={() => setNewUsername('')} // Reset the username when canceling
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
