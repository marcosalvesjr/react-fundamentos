import React, { useEffect, useState } from "react";
import { fetchData } from "../service/postService";
import type { Post } from "../interfaces/postInterface";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetchData();
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);
  return (
    <ul className="flex flex-col gap-4">
      {posts.map((item) => (
        <li className="bg-slate-600 rounded-md px-2 py-3">
          <div>
            <span>{item.body}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
