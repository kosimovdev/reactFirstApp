import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Index = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("error fetching data");
      });
  }, []);

  console.log(post);

  return (
    <>
      {post.length ? (
        <div className="grid grid-cols-4 gap-4 p-5 container mx-auto place-content-between">
          {post?.map((post) => (
            <div className="card w-[300px] rounded-lg shadow-lg">
              <img
                key={post.id}
                className="rounded-lg w-full h-[160px] object-cover mb-[24px]"
                src={post.flags.svg}
                alt={post.id}
              />
              <div className="p-3">
                <h1 key={post.id}>
                  Name: <strong>{post.name}</strong>
                </h1>
                <p key={post.id}>
                  Capital: <strong>{post.capital}</strong>
                </p>
                <p key={post.id}>
                  Population: <strong>{post.population}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>error fetching</h1>
      )}
    </>
  );
};

export default Index;
