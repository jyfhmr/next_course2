import React from "react";
import ButtonWithConsoleLog from "@/components/button"
async function fetchData() {
  const res = await fetch("https://reqres.in/api/users");
  const resConvertedToJson = await res.json();
  return resConvertedToJson.data;
}

async function HomePage() {
  const data = await fetchData();
  console.log(data);

  return (
    <div>
      <div>
        {data.map((user) => {
          return <div key={user.id}>
             <div>{user.id}</div>
             <div>{user.email}</div>
             <div>{user.first_name} {user.last_name}</div>
             <img src={user.avatar} width={{width: "150px"}}/>
             <ButtonWithConsoleLog userId={user.id}/>
          </div>;
        })}
      </div>
    </div>
  );
}

export default HomePage;
