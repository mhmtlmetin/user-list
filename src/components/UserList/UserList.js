import React, {
  useEffect,
  useState,
  useReducer,
  useRef,
  useLayoutEffect,
  useMemo
} from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination.js";
import Posts from "./Posts";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadUsersSuccess } from "../../redux/Action";
function UserList() {
  const [view, SetView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //redux

  const user = useSelector(state => state.users);
  const dispatch = useDispatch();
  const loaduser = value => dispatch(loadUsersSuccess(value));
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(response => {
      loaduser(response.data.results);
    });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <a onClick={() => SetView(!view)}>Card/Tablo</a>

      <Posts users={currentPosts} view={view} dispatch={dispatch} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={user.length}
        paginate={paginate}
      />
    </div>
  );
}
export default UserList;
