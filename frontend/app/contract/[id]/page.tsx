'use client';

import useSWR from 'swr';
import React from 'react';

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useSWR(
    `/api/contract?id=${params.id}`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log('data', data);

  return (
    <div>
      <h1>Contract Details</h1>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Client: {data.client}</p>
      <p>Status: {data.status}</p>
    </div>
  );
}
