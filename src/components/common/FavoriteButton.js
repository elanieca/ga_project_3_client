import { useState, useEffect } from 'react';
import { AUTH } from '../../lib/auth';
import { API } from '../../lib/api';
import Radio from '@mui/material/Radio';

export default function FavoriteButton({ id }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    API.POST(
      API.ENDPOINTS.userFavoriteBooks(AUTH.getPayload().userId),
      {
        bookId: id
      },
      API.getHeaders()
    )
      .then(() => {})
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, [isChecked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Radio
      checked={isChecked}
      onClick={handleChange}
      value={id}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
    />
  );
}
