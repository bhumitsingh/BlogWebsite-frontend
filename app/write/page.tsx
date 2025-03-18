"use client";
import RichTextEditor from "@/app/components/rich-text-editor/editor";
import Nav from "@/app/components/ui/nav";
import { useState } from "react";

export default function Home() {
  const [post, setPost] = useState("");
  const onChange = (content: string) => {
    setPost(content);
    console.log(content);
  };
  return (
    <div className="bg-gray-100">
        <Nav />
        <div className="h-screen max-w-3xl mx-auto py-8">
            <RichTextEditor content={post} onChange={onChange} />
        </div>
    </div>
  );
}