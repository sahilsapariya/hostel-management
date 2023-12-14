export const DeleteProfile = (category, id) => {
  const isConfirm = window.confirm(
    "Are you sure you want to delete this profile?"
  );

  if (isConfirm) {
    fetch(
      `http://localhost:8000/profiles/${category.slice(
        0,
        category.length - 1
      )}/${id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }
};
