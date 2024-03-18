import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    // 이렇게 해주지 않으면 value가 NaN이 되어 parseInt에서 에러가 발생한다.
    const diffValue = e.target.value ? e.target.value : 0;

    onSetDiff(parseInt(diffValue, 10));
  };
  
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;