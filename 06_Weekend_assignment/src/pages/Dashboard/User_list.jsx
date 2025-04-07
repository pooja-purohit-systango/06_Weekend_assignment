import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { get_user, post_user } from '../../api/dashboard_api/api_services';

const User_list = () => {
  const [user_data, setUserData] = useState({
    name: '',
    company: '',
    technology: '',
    description: '',
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: get_user,
  });

  const add_user_mutation = useMutation({
    mutationFn: post_user,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setUserData({
        name: '',
        company: '',
        technology: '',
        description: '',
      });
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    add_user_mutation.mutate(user_data);
  };

  const handleuser = (id) => {
    navigate(`/User_details/${id}`);
  };

  if (isLoading)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="flex gap-8 p-6 bg-gray-50 min-h-screen">
      <form
        onSubmit={handleFormSubmit}
        className="w-1/2 bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-200"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New User</h2>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            value={user_data.name}
            onChange={(e) => setUserData({ ...user_data, name: e.target.value })}
            required
             minlength="3"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Company:</label>
          <input
            type="text"
            value={user_data.company}
            onChange={(e) => setUserData({ ...user_data, company: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Technology:</label>
          <input
            type="text"
            value={user_data.technology}
            onChange={(e) => setUserData({ ...user_data, technology: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Description:</label>
          <input
            type="text"
            value={user_data.description}
            onChange={(e) => setUserData({ ...user_data, description: e.target.value })}
            required
             minlength="20"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          Add
        </button>
      </form>

      <div className="w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Users List</h2>
        <div className="space-y-3">
          {data?.data?.map((user) => (
            <div
              onClick={() => handleuser(user.id)}
              key={user.id}
              className="cursor-pointer p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              <span className="text-gray-800 font-medium">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User_list;
