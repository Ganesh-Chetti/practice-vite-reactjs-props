import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5-stay-postive.jpg";

var arr = [img1, img2, img3, img4, img5];

var IMG = () => {
  return (
    <>
      <h1>Images</h1>

      {arr.map((val, ind) => {
        return (
          <table border={1}>
            <tr key={ind}>
              <td>
                <img src={val} alt="img" width={300} />
              </td>
            </tr>
          </table>
        );
      })}
    </>
  );
};

export default IMG;
