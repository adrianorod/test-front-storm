import api from './api';

const getUsers = () => (
  api.get('/users.json')
    .then((res) => res.data)
);

export default { getUsers };
