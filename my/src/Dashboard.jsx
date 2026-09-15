


function AdminBadge(){  
    return <p>Admin</p>
}

function Dashboard({ isLoggedIn, isAdmin, hasError }) {
  // Early return
  if (hasError) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <div>
      {!isLoggedIn ? (
        <h1>Please log in</h1>
      ) : (
        <>
          <h1>Welcome back!</h1>

          {isAdmin && <AdminBadge />}
        </>
      )}
    </div>
  );
}


export default Dashboard