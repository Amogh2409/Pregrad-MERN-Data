import React, { useState, useEffect } from 'react';

function fetchData() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then((data) => {
                setData(data);
                setLoading(false);
            }).catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <div>
            <h1>
                Fetched Data
            </h1>
            <ul>{data.map((post) => (
                <li key={post.id}>
                    <strong>
                        {post.title}
                    </strong>
                    <p>{post.body}</p>
                </li>
            ))}

            </ul>
        </div>
    );
}

export default App;