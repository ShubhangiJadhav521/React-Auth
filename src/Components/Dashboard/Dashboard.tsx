import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import "./Dashboard.css";

interface DashboardProps {
  setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  hideNavbar: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const POSTS_API_URL = process.env.REACT_APP_POSTS_API_URL || 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_API_URL = process.env.REACT_APP_COMMENTS_API_URL || 'https://jsonplaceholder.typicode.com/comments';

function Dashboard({ setHideNavbar, hideNavbar }: DashboardProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(POSTS_API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(COMMENTS_API_URL);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    setHideNavbar(false);
    fetchPosts();
    fetchComments();
  }, [hideNavbar]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const indexOfLastPost = page * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      < div className='dashhead'>Dashboard</div>
      <TableContainer component={Paper} >
        <Table style={{ padding: '10px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Comment Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  {comments.filter((comment) => comment.postId === post.id).length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(posts.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );
}

export default Dashboard;
