import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { setUsername } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [newUsername, setNewUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (newUsername) {
      dispatch(setUsername(newUsername));
      navigate('/menu');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full flex-wrap">
        <div className="w-full">
          <p className="p-4 text-sm text-stone-600 md:text-base">
            👋 Welcome! Please start by telling us your name:
          </p>
        </div>
        <div className="flex w-full justify-center pb-4">
          <input
            type="text"
            placeholder="Your full name"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="input-text"
          />
        </div>
        {newUsername !== '' && (
          <div className="flex w-full justify-center">
            <Button type="primary">Start ordering</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
