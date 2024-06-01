import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "../store/userSlice.js";
import { addCount } from "../store.js";
import { memo, useState } from "react";

let Child = memo( function(){
  console.log('재렌더링 됨')
  return <div>자식</div>
})

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
  let [count, setCount] = useState(0)

  return (
    <div>
      <Child count={count}></Child>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6>
      <button onClick={()=>{ dispatch(increase(100)) }}>나이증가</button>
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
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td><button onClick={()=>{dispatch(addCount(state.cart[i].id))}}>+</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
