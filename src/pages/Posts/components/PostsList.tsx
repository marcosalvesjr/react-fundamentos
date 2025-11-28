import React, { useEffect, useState } from "react";
import { fetchData } from "../service/postService";
import type { Post } from "../interfaces/postInterface";

export function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchData();
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);
  return (
    <>
      {isLoading && <span>Carregando...</span>}
      <ul className="flex flex-col gap-4">
        {posts.map((item) => (
          <li className="bg-slate-600 rounded-md px-2 py-3">
            <div>
              <span>{item.body}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
