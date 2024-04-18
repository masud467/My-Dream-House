import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import firebase from "firebase/compat/app";





const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
    const [newName, setNewName] = useState(user.displayName || '');
    const [newPhotoURL, setNewPhotoURL] = useState(user.photoURL || '');
  

  const handleSave = () => {
    const currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({
        displayName: newName
      }).then(() => {
        // Update the user's photo URL
        return currentUser.updateProfile({
          photoURL: newPhotoURL
        });
      }).then(() => {
        // Profile updated successfully
        alert("Profile updated successfully!");
        setNewName('');
        setNewPhotoURL('');
        console.log('clear')
       
      }).catch((error) => {
        // An error occurred while updating profile
        console.error(error);
        alert("An error occurred while updating profile. Please try again.");
      });
      
  };

    return (
       
        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-10 mx-auto">
            <h2 className="text-center text-2xl font-bold">Edit Profile</h2>
      <label className="text-xl font-medium">
        New Name:
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      </label>
      <label className="text-xl font-medium">
        New Photo URL:
        <input type="text" value={newPhotoURL} onChange={(e) => setNewPhotoURL(e.target.value)} />
      </label>
      <button onClick={handleSave} className="btn btn-secondary">Save Changes</button>
        </div>
    );
};

export default UpdateProfile;