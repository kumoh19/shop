import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function Cart() {
  let state = useSelector((state) => {
    return state;
  }); //redux: prop없이 state전송가능
  let dispatch = useDispatch()
  // let suser = useSelector((state) => {
  //   return state.user;
  // });
  // let sstock = useSelector((state) => {
  //   return state.stock;
  // });
  // console.log(state);
  // console.log(suser);
  // console.log(sstock);

  return (
    <div>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td><button onClick={()=>{dispatch(changeName())}}>+</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
