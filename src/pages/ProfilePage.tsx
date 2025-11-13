import React, { useState } from "react";

export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    bio: "Passionate about web development and always learning new technologies. Enjoy hiking and photography in my free time.",
  });
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    alert("Profile saved!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Base classes for form elements
  const labelClass =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";
  const valueClass = "text-gray-900 dark:text-gray-100";
  const inputClass =
    "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
  const buttonClass =
    "px-4 py-2 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryButtonClass = `${buttonClass} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
  const secondaryButtonClass = `${buttonClass} bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500`;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          User Profile
        </h1>
        <button
          onClick={() => setEditMode(!editMode)}
          className={editMode ? secondaryButtonClass : primaryButtonClass}
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-5xl font-bold text-gray-600 dark:text-gray-400 border-2 border-blue-500 mb-4">
            JD
          </div>
          {!editMode && (
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {profile.name}
            </h2>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className={labelClass}>Name</label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className={inputClass}
              />
            ) : (
              <p className={valueClass}>{profile.name}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Email</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className={inputClass}
              />
            ) : (
              <p className={valueClass}>{profile.email}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Role</label>
            {editMode ? (
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                className={inputClass}
              />
            ) : (
              <p className={valueClass}>{profile.role}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Bio</label>
            {editMode ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows={4}
                className={inputClass}
              />
            ) : (
              <p className={`${valueClass} whitespace-pre-line`}>
                {profile.bio}
              </p>
            )}
          </div>

          {editMode && (
            <div className="text-right pt-4">
              <button onClick={handleSave} className={primaryButtonClass}>
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};