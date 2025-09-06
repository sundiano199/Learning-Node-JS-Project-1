import React from "react";
import { useState } from "react";

const Blog = () => {
  const content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dicta
        mollitia nisi iste tempora assumenda beatae corporis voluptate quod
        cupiditate ullam laudantium quos, est aliquam dolorum aspernatur
        voluptates ad corrupti nulla molestias a, sapiente consectetur
        perferendis? Ab omnis alias temporibus harum cumque eum perferendis enim
        non? Aperiam et nesciunt atque? Inventore repellendus ut at pariatur
        facilis! Dolore nihil corrupti quia perspiciatis ipsa saepe aspernatur
        ipsam rerum voluptate, esse laboriosam commodi animi facere neque nobis
        atque dolores cumque at placeat maiores quo porro? Pariatur libero fugit
        asperiores blanditiis, soluta nisi, minus explicabo praesentium eum, ad
        molestiae. Illo dolorem aut nam neque!`;

  const shortenendContent = `${content.slice(0, 20)}...`;
  const [readmore, setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(!readmore);
  };

  const usersEmail = "season@gmail.com";

  const changeMail = (email) => {
    const protectedPart = email.split("@")[0].slice(2, 6);
    const protectedEmail = email.replace(protectedPart, "*");
    return protectedEmail;
  };

  return (
    <div className="max-w-[500px] rounded-xl shadow-2xl mx-auto w-full p-4">
      <p>Email : {changeMail(usersEmail)}</p>
      <h1 className="text-2xl font-bold mb-1.5">Blog Article</h1>
      <p>{readmore ? content : shortenendContent}</p>
      <button onClick={handleClick} className="text-blue-400 cursor-pointer">
        {readmore ? "show less" : "show more"}
      </button>
    </div>
  );
};

export default Blog;