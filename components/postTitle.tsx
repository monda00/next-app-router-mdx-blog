interface PostTitleProps {
  postTitle: string
}

function PostTitle({ postTitle }: PostTitleProps) {
  return (
    <div className="hero h-32 bg-base">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{postTitle}</h1>
        </div>
      </div>
    </div>
  )
}

export default PostTitle
