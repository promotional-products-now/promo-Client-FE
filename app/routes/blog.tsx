import { Link } from "@remix-run/react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Customers Appreciation Helps Your B2B Sales",
      body: " PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      id: 1,
      title: "How Customers Appreciation Helps Your B2B Sales",
      body: " PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      id: 1,
      title: "How Customers Appreciation Helps Your B2B Sales",
      body: " PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      id: 1,
      title: "How Customers Appreciation Helps Your B2B Sales",
      body: " PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      id: 1,
      title: "How Customers Appreciation Helps Your B2B Sales",
      body: " PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
    {
      id: 1,
      title: "How Customers Appreciation Helps Your B2B Sales",
      body: " PMS codes are print code used to identify the exact shade of the print color needed to match the shade of the colour in your logo or artwork. Often a company brand is identified by the shade of the colour and therefore, the same shade needs to be used when reproducing the logo.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 w-full mx-auto px-5 py-10 text-sm lg:w-[70%]">
      <div className="flex flex-col gap-1 text-center capitalize">
        <b className="text-xl font-extrabold">our Blog</b>
        <p className="text-foreground-500">Browse our latest new</p>
      </div>
      <div className="grid grid-cols-1 gap-y-5 gap-x-4 lg:grid-cols-3">
        {blogPosts &&
          blogPosts.map((post, index) => (
            <Link
              to={`/urlHere/${post.id}`}
              key={index}
              className="p-2 border-2 border-foreground-50"
            >
              <div className="flex flex-col gap-3">
                <img src="/images/Frame_30.png" className="w-full h-[200px] lg:h-[150px]" />
                <div className="px-2">
                  <p className="capitalize font-extrabold text-[15px]">{post.title}</p>
                  <p className="line-clamp-3 my-3">{post.body}</p>
                  <Link to="" className="flex items-center gap-2 font-semibold uppercase">
                    <img src="./images/icons/arrow-right-02.png" alt="" />
                    View article
                  </Link>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blog;
