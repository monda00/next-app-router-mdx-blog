'use client'

import Fuse from 'fuse.js'
import type { FuseResult } from 'fuse.js'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FaSearch } from 'react-icons/fa'
import { CustomIcon } from '@/components/ui/customIcon'
import SearchResult from '@/components/ui/searchResult'
import type { SearchResultPost } from '@/types/post'

export default function SearchModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<SearchResultPost[]>([])
  const [results, setResults] = useState<FuseResult<SearchResultPost>[]>([])

  useHotkeys('meta+k', (e) => {
    e.preventDefault()
    dialogRef.current?.showModal()
    setTimeout(() => inputRef.current?.focus(), 100)
  })

  useEffect(() => {
    fetch('/posts.json')
      .then((res) => res.json())
      .then((data: SearchResultPost[]) => setPosts(data))
      .catch((err) => console.error('❌ 検索の読み込みに失敗:', err))
  }, [])

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['title', 'body'],
      threshold: 0.3,
    })
  }, [posts])

  useEffect(() => {
    if (query.length > 1) {
      setResults(fuse.search(query))
    } else {
      setResults([])
    }
  }, [query, fuse])

  return (
    <>
      <button
        onClick={() => {
          dialogRef.current?.showModal()
          setTimeout(() => inputRef.current?.focus(), 100)
        }}
        className="btn btn-ghost btn-secondary gap-2 mr-0 sm:mr-8"
      >
        <CustomIcon icon={FaSearch} size={20} />
        <kbd className="hidden sm:block kbd kbd-md text-base-content">⌘</kbd>
        <kbd className="hidden sm:block kbd kbd-md text-base-content">K</kbd>
      </button>

      <dialog
        ref={dialogRef}
        className="modal backdrop:bg-black/30 items-start pt-24"
        onClose={() => setQuery('')}
      >
        <div className="modal-box w-full max-w-2xl p-4 flex flex-col">
          <div className="border-b border-base-300">
            <h3 className="font-bold text-lg my-2">記事検索</h3>
            <label className="input input-lg w-full mt-4 mb-2">
              <CustomIcon icon={FaSearch} size={24} className="opacity-50" />
              <input
                type="text"
                placeholder="検索..."
                className="grow"
                value={query}
                ref={inputRef}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="max-h-80 overflow-y-auto px-4 py-2">
            {query.length > 1 && (
              <ul className="list-outside divide-y divide-base-300 px-0 my-0">
                {results.length > 0 ? (
                  results.map((result) => (
                    <SearchResult
                      key={result.item.slug}
                      result={result}
                      onClick={() => dialogRef.current?.close()}
                    />
                  ))
                ) : (
                  <li className="list-none p-4 text-sm text-base-content">
                    該当する記事がありません
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>✕</button>
        </form>
      </dialog>
    </>
  )
}
