import Tag from '@/components/post/contents/tag'

interface TagListProps {
  tags: string[]
}

function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap my-2">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  )
}

export default TagList
