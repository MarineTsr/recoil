function TodoInfos({ item }) {
  return (
    <>
      {item && (
        <>
          <hr />
          <h3 className="mb-4">TodoItem #{item._id}</h3>
          <p>Id. : {item._id}</p>
          <p>
            Date de création : {new Date(item.createdAt).toLocaleDateString()}
          </p>
          <p>Contenu : {item.content}</p>
          <p>Traitée : {item.done ? "oui" : "non"}</p>
        </>
      )}
    </>
  );
}

export default TodoInfos;
