import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-text"
          />
        </div>
        {username !== '' && (
          <div className="flex w-full justify-center">
            <Button>Start ordering</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
