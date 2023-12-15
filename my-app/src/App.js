import './App.css';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

import Auth from './containers/Auth';
import Todo from './containers/Todo';

function App() {
  const [user, setUser] = useState(null);
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      {user ? <Todo user={user} logout={logout} /> : <Auth />}
    </div>
  );
}

export default App;