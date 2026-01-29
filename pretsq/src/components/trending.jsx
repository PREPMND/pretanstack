import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../api/popularapi.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Popular() {
  const navigate= useNavigate();
  const [num,setnum]=useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
  });

  if (isLoading) return (<>

    <p className='h-screen flex justify-center items-center '>Loading...</p></>)
  if (error) {
    console.log(error);

    return <p>Something went wrong</p>;
  }