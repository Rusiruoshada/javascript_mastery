'use client';

import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import Profile from "@components/Profile";

const MyProfile = () => {
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }

    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();

        setPosts(data);
      };
      useEffect(() => {
        fetchPosts();
      }, []);
 console.log(session?.user.id)
  return (
    <Profile 
        name='my'
        desc= 'Welcome to your profile page'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile;