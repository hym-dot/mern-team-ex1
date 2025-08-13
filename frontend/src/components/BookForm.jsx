import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BookForm.css'

const BookForm = () => {
    const API = import.meta.env.VITE_API_URL
    const [books, setBooks] = useState([])

    const localBooks = [
        { title: "React Basics", author: "홍유민", description: "리액트 기본 개념" },
        { title: "Node.js Guide", author: "이예빈", description: "노드.js 입문서" },
        { title: "MongoDB Mastery", author: "홍길동", description: "몽고DB 완전정복" }
    ];

    const fetchBooks = async () => {
        try {
            const res = await axios.get(`${API}/api/books`)
            const data = Array.isArray(res.data) ? res.data : []
            setBooks(data)
        } catch (error) {
            console.error('📛 책 불러오기 실패:', error)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <ul className="book-list">
            {localBooks.map((book, index) => (
                <li key={index} className="book-item">
                    <div><strong>제목:</strong> {book.title}</div>
                    <div><strong>작가:</strong> {book.author}</div>
                    <div><strong>설명:</strong> {book.description}</div>
                </li>
            ))}
        </ul>
    )
}

export default BookForm
