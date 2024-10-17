var Prop_com2 = (fake) => {
  return (
    <>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Rating Count</th>
        </tr>
        {fake.fake.map((val, ind) => (
          <tr key={ind}>
            {console.log(val["image"])}
            <td>{val["id"]}</td>
            <td>{val["title"]}</td>
            <td>{val["price"]}</td>
            <td>{val["category"]}</td>
            <td>{val["description"]}</td>
            <td>
              <img src={val["image"]} alt="" width={100} />
            </td>
            <td>{val["rating"].rate}</td>
            <td>{val["rating"].count}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Prop_com2;
