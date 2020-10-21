import React, { useState } from "react"
import axios from "axios"

const Day5 = () => {
  const URL = "https://hn.algoliaa.com/api/v1/search"
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchArticles = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const response = await axios.get(`${URL}?query=${query}`)
      const { hits } = response.data
      setArticles(hits)
      setIsLoading(false)
    } catch {
      console.log("error")
      setIsError(true)
    }
  }

  const handleSubmit = e => {
    fetchArticles()
  }

  const handleOnChange = e => {
    setQuery(e.target.value)
  }

  const ShowArticles = () => {
    if (isLoading) {
      return <p>Loading...</p>
    }

    if (isError) {
      return <p>Error, please try again...</p>
    }

    return (
      <ul>
        {articles.map((it, i) => (
          <li key={i}>{it.title}</li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <div>
        <label htmlFor="search-id" />
        <input type="text" id="search-id" onChange={handleOnChange} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <ShowArticles />
    </>
  )
}

export default Day5
