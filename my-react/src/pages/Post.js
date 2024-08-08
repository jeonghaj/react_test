import { useEffect, useState } from "react";
import BsNavBar from "../components/BsNavBar";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("/posts")
        .then(res=>setPosts(res.data))
        .catch(err=>console.log(err))
    },[])

    return (
        <>
            &nbsp; <Link to="/posts/new">Add Post</Link>
            <h1>Post List</h1>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(item=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                    </tr> )
                    }
                </tbody>
            </Table>
        </>
    );
}

export default Post;