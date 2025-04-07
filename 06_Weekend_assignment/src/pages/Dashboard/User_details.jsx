import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { get_user_detail } from '../../api/dashboard_api/api_services';

const User_details = () => {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ['userDetails', id],
    queryFn: () => get_user_detail(id),
  });

  if (isLoading)
    return <p className="text-center text-gray-500 mt-10">Loading user details...</p>;

  if (error)
    return <p className="text-center text-gray-600 mt-10">Error fetching user details.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">User Details</h2>
      <ul className="space-y-4 text-gray-700">
        <li>
          <span className="font-semibold text-gray-800">Name:</span> {data?.data?.name}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Company:</span> {data?.data?.company}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Technology:</span> {data?.data?.technology}
        </li>
        <li>
          <span className="font-semibold text-gray-800">Description:</span> {data?.data?.description}
        </li>
      </ul>
    </div>
  );
};

export default User_details;
