function Even({count}) {
  return <div>{count % 2 === 0 ? <div>현재 카운터는 짝수입니다.</div> : <div>현재 카운터는 홀수입니다.</div>}</div>;
};

export default Even;