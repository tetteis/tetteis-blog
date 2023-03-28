import { FunctionComponent } from "react";

import Link from "next/link";
import Image from "next/image";

import { Blog } from "@/interfaces/Blog";
import { makePostContentShort } from "@/lib/client/utils";

type Props = {
  blog: Blog;
};

export const BlogItem: FunctionComponent<Props> = ({ blog }) => {
  return (
    <div key={blog.slug} className="group">
      <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
        <Link legacyBehavior href={`/blog/${blog.slug}`}>
          <a>
            <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
              <Image
                priority
                fill
                objectFit="cover"
                src={blog.coverImage}
                className="rounded-lg hover:cursor-pointer"
                alt={""}
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-bold">
            <span aria-hidden="true" className="inset-0" />
            {makePostContentShort(blog.title)}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {makePostContentShort(blog.description)}
          </p>
        </div>
      </div>
      <Link legacyBehavior href={`/blog/${blog.slug}`}>
        <a className="text-sm font-bold text-gray-700">Read More</a>
      </Link>
    </div>
  );
};
