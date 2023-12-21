export const DeleteProfile = (url) => {
  const isConfirm = window.confirm(
    "Are you sure you want to delete this profile?"
  );

  if (isConfirm) {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }
};
