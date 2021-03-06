import React, {
  useEffect,
  useState,
  useReducer,
  useRef,
  useLayoutEffect,
  useMemo
} from "react";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import Pagination from "../Pagination/Pagination.js";
import Posts from "./Posts";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../redux/Action";
function UserList() {
  const [view, SetView] = useState("card");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //redux

  const user = useSelector(state => state.users);
  const updated = useSelector(state => state.isupdated);

  const dispatch = useDispatch();
  const loaduser = value => dispatch(loadUsers(value));
  useEffect(() => {
    loaduser();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "200px",
          marginRight: "200px",
          marginBottom: "20px",
          borderBottom: "2px solid #ddd"
        }}
      >
        <NavLink onClick={() => SetView("card")}>Card</NavLink>
        <NavLink onClick={() => SetView("tablo")}>Tablo</NavLink>
      </div>
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
